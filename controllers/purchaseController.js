import { pool } from "../db.js";

export const formPurchase = async (req, res) => {
    const { rows } = await pool.query("SELECT * FROM product");
    res.render("purchase/form", { products: rows });
};

export const createPurchase = async (req, res) => {
    const { product_id, quantity } = req.body;

    // reduce stoct
    await pool.query(
        "UPDATE stock SET quantity = quantity - $1 WHERE product_id = $2",
        [quantity, product_id]
    );

    // input purchase
    await pool.query(
        "INSERT INTO purchase (product_id, quantity, status) VALUES ($1, $2, 'processed')",
        [product_id, quantity]
    );

    res.redirect("/purchase");
};

export const listPurchase = async (req, res) => {
    const { rows } = await pool.query(`
        SELECT pb.id, p.image_url, pb.quantity, pb.status, pb.created_at,
            p.name AS product
        FROM purchase pb
        JOIN product p ON pb.product_id = p.id
        ORDER BY pb.id ASC
    `);

    res.render("purchase/list", { purchases: rows });
};

export const purchaseDetails = async (req, res) => {
    const { id } = req.params;

    const { rows } = await pool.query(
        `SELECT pb.id, p.image_url, pb.quantity, pb.status, pb.created_at,
            p.name AS product
        FROM purchase pb
        JOIN product p ON pb.product_id = p.id
        WHERE pb.id = $1`,
        [id]
    );

    if (rows.length === 0) {
        return res.send("Purchase not found");
    }

    res.render("purchase/details", { purchase: rows[0] });
};

export const cancelPurchase = async (req, res) => {
    const id = req.params.id;

    const purchase = await pool.query(
        "SELECT * FROM purchase WHERE id=$1",
        [id]
    );
    const data = purchase.rows[0];

    if (data.status === "canceled") return res.redirect("/purchase");

    await pool.query(
        "UPDATE stock SET quantity = quantity + $1 WHERE product_id = $2",
        [data.quantity, data.product_id]
    );

    await pool.query(
        "UPDATE purchase SET status = 'canceled' WHERE id = $1",
        [id]
    );

    res.redirect("/purchase");
};

export const markDelivered = async (req, res) => {
    const { id } = req.params;

    await pool.query(
        "UPDATE purchase SET status='delivered' WHERE id=$1",
        [id]
    );

    res.redirect("/purchase");
};

export const undoToProcessed = async (req, res) => {
    const { id } = req.params;

    const purchase = await pool.query(
        "SELECT * FROM purchase WHERE id=$1",
        [id]
    );
    const data = purchase.rows[0];

    // Jika undo dari delivered → idealnya tidak sentuh stok
    if (data.status === "delivered") {
        await pool.query(
            "UPDATE purchase SET status='processed' WHERE id=$1",
            [id]
        );
        return res.redirect("/purchase");
    }

    // Jika undo dari canceled → harus kurangi stok
    if (data.status === "canceled") {
        await pool.query(
            "UPDATE stock SET quantity = quantity - $1 WHERE product_id = $2",
            [data.quantity, data.product_id]
        );

        await pool.query(
            "UPDATE purchase SET status='processed' WHERE id=$1",
            [id]
        );
        return res.redirect("/purchase");
    }

    // selain itu, ignore
    res.redirect("/purchase");
};
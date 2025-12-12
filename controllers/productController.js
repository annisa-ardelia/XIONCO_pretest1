import { pool } from "../db.js";

export const listProduct = async (req, res) => {
    const { rows } = await pool.query(`
        SELECT p.id, p.image_url, p.name, p.price, s.quantity AS stock
        FROM product p
        LEFT JOIN stock s ON p.id = s.product_id
        ORDER BY p.id ASC
    `);

    res.render("product/list", { products: rows });
};

export const productDetails = async (req, res) => {
    const { id } = req.params;

    const { rows } = await pool.query(
        `SELECT p.id, p.image_url, p.name, p.price, s.quantity AS stock
        FROM product p
        LEFT JOIN stock s ON p.id = s.product_id
        WHERE p.id = $1`,
        [id]
    );

    if (rows.length === 0) {
        return res.send("Product not found");
    }

    res.render("product/details", { product: rows[0] });
};
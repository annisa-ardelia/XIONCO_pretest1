import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";
import productRoutes from "./routes/product.js";
import purchaseRoutes from "./routes/purchase.js";

const app = express();

// Fix ES Module dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Setup EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layout");

// Routes
app.use("/product", productRoutes);
app.use("/purchase", purchaseRoutes);

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(process.env.PORT, () =>
    console.log(`Server running on http://localhost:${process.env.PORT}`)
);
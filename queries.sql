-- TABLE PRODUCT
CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    image_url TEXT NOT NULL
);

-- TABLE STOCT
CREATE TABLE stock (
    product_id INTEGER PRIMARY KEY REFERENCES product(id),
    quantity INTEGER NOT NULL
);

-- TABLE PURCHASE
CREATE TABLE purchase (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES product(id),
    quantity INTEGER NOT NULL,
    status VARCHAR(20) DEFAULT 'processed',
    created_at TIMESTAMP DEFAULT NOW()
);

-- SEED 10 FURNITURE PRODUCTS & PRICES
INSERT INTO product (name, price, image_url) VALUES
('Modern Wooden Desk', 1200000, 'https://i.ibb.co.com/3yjCf5Fv/4a7c9cbc6197a343a8689c110912ba20.jpg'),
('Ergonomic Office Chair', 850000, 'https://i.ibb.co.com/67LLWbNh/1-ae3e6399-3c4f-412e-a668-6bfe36e4bd31.jpg'),
('Minimalist Bookshelf', 650000, 'https://i.ibb.co.com/TJCnPMh/81-A14q27-Gd-L-AC-UF1000-1000-QL80.jpg'),
('Compact TV Cabinet', 780000, 'https://i.ibb.co.com/XR1B6wk/2m-tv-t230382913257542-1200x.jpg'),
('Queen Size Bed Frame', 2400000, 'https://i.ibb.co.com/2Y5fPxms/Tufted-Upholstered-Low-Profile-Platform-Bed.jpg'),
('Two-Seater Sofa', 1800000,'https://i.ibb.co.com/WpGS9jrt/NRBF006-2-SG-1.jpg'),
('Dining Table Set (4 Chairs)', 2200000, 'https://i.ibb.co.com/TxT3Pr4B/VIGEVANO-BLACK-Stowaway-Dining-Set-COVER.jpg'),
('Nightstand Drawer', 350000, 'https://i.ibb.co.com/W4DjxTw6/81my3-Rf-Azn-L-AC-UF894-1000-QL80.jpg'),
('Wardrobe Sliding Door', 2750000, 'https://i.ibb.co.com/99cSjtWj/ARTI-AR-03-G.jpg'),
('Coffee Table Marble Top', 950000, 'https://i.ibb.co.com/Df8Hn5b8/elisabetta-coffee-table-calacatta-white-219326.jpg');

INSERT INTO stock (product_id, quantity)
SELECT id, 20 FROM product;
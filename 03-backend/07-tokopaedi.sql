CREATE TYPE categories
AS ENUM ('automotive', 'fashion', 'food');

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description TEXT,
	price DECIMAL(6, 2) NOT NULL,
	sku CHAR(8) UNIQUE,
	category categories NOT NULL,
	stock_quantity INTEGER NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT NULL
);

INSERT INTO products (name, description, price, sku, category, stock_quantity)
VALUES
('Honda Scoopy', 'Glow in the dark', 5000.00, 'ABC123LX', 'automotive', 10);

INSERT INTO products (name, description, price, sku, category, stock_quantity) 
VALUES
('Nike Air Max', 'Running shoes', 120.00, 'DEF456YZ', 'fashion', 5),
('Pizza Margherita', 'Classic Italian pizza', 12.99, 'WXY678ZA', 'food', 50),
('Coca-Cola', 'Classic soda', 1.50, 'BCD901EF', 'food', 100),
('Ford Mustang', 'Sports car', 4500.00, 'FGH234IJ', 'automotive', 2),
('Levis Jeans', 'Classic denim', 75.00, 'RST345UV', 'fashion', 30),
('Gucci Belt', 'Leather belt', 450.00, 'KLM567KL', 'fashion', 8),
('Burger', 'Delicious beef burger', 8.99, 'PQR456LM', 'food', 25),
('Motorcycle Helmet', 'Full-face helmet', 150.00, 'STU789NO', 'automotive', 12),
('Sunglasses', 'Ray-Ban sunglasses', 180.00, 'VWX012PQ', 'fashion', 15);

-- AGGREGATE FUNCTIONS
-- COUNT
SELECT COUNT(*) AS total_products
FROM products;

-- SUM
SELECT SUM(stock_quantity) AS total_stock
FROM products;

SELECT SUM(price * stock_quantity) AS total_value
FROM products;

-- AVERAGE
SELECT AVG(price) AS average_price
FROM products;

-- MAX
SELECT MAX(price) AS highest_price
FROM products;

-- MIN
SELECT MIN(price) AS lowest_price
FROM products;

SELECT
COUNT (*) AS total_products,
SUM(price * stock_quantity) AS total_value,
MIN(price) AS lowest_price
FROM products;

SELECT * FROM products;

-- Table Customers
CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT NULL
);

-- Table Wallets
CREATE TABLE wallets (
	id SERIAL PRIMARY KEY,
	credit DECIMAL(20, 2) DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT NULL,
);

-- Table Banks
CREATE TABLE banks (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) UNIQUE,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT NULL
);
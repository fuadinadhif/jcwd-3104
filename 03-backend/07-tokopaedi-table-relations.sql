-- Table Products
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
	customer_id INTEGER UNIQUE REFERENCES customers(id),
	credit DECIMAL(20, 2) DEFAULT 0,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT NULL,
);

-- Table Banks
CREATE TABLE banks (
	id SERIAL PRIMARY KEY,
	wallet_id INT UNIQUE REFERENCES wallets(id),
	name VARCHAR(50) UNIQUE,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT NULL
);

-- Table Orders
CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	product_id INT REFERENCES products(id),
	customer_id INT REFERENCES customers(id),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT NULL
);




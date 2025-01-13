-- INNER JOIN
SELECT
  customers.name AS customer_name,
  orders.id AS order_id,
  products.name AS product_name
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
INNER JOIN products ON products.id = orders.product_id;

-- LEFT JOIN
SELECT
  customers.id AS customer_id,
  customers.name AS customer_name,
  wallets.credit AS customer_credit
FROM customers
LEFT JOIN wallets ON wallets.customer_id = customers.id
ORDER BY customers.id DESC;

-- RIGHT JOIN
SELECT
  customers.name AS customer_name,
  wallets.credit AS customer_credit,
  banks.name AS bank_name
FROM customers
RIGHT JOIN wallets ON wallets.customer_id = customers.id
RIGHT JOIN banks ON banks.wallet_id = wallets.id;

SELECT
  customers.id AS customer_id,
  customers.name AS customer_name,
  wallets.credit AS customer_credit
FROM wallets
RIGHT JOIN customers ON wallets.customer_id = customers.id
ORDER BY customers.id DESC;

-- JOIN V.2
CREATE DATABASE intro_to_join;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  stock INTEGER,
  price DECIMAL(20, 2)
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  product_id INTEGER REFERENCES products(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customers (name, email)
VALUES
('Jonathan', 'jonathan@mail.com'),
('Samson', 'samson@mail.com'),
('Dereck', 'dereck@mail.com');

INSERT INTO products (name, stock, price)
VALUES
('Laptop', 10, 5000),
('Phone', 5, 2500),
('Tumblr', 20, 1000);

INSERT INTO transactions (customer_id, product_id)
VALUES
(1, 1),
(2, 2);

SELECT
  customers.id AS customer_id,
  customers.name AS customer_name,
  transactions.id AS transactions_id,
  transactions.created_at AS transaction_date
FROM customers
INNER JOIN transactions ON transactions.customer_id = customers.id;

SELECT
  c.id AS customer_id,
  c.name AS customer_name,
  t.id AS transactions_id,
  t.created_at AS transaction_date
FROM customers c
LEFT JOIN transactions t ON t.customer_id = c.id;

SELECT 
  t.id AS transaction_id,
  t.created_at AS transaction_date,
  p.name AS product_name
FROM transactions t
RIGHT JOIN products p ON t.product_id = p.id;

SELECT 
  p.name AS product_name,
  t.id AS transaction_id,
  t.created_at AS transaction_date
FROM products p
CROSS JOIN transactions t;


-- EXERCISE
INSERT INTO transactions (customer_id, product_id)
VALUES
(1, 3),
(2, 1),
(1, 2),
(3, 1),
(3, 2);

SELECT
  customers.name AS customer_name,
  COUNT(transactions.id) AS total_transactions
FROM customers
INNER JOIN transactions ON customers.id = transactions.customer_id
GROUP BY customers.name
HAVING COUNT(transactions.id) > 2;
BEGIN; -- Start transaction

-- First query - Update stock
UPDATE products
SET stock = stock - 1
WHERE id = 1 AND stock > 0;

INSERT INTO transactions (customer_id, product_id)
VALUES
(1, 1);

COMMIT; -- If success

ROLLBACK; -- If failed
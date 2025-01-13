-- Find products name that never have been purchased
SELECT 
  name
FROM products
WHERE id NOT IN (
  SELECT product_id
  FROM transactions
);


-- 1.
CREATE DATABASE purwadhika;
CREATE DATABASE purwadhika_branch;
CREATE DATABASE purwadhika_office;

-- 2.
SELECT datname
FROM pg_database
WHERE datname LIKE '%purwadhika%';

-- 3.
CREATE TABLE students (
	id SERIAL PRIMARY KEY,
	last_name VARCHAR(50),
	first_name VARCHAR(50),
	address VARCHAR(50),
	city VARCHAR(50)
);

-- 4.
ALTER TABLE students
ADD COLUMN email VARCHAR(75);

-- 5.
ALTER TABLE students
ADD COLUMN gender VARCHAR(25),
ADD COLUMN batch_code VARCHAR(25),
ADD COLUMN phone_number VARCHAR(25),
ADD COLUMN alt_phone_number VARCHAR(25);

-- 6.
ALTER TABLE students
RENAME COLUMN alt_phone_number TO description;

-- 7.
ALTER TABLE students
DROP COLUMN gender;

SELECT * FROM students;
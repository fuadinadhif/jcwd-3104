-- Create Table
CREATE TABLE IF NOT EXISTS students (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	gender VARCHAR(20),
	grade CHAR(2)
);

-- Read/Select Data From A Table
SELECT * FROM students;

-- Create Record
INSERT INTO students (name, email, gender, grade)
VALUES
('John Doe', 'john@mail.com', 'male', '1A'),
('Jane Smith', 'jane@mail.com', NULL, '5A');

-- Edit Record
UPDATE students
SET id = 3
WHERE id = 4;

-- Select And Show By Order
SELECT * 
FROM students 
ORDER BY id DESC
LIMIT 2;

-- Select By Condition
SELECT id, name
FROM students
WHERE id > 2;

-- Select Offset
SELECT * 
FROM students 
ORDER BY id DESC
OFFSET 1;

-- Delete Record
DELETE FROM students
WHERE id = 2 OR email = 'john@mail.com';

SELECT * FROM students;

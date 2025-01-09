-- 1.
CREATE TABLE branch (
	id SERIAL PRIMARY KEY,
	branch_name VARCHAR(50),
	pic VARCHAR(50),
	address VARCHAR(50),
	city VARCHAR(50),
	province VARCHAR(50)
);

INSERT INTO branch (branch_name, pic, address, city, province)
VALUES
('BSD', 'THOMAS', 'GREEN OFFICE PARK 9', 'BSD', 'TANGERANG'),
('JKT', 'BUDI', 'MSIG TOWER', 'JAKARTA SELATAN', 'JAKARTA'),
('BTM', 'ANGEL', 'NONGSA', 'BATAM', 'KEP. RIAU');

-- 2.
UPDATE branch
SET pic = 'DONO'
WHERE branch_name = 'BSD';

-- 3.
INSERT INTO branch (branch_name, pic, address, city, province)
VALUES ('BLI', 'TONO', 'GIANYAR', 'GIANYAR', 'BALI');

SELECT * FROM branch;
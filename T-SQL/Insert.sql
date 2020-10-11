CREATE TABLE cats
    (
        cat_id INT NOT NULL ,
        name VARCHAR(100),
        age INT,
        PRIMARY KEY(cat_id)
    );
mysql-ctl cli
source first_file.sql
INSERT INTO cats(cat_id,name, age)
VALUES(1,'Charlie', 17);


INSERT INTO cats(cat_id,name, age)
VALUES(2,'Connie', 10);
SELECT * FROM cats;
source testing/insert.sql
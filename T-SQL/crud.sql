use shirts_db;
create table shirts(shirt_id int not NULL  ,
			 article varchar(100),
			 color VARCHAR(100),
			 shirt_size varchar(100),
			 last_worn int,
			 primary key  (shirt_id)
			 )
			 
insert into shirts (shirt_id,article ,color,shirt_size,last_worn) 
values ('1','t-shirt','white','s','10')


INSERT INTO shirts(shirt_id, article, color, shirt_size, last_worn) VALUES
('9','t-shirt', 'white', 'S', 10),
('2','t-shirt', 'green', 'S', 200),
('3','polo shirt', 'black', 'M', 10),
('4','tank top', 'blue', 'S', 50),
('5','t-shirt', 'pink', 'S', 0),
('6','polo shirt', 'red', 'M', 5),
('7','tank top', 'white', 'S', 200),
('8','tank top', 'blue', 'M', 15);


select * from shirts


INSERT INTO shirts(shirt_id, color, article, shirt_size, last_worn) 
VALUES('10','purple', 'polo shirt', 'medium', 50);


select article , color from shirts


select * from shirts where shirt_size='m';

SELECT article, color, shirt_size, last_worn FROM shirts WHERE shirt_size='M';


select * from shirts where article= 'polo shirt';



update shirts set shirt_size='L' where article='polo shirt'


SELECT * FROM shirts WHERE last_worn=15;

update shirts set last_worn='0' where last_worn='15' 

SELECT * FROM shirts WHERE color='white'


update shirts set color='offwhite',shirt_size='xs' where color='white'

SELECT * FROM shirts;

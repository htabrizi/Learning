DROP TABLE cats; 
create database cats;
CREATE TABLE cats 
  ( 
     cat_id INT, 
     name   VARCHAR(100), 
     breed  VARCHAR(100), 
     age    INT, 
     PRIMARY KEY (cat_id) 
  ); 

  INSERT INTO cats(cat_id, name, breed, age) 
VALUES (1,'Ringo', 'Tabby', 4),
       (2,'Cindy', 'Maine Coon', 10),
       (3,'Dumbledore', 'Maine Coon', 11),
       (4,'Egg', 'Persian', 4),
       (5,'Misty', 'Tabby', 13),
       (6,'George Michael', 'Ragdoll', 9),
       (7,'Jackson', 'Sphynx', 7);

select * from cats;


update cats set age='12' where breed='Maine Coon'
update cats set name='Jack' where name = 'Jackson';
update cats set name ='Britis Sorthair' where name= 'ringo'
update cats set breed ='shorthair' where breed='tabby';
update cats set age ='14' where name='misty';


select * from cats where name='misty'
select * from cats

delete from cats where name='egg'
select *from cats;


delete from cats where age='4';
delete from cats where age=cat_id;
select * from cats where age=cat_id;
delete from cats;
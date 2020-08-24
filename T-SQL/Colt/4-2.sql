create table cats (name varchar(50),age int);
insert into cats (name,age)
values('blue',1);
select * from cats;
insert into cats(name, age)
values ('charlie',10)
,('sadie',3)
,('lazy',5);
select * from cats;
create table people (firstName varchar(20) ,lastName varchar (20) , age int);
insert into people (firstName,lastName,age)
values ('tina', 'belcher',13);
select * from people;
insert into people(lastName,firstName,age)
values('ahmadi','ahmad',11);
desc cat_app;
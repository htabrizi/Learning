select * from employees

select 
max(salary)
,min(salary)
,avg(salary)
,sum (salary)-max(salary)-min(salary) / count(*) 
from employees


select avg(salary)
from employees
where salary not in( (select max(salary) from employees)
,(select min(salary)from employees))
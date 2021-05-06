 
select top 1  salary 
from employees
group by salary 
order by count(*) desc ,salary desc
 



select top 1 salary 
from employees
group by salary
having count(*) >= all (select count(*) from employees
						group by salary)
order by salary desc 

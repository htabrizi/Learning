select * 
from employees 
where gender='f'
and salary>110000
and department='tools'
and email is not null

--************************
select first_name
	, hire_date

from employees
where salary > 165000
or( department='sports'
and gender='M')

--***************


select first_name
	, hire_date
from employees
where hire_date>='2001-01-01' AND hire_date<='2004-01-01'

--**************

select *
from employees
where (department='Automotive' and gender='m'
and salary between 40000 and 100000)
or (gender='f' and department='toys' and salary between 40000 and 100000)
order by gender desc

--hey just review this query for me
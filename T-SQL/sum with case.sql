select sum (case when salary < 100000 then 1   end) as under_paid,
sum (case when salary < 100000 then 1   end) as under_paid,
sum (case when salary < 100000 then 1  end) as under_paid
from employees

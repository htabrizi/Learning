select *
from HumanResources.Employee



select person.BusinessEntityid,
		person.persontype,
		person.FirstName,
		person.LastName,
		Employee.jobtitle

from Person.person full join HumanResources.Employee
on person.businessentityid=Employee.businessentityid
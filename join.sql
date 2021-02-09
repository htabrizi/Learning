SELECT BusinessEntityID,FirstName,LastName from Person.person


select BusinessEntityID,PhoneNumber
from Person.PersonPhone
where BusinessEntityID=293 

SELECT person.BusinessEntityID,person.FirstName,person.LastName,personphone.PhoneNumber
from Person.Person inner join person.PersonPhone
on person.BusinessEntityID=person.PersonPhone.businessEntityid
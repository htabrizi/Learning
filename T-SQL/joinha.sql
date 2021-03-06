select a.BusinessEntityID,a.FirstName,a.LastName,b.PhoneNumber
from Person.Person AS A Inner Join
	Person.PersonPhone AS B

	on A.BusinessEntityID=b.BusinessEntityID
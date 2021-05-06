select right(email, len(email)-INSerT(email, '@')) 
from employees 

SELECT RIGHT(Email, LEN(Email) - CHARINDEX('@', email))    
	
	FROM   employees


Select right(email, charindex('@', reverse(email))-1) 
	as domain from employees


	SELECT COALESCE (EMAIL,'NONE')AS EMAIL
	FROM employees
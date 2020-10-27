concat () from book
select CONCAT ('1','2')
concat_ws('-',first,last)
select SUBSTRING('hello',-1)



select 
	concat 
	(
	substring(title,1, 10),
	'...'
	)
	from book
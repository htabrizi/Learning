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



	select REPLACE ('hello world','ll','!!!')
	select substring(replace(title,'e','3'),1,10)from books;



	select REVERSE ('he;llo')



	select char_Length ('111')



	select UPPER(title)from books
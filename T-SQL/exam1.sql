select REVERSE (upper('hi'))


select REPLACE(title,' ','=>') as title from books



select author_lname as forwards,

REVERSE (lower(author_lname)) as backwards

from books


select 
CONCAT(author_fname,author_lname) as fullname

from books 


select 
concat (title,'was released in' ,released_year)
from books;

select title,
char_length(title)as'charcount'
from books

select
concat(SUBSTRING(title,1,10),'...')as short,
concat(author_lname,',',author_fname) as author,
concat(stock_quantity,' in stock') as quantity
from books
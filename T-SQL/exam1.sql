select REVERSE (upper('hi'))


select REPLACE(title,' ','=>') as title from books



select author_lname as forwards,

REVERSE (lower(author_lname)) as backwards

from books


select 
CONCAT(author_fname,author_lname) as fullname

from books 
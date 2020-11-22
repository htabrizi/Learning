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


INSERT INTO books
    (book_id,title, author_fname, author_lname, released_year, stock_quantity, pages)
    VALUES (1111,'10% Happier', 'Dan', 'Harris', 2014, 29, 256), 
           (2111,'fake_book', 'Freida', 'Harris', 2001, 287, 428),
           (31111,'Lincoln In The Bardo', 'George', 'Saunders', 2017, 1000, 367);


		   SELECT title FROM books;
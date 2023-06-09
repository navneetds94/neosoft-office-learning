use music;
show tables;

-- 1.) Who is the senior most employee based on job title?
select 
concat(first_name," ",last_name) 
FROM employee 
order by levels desc limit 1;

-- 2.) Which Country has the most invoices?
SELECT
billing_country,
COUNT(billing_country) 
FROM invoice
group by 1
order by 2 desc
limit 1;

-- 3.) what are top 3 values of total invoices
SELECT * FROM invoice
order by total desc
limit 3;

/* 4.) which city has the best customers? we would like to throw a promotional music festival
in the city we made most money. WAQ that return both the city name and sum of all invoices total */
SELECT
billing_city , round(sum(total),2) as invoice_total
FROM customer tablea
inner join invoice tableb
on tablea.customer_id = tableb.customer_id
group by 1
order by 2 desc;

/* 5.) : Who is the best customer? The customer who has spent the most money will be declared the best customer. 
Write a query that returns the person who has spent the most money.*/
SELECT
concat(first_name," ",last_name) , round(sum(total),2) as invoice_total
FROM customer tablea
inner join invoice tableb
on tablea.customer_id = tableb.customer_id
group by 1
order by 2 desc
limit 1;

/* 6.) WAQ to return the email , first name , last name of all rock music listners.
Return your list order alphabeticaly by email from A-Z */
SELECT
distinct email , first_name , last_name 
-- , trc.track_id , gen.genre_id
FROM customer cust
join invoice inv
on inv.customer_id = cust.customer_id
join invoice_line invline
on invline.invoice_id = inv.invoice_id
join track trc
on trc.track_id = invline.track_id
join genre gen
on gen.genre_id = trc.genre_id
where lower(gen.name) = "rock"
order by 1;

/* 
7. Lets invite the artist who have written the most rock music in our dataset .
WAQ that returns the Artist name and total track count of the top 10 rock bands
*/
with artist_rank as ( SELECT 
alb.artist_id , count(alb.artist_id) as rock_songs
FROM albums alb
join track trc
on trc.album_id = alb.album_id
join genre gen
on gen.genre_id = trc.genre_id
where lower(gen.name) like 'rock'
group by 1
order by 2 desc )

-- Query to fetch and return names
select
name , rock_songs,
dense_rank() OVER(ORDER BY rock_songs desc) ranking
from artist_rank
inner join artist art
on art.artist_id = artist_rank.artist_id
limit 10;

/*
8. Return all the track names that have a song length longer than the average song length.
Return the name and millesconds of each track.
order by the song length with longest words list first.
*/

SELECT
Name , milliseconds
FROM track
where milliseconds > (select avg(milliseconds) from track)
order by 2 desc;

/*
9. Find how much amount spent by each customer on artists?
WAQ to return customer name, artist name and total spent
 */
 
 with custome_artist_data as ( SELECT
 concat(customer.first_name," ",customer.last_name) as custome_name , artist.name , invoice.total
 FROM customer
 join invoice
 on invoice.customer_id = customer.customer_id
 join invoice_line
 on invoice_line.invoice_id = invoice.invoice_id
 join track
 on track.track_id = invoice_line.track_id
 join albums
 on albums.album_id = track.album_id
 join artist
 on artist.artist_id = albums.artist_id )
 
 SELECT 
 distinct * 
 FROM custome_artist_data
 group by 1 , 2 , 3
 order by sum(total) desc
 limit 10;
 
/*
10 We want to find out the most popular music genre for each country.
we determine the most popular genre as the genre with highest amount of purchase.
WAQ that returns each country along with the top genre.
 */
 with genre_popular_count as ( SELECT
 customer.country , genre.name
 FROM customer
 join invoice
 on invoice.customer_id = customer.customer_id
 join invoice_line
 on invoice_line.invoice_id = invoice.invoice_id
 join track
 on track.track_id = invoice_line.track_id
 join genre
 on genre.genre_id = track.genre_id)
 
SELECT
country , name
from ( SELECT 
 * , count(name) as genre_count ,
 rank() over(partition by country order by count(name) desc) as ranking
 FROM genre_popular_count
group by 1 , 2) subq
where subq.ranking = 1;

/*
11. WAQ that determines the customer that has spent the most on music for each countr.
WAQ that returns the country along with the top customers and how much they spent.
For the country top amount is shared provide all customers who spent this amount
*/
SELECT * FROM customer;
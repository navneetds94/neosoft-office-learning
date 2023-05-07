use music;
show tables;
-- Who is the senior most employee based on job title?
select 
concat(first_name," ",last_name) 
FROM employee 
order by levels desc limit 1;

-- Which Country has the most invoices?
SELECT
billing_country,
COUNT(billing_country) 
FROM invoice
group by 1
order by 2 desc
limit 1;

-- what are top 3 values of total invoices
SELECT * FROM invoice
order by total desc
limit 3;

-- which city has the best customers? we would like to throw a promotional music festival
-- in the city we made most money. WAQ that return both the city name and sum of all invoices total
SELECT
billing_city , round(sum(total),2) as invoice_total
FROM customer tablea
inner join invoice tableb
on tablea.customer_id = tableb.customer_id
group by 1
order by 2 desc;

/* Q5: Who is the best customer? The customer who has spent the most money will be declared the best customer. 
Write a query that returns the person who has spent the most money.*/
SELECT
concat(first_name," ",last_name) , round(sum(total),2) as invoice_total
FROM customer tablea
inner join invoice tableb
on tablea.customer_id = tableb.customer_id
group by 1
order by 2 desc
limit 1;

/* WAQ to return the email , first name , last name , Genre of all rock music listners.
Return your list order alphabeticaly by email from A-Z */
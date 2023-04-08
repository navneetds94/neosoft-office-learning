CREATE database ginny;
use ginny;
-- CREATE TABLE sales (
--   customer_id VARCHAR(1),
--   order_date DATE,
--   product_id INTEGER
-- );

-- INSERT INTO sales
--   (customer_id, order_date, product_id)
-- VALUES
--   ('A', '2021-01-01', '1'),
--   ('A', '2021-01-01', '2'),
--   ('A', '2021-01-07', '2'),
--   ('A', '2021-01-10', '3'),
--   ('A', '2021-01-11', '3'),
--   ('A', '2021-01-11', '3'),
--   ('B', '2021-01-01', '2'),
--   ('B', '2021-01-02', '2'),
--   ('B', '2021-01-04', '1'),
--   ('B', '2021-01-11', '1'),
--   ('B', '2021-01-16', '3'),
--   ('B', '2021-02-01', '3'),
--   ('C', '2021-01-01', '3'),
--   ('C', '2021-01-01', '3'),
--   ('C', '2021-01-07', '3');

-- CREATE TABLE menu (
--   product_id INTEGER,
--   product_name VARCHAR(5),
--   price INTEGER
-- );

-- INSERT INTO menu
--   (product_id, product_name, price)
-- VALUES
--   ('1', 'sushi', '10'),
--   ('2', 'curry', '15'),
--   ('3', 'ramen', '12');

-- CREATE TABLE members (
--   customer_id VARCHAR(1),
--   join_date DATE
-- );

-- INSERT INTO members
--   (customer_id, join_date)
-- VALUES
--   ('A', '2021-01-07'),
--   ('B', '2021-01-09');


-- HOW tables;

WITH ginny_dinner as ( SELECT 
menu_table.* , sales_table.customer_id, sales_table.order_date , member_table.join_date , 
dayname(order_date) as day_name
FROM menu menu_table
INNER JOIN sales sales_table
on menu_table.product_id = sales_table.product_id
INNER JOIN members member_table
on member_table.customer_id = sales_table.customer_id )


-- On Which Days mostly people visit
-- SELECT day_name , count(product_id) as visit_frequency FROM ginny_dinner
-- GROUP By 1;

-- Custome Spend
-- SELECT customer_id , sum(price) FROM ginny_dinner
-- GROUP BY 1
-- ORDER BY 2 DESC;

-- SELECT 
-- product_name , count(product_name) as ordered
-- FROM ginny_dinner
-- GROUP BY 1
-- ORDER BY 2 DESC
-- LIMIT 1;

-- SELECT customer_id , order_date , count(customer_id) FROM ginny_dinner
-- GROUP By 1 , 2
-- ORDER BY 1 , 3 DESC;

-- SELECT
-- *
-- FROM (SELECT 
-- customer_id , order_date , product_name ,
-- dense_rank() over(partition by customer_id order by order_date) as ranking
-- FROM ginny_dinner
-- order by 1 , 2 , 3, 4) subq
-- where ranking = 1;


SELECT product_name , points FROM ( SELECT * ,  
	   case 
	   when product_id = 1 THEN price * 20 
       ELSE price * 10 END as points
       
       FROM ginny_dinner) subq
	group by subq.product_name;
    
    
    SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))
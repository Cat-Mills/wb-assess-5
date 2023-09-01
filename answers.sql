-- Problem 1
--? Select all of the email addresses from the customers table in alphabetical order.

SELECT email FROM customers;

-- Problem 2
--? Write a query that lists the order ids for all orders placed by customers with the first name Elizabeth and last name Crocker. Use a SUBQUERY to do this, not a join.

SELECT id FROM orders WHERE customer_id = (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

-- Problem 3
--? Write a query that gets the total number of cupcakes from unprocessed orders.

SELECT SUM(num_cupcakes) FROM orders WHERE processed = 'f';

-- Problem 4
--? Write a query that shows the name of each cupcake and the sum of cupcakes ordered for that cupcake type (for both processed and unprocessed orders), sorted in ascending alphabetical order of cupcake name. The report should show all cupcake types, even if they have not been ordered at all.

SELECT cupcakes.name ,SUM(num_cupcakes) FROM orders FULL JOIN cupcakes ON cupcakes.id = orders.cupcake_id GROUP BY cupcakes.name ORDER BY cupcakes.name;

-- Problem 5
--? Write a query that shows the email address of each customer and the total number of cupcakes they’ve ordered. Results should be sorted by total number of cupcakes, in descending order.

SELECT customers.email, SUM(num_cupcakes) FROM orders FULL JOIN customers ON customers.id = orders.customer_id GROUP BY customers.email ORDER BY SUM(num_cupcakes) DESC;

-- Problem 6
--? Write a query that selects the first name, last name, and email address of customers who have processed orders of funfetti cupcakes. Even if a customer has multiple outstanding orders of funfetti, their email should only appear once.

SELECT DISTINCT c.fname, c.lname, c.email FROM customers c FULL JOIN orders o ON c.id = o.customer_id WHERE o.processed = 't' AND o.cupcake_id =
(SELECT k.id FROM cupcakes k WHERE k.name = 'funfetti');


import { QueryResultRow } from "pg";
import { dbClient } from "../db/index.js";

export async function queryCustom<T extends QueryResultRow>(queryString: string) {
  const result = await dbClient.query<T>(queryString);
  return result.rows;
}

const QUERY_ALL = `
SELECT *
FROM orderitems;
`;

// WHERE clause example
const QUERY_WHERE = `
SELECT prod_name, prod_price
FROM products
WHERE prod_price = 3.49
ORDER BY prod_price DESC, prod_name;
`;

// get products with prod_name starting with 'R' or 'r'
const QUERY_WHERE_2 = `
SELECT prod_name, prod_price
FROM products
-- WHERE prod_name LIKE 'r%' OR prod_name LIKE 'R%'
WHERE lower(prod_name) LIKE 'r%'
ORDER BY prod_price DESC, prod_name;
`;

// BETWEEN clause example
const QUERY_BETWEEN = `
SELECT prod_name, prod_price
FROM products
WHERE prod_price BETWEEN 4.99 AND 10
ORDER BY prod_price DESC, prod_name;
`;

// IS NULL clause example
const QUERY_IS_NULL = `
SELECT cust_id, cust_name, cust_email
FROM customers
-- WHERE cust_email IS NULL;
WHERE cust_email IS NOT NULL;
`;

//

try {
  const rows = await queryCustom<ProductType>(QUERY_IS_NULL);

  console.log("Returned: " + rows.length + " rows");

  console.log(rows);
} catch (error) {
  console.error(error);
}

/* 


at the end, we have to close the connection to the database


*/

await dbClient.end();

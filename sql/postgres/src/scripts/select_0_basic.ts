/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueryResultRow } from "pg";
import { dbClient } from "../db/index.js";

export async function queryCustom<T extends QueryResultRow>(queryString: string) {
  const result = await dbClient.query<T>(queryString);
  return result.rows;
}

// select all products with all columns
const QUERY_WILDCARD = `
SELECT *
FROM products;
`;

// select all Products with vendor id column
const QUERY_SELECT_COLS = `
SELECT vend_id, prod_price
FROM products;
`;

// select distict vendor id from products
const QUERY_BASIC_DISTINCT = `
SELECT DISTINCT vend_id
FROM products;
`;

// distinct affect all columns if used with multiple columns
const QUERY_DISTINCT_MULTIPLE_COLS = `
SELECT DISTINCT vend_id, prod_price
FROM products;
`;

// limit example
const QUERY_LIMIT = `
SELECT prod_id, prod_name
FROM products
LIMIT 5;
`;

// offset example
const QUERY_OFFSET = `
-- some comment
SELECT prod_id, prod_name
FROM products
LIMIT 5 OFFSET 5;
`;

try {
  const rows = await queryCustom<ProductType>(QUERY_OFFSET);

  console.log("Returned: " + rows.length + " rows");

  console.log(rows);
} catch (error) {
  console.error(error);
}

/* 


at the end, we have to close the connection to the database


*/

await dbClient.end();

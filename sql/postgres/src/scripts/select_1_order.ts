import { QueryResultRow } from "pg";
import { dbClient } from "../db/index.js";

export async function queryCustom<T extends QueryResultRow>(queryString: string) {
  const result = await dbClient.query<T>(queryString);
  return result.rows;
}

// order by example
// "order by" needs to be the last clause in the query
const QUERY_ORDER_BY = `
SELECT prod_name, prod_price
FROM products
ORDER BY prod_price DESC;
-- ORDER BY prod_name DESC;
`;

// order by multiple columns
const QUERY_ORDER_BY_MULTIPLE_COLS = `
SELECT prod_name, prod_price
FROM products
ORDER BY prod_price DESC, prod_name ASC;
`;

try {
  const rows = await queryCustom<ProductType>(QUERY_ORDER_BY_MULTIPLE_COLS);

  console.log("Returned: " + rows.length + " rows");

  console.log(rows);
} catch (error) {
  console.error(error);
}

/* 


at the end, we have to close the connection to the database


*/

await dbClient.end();

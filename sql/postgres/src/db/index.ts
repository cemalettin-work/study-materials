import PG from "pg";

const client = new PG.Client({
  connectionString: "postgres://postgres:postgres@localhost:5432/postgres",
});

// NUMERIC/DECIMAL types are returned as strings by default because they can exceed JS Number.MAX_SAFE_INTEGER
// Convert NUMERIC/DECIMAL to float since we know we don't exceed JS Number.MAX_SAFE_INTEGER
const types = PG.types;
types.setTypeParser(types.builtins.NUMERIC, (value) => {
  return parseFloat(value);
});

await client.connect();

export const dbClient = client;

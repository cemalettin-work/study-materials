import express from 'express';
import PG from 'pg';
import config from "./config.js";

const app = express();

app.use(express.json());

const Pool = PG.Pool;
const pool = new Pool({
  user: config.postgres.user,
  host: config.postgres.host,
  database: config.postgres.database,
  password: config.postgres.password,
  port: config.postgres.port,
});


process.on('SIGINT', async () => {
  console.log('SIGINT received');
  await pool.end();
  process.exit(0);
});

process.on('SIGTERM',async () => {
  console.log('SIGTERM received');
  await pool.end();
  process.exit(0);
});

const routeWrapper = routeFn => async (req, res) => {
  try {
    const data = await routeFn(req, res);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


app.get('/users', routeWrapper(async (req, res) => {
  const result = await pool.query('SELECT * FROM appuser');
  console.log('GET /users result:', result.rows);
  return result.rows;
}));

app.get('/users/:id', routeWrapper(async (req, res) => {
  const result = await pool.query('SELECT * FROM appuser WHERE id = $1', [req.params.id]);
  console.log('GET /users/:id result:', result.rows);
  return result.rows;
}));

app.post('/users', routeWrapper(async (req, res) => {

  console.log('POST /users body:', req.body);

  const { name, email} = req.body;
  const result = await pool.query('INSERT INTO appuser (username, email) VALUES ($1, $2) RETURNING *', [name, email]);

  console.log('POST /users result:', result.rows);
  return result.rows;
}));


app.listen(config.server.port, () => {
  console.log('Server listening on port:', config.server.port);
});


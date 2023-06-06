const config = {
  postgres: {
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    port: (+process.env.DB_PORT) || 5432,
  },
  server: {
    port: (+process.env.SERVER_PORT) || 3000,
  },
};

function validateConfig(_config) {
  console.log('input config -----');
  console.log(JSON.stringify(_config, null, 2));
  console.log('-------input config ');
}

validateConfig(config);

export default config;

import Fastify from "fastify";
import { createClient } from "redis";

const fastify = Fastify({ logger: true });
const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("error", (error) => {
  console.error(error);
});

await redisClient.connect();

fastify.get("/:key", async (request, reply) => {
  const { key } = request.params;

  if (!key) return reply.status(400).send({ error: "Key is required" });

  const value = await redisClient.get(key);
  return { key, value };
});

fastify.post("/:key", async (request, reply) => {
  const { key } = request.params;
  if (!key) return reply.status(400).send({ error: "Key is required" });
  const { value } = request.body;
  await redisClient.set(key, value);
  return { key, value };
});

fastify.listen(
  { port: process.env.SERVER_PORT || 3000, host: process.env.SERVER_HOST || "0.0.0.0" },
  (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  }
);

process.on("SIGINT", async () => {
  await redisClient.quit();
  process.exit();
});

process.on("SIGTERM", async () => {
  await redisClient.quit();
  process.exit();
});

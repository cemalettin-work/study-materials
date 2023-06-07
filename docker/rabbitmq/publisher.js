import amqp from "amqplib";
import { createInterface } from "readline";

const queue = "hello";
// publish a message to the queue
const publish = async (msgStr) => {
  const connection = await amqp.connect("amqp://localhost:5672");
  const channel = await connection.createChannel();
  await channel.assertQueue(queue);
  const dateStr = new Date().toISOString();
  channel.sendToQueue(queue, Buffer.from(msgStr));
  console.log(`Sent ${msgStr} at date:${dateStr}`);
};

// continuosly check for user input from the console and publish it to the queue

async function getUserInput() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve, reject) => {
    rl.question("Enter a message to publish: ", (answer) => {
      resolve(answer);
      rl.close();
    });

    rl.on("SIGINT", () => {
      rl.close();
      reject(new Error("SIGINT"));
    });
  });
}

async function main() {
  while (true) {
    const userInput = await getUserInput();
    await publish(userInput);
  }
}

main().catch((err) => {
  console.log(err);
  process.exit(1);
});

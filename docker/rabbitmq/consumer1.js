import amqp from "amqplib";

const queue = "hello";

const consume = async () => {
  const connection = await amqp.connect("amqp://localhost:5672");
  const channel = await connection.createChannel();
  await channel.assertQueue(queue);
  channel.consume(
    queue,
    (msg) => {
      if (msg) {
        console.log(`CONSUMER_1 Received ${msg.content.toString()}`);
      }
    },
    {
      noAck: true,
    }
  );
};

consume().catch((err) => console.log(err));

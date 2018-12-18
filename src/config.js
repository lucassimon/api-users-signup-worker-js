const rabbitConfig = {
  amqpUri: process.env.AMQP_URI || 'amqp://user:password@server-name/my-vhost',
  mongoUri: process.env.MONGODB_URI || 'mongodb://user:password@server-name',
  queue: process.env.QUEUE || 'your-queue-signup',
  sendgrid: process.env.SENDGRID_API_KEY
}

module.exports = rabbitConfig
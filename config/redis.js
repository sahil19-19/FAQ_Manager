const Redis = require("redis");
require("dotenv").config();

const redisClient = Redis.createClient({
    host: process.env.REDIS_HOST || "localhost",
    port: process.env.REDIS_PORT || 6379,
});

redisClient.connect();

module.exports = redisClient;

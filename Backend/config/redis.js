const Redis = require("redis");
require("dotenv").config();

const redisClient = Redis.createClient({
    url : process.env.REDIS_URL
});

redisClient.connect();

module.exports = redisClient;

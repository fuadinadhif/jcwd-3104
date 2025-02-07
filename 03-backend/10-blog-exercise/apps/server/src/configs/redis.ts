import Redis from "ioredis";

const redis = new Redis({
  host: "redis",
  port: 6379,
  db: 0,
  connectTimeout: 5000,
});

export default redis;

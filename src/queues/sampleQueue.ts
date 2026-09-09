import { Queue } from "bullmq";
import IORedis from 'ioredis';

import redisConnection from "../config/redisConfig.js";



export default new Queue("SampleQueue", { connection: redisConnection });

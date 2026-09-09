import { Job, Worker } from "bullmq";
import type { IJob } from "../types/bullMqJobDefinition.js";
import type { WorkerResponse } from "../types/bullMqWorkerResponse.js";

import SampleJob from "../jobs/SampleJob.js";
import redisConnection from "../config/redisConfig.js";

export default function SampleWorker(queueName: string) {
  const worker = new Worker(
    queueName,
    async (job: Job) => {
      if (job.name === "SampleJob") {
        const sampleJobInstance = new SampleJob(job.data);

        sampleJobInstance.handle(job);
        return true;
      }
    },
    { connection: redisConnection },
  );
}

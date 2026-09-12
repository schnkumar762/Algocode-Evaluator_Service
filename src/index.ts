import express from "express";
import bodyParser from "body-parser";

import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
import sampleQueueProducer from "./producers/sampleQueueProducer.js";
import SampleWorker from "./workers/sampleWorker.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);

  //sample queue producer

  sampleQueueProducer(
    "SampleJob",
    {
      name: "Sachin2",
      company: "Rodbez2",
    },
    2,
  );

  sampleQueueProducer(
    "SampleJob",
    {
      name: "Sachin18",
      company: "Rodbez18",
    },
    18,
  );

  sampleQueueProducer(
    "SampleJob",
    {
      name: "Sachin5",
      company: "Rodbez5",
    },
    5,
  );
  SampleWorker("SampleQueue");
});

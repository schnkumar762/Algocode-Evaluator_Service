import express from "express";
import bodyParser from "body-parser";

import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
import sampleQueueProducer from "./producers/sampleQueueProducer.js";
import SampleWorker from "./workers/sampleWorker.js";
import runPython from "./containers/runPythonDocker.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
  console.log(
    `BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`,
  );
  SampleWorker("SampleQueue");
  const code = 'print("Hello")';
  runPython(code);
});

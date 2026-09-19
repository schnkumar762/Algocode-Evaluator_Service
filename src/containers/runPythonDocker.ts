import createContainer from "./containerFactory.js";

import { PYTHON_IMAGE } from "../utils/constants.js";
import decodeDockerStream from "./dockerHelper.js";

async function runPython(code: string) {
  const rawLogBuffer = [];

  console.log("Initializing a new python docker container");
  const pythonDockerContainer = await createContainer(PYTHON_IMAGE, [
    "python3",
    "-c",
    code,
    "stty -echo",
  ]);
  // starting / booting the corresponding docker container
  await pythonDockerContainer.start();

  console.log("Started the docker container");

  const loggerStream = await pythonDockerContainer.logs({
    stdout: true,
    stderr: true,
    timestamps: false,
    follow: true, // whether the logs are streamed or returned as a string
  });

  // Attach events on the stream objects to start and stop reading
  loggerStream.on("data", (chunk) => {
    rawLogBuffer.push(chunk);
  });
  loggerStream.on("end", () => {
    console.log(rawLogBuffer);
    const completeBuffer = Buffer.concat(rawLogBuffer);
    const decodedStream = decodeDockerStream(completeBuffer);
    console.log(decodedStream);
  });
  return pythonDockerContainer;
}

export default runPython;

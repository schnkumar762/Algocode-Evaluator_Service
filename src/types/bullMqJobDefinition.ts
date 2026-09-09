import { Job } from "bullmq";

export interface IJob {
  name: string;
  payload?: Record<string, unknown>;
  handle: (Job?: Job) => void;
  failed: (Job?: Job) => void;
}


/*
name - marketing email
payload {
receipient
sent
subject
body
}
handler (job){
}

failure (){
}

*/

import express from "express";
import { addSubmission } from "../../controllers/submissionController.js";
import { validateCreateSubmissionDto } from "../../validators/createSubmissionValidator.js";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto.js";

const submissionRouter = express.Router();

submissionRouter.get("/ping", (req, res) => {
  res.json({
    status: "ping done",
  });
});

submissionRouter.post(
  "/",
  validateCreateSubmissionDto(createSubmissionZodSchema),
  addSubmission,
);

export default submissionRouter;

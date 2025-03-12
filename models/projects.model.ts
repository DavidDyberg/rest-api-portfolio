import mongoose, { InferSchemaType } from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: [String] },
  githubLink: { type: String },
  liveDemo: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Project = mongoose.model<InferSchemaType<typeof ProjectSchema>>(
  "Project",
  ProjectSchema
);

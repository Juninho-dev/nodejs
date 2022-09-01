import express from "express";
import { createCourse } from "./routes";

const app = express();

app.get("/", (req, res) => createCourse);

app.listen(3333);

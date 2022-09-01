import { Request, response, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response) {
  CreateCourseService.execute({
    name: "TypeScript",
    duration: 1,
    educator: "Diego",
  });

  return response.send();
}

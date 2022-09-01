interface Course {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseService {
  execute({ name }: Course) {
    console.log(`Creating course ${name}`);
  }
}

export default new CreateCourseService();

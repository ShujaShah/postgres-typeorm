import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Student} from "../models/entity/Student";

export class StudentController {

  private StudentRepository = getRepository(Student);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.StudentRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.StudentRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.StudentRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let StudentToRemove = await this.StudentRepository.findOne(request.params.id);
    if (!StudentToRemove) throw new Error('Student not found');
    await this.StudentRepository.remove(StudentToRemove);
  }
}

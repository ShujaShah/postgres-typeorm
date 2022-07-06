import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  enroll : number;

  @Column()
  email: string;

  @Column()
  age: number;
}
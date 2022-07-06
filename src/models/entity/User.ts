import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
  static User(User: any) {
      throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}

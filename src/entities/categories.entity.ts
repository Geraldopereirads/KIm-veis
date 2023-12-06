import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RealEstate } from "./realStates.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @OneToMany(() => RealEstate, (r) => r.category)
  realStates: Array<RealEstate>;
}

export { Category };
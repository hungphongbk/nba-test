import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Required } from "@tsed/schema";

export enum AuditActionType {
  VIEW_PRODUCT = "view-product",
  SEARCH = "search",
}

@Entity()
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: AuditActionType, nullable: false })
  @Required()
  type: AuditActionType;
}

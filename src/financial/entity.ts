import { Column } from "typeorm";

export class Money {
  @Column('decimal', { precision: 10, scale:2 })
  amount: number;

  @Column('varchar', { length: 3 })
  currency: string;
}
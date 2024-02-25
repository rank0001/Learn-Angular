import { PriceModel } from './PriceModel';

export class BookModel {
  id!: number;
  title!: string;
  totalPages!: number;
  Author!: string;
  price!: PriceModel;
}

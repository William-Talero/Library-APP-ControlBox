import { IBook } from "./book.interface";
import { IUser } from "./user.interface";

export interface IReview {
  id: number;
  review: string;
  date: string;
  starts: number;
  book: IBook;
  user: IUser;
}

export interface IReviewProps {
  review: IReview;
}

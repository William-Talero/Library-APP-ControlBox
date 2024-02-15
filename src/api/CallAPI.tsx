import {
  GetApiRequestWithoutToken,
  PostApiRequestWithoutToken,
} from "./FetchRequest";
import Configuration from "./Configuration";

export const CallApiGetAllBooks = async () => {
  console.log(process.env.NEXT_PUBLIC_API_ROUTE);
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.GetAllBooks}`;
  const data = await GetApiRequestWithoutToken(`${url}`);
  return data ? await data.json() : [];
};

export const CallApiGetBookById = async (id: number) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.GetBookById}?book_id=${id}`;
  const data = await GetApiRequestWithoutToken(`${url}`);
  return data ? await data.json() : [];
};

export const CallApiGetReviewsByBook = async (id: number) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.GetReviewsByBook}?book_id=${id}`;
  const data = await GetApiRequestWithoutToken(`${url}`);
  return data ? await data.json() : [];
};

export const CallApiCreateReview = async (
  review_text: string,
  stars: number,
  date: string,
  book_id: number,
  user_id: number
) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${
    Configuration.CreateReview
  }?starts=${stars}&review_text=${encodeURIComponent(
    review_text
  )}&date=${encodeURIComponent(date)}&book_id=${book_id}&user_id=${user_id}`;
  const data = await PostApiRequestWithoutToken(`${url}`);
  return data ? await data.json() : [];
};

export const callApiValidateUser = async (user: string, password: string) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.ValidateUser}?username=${user}&password=${password}`;
  const data = await GetApiRequestWithoutToken(`${url}`);
  return data ? await data.json() : [];
};

export const callApiCreateUser = async (
  username: string,
  fullname: string,
  email: string,
  password: string
) => {
  let url = `${process.env.NEXT_PUBLIC_API_ROUTE}${Configuration.CreateUser}?username=${username}&fullname=${fullname}&email=${email}&password=${password}`;
  const data = await PostApiRequestWithoutToken(`${url}`);
  return data ? await data.json() : [];
};

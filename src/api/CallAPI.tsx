import { GetApiRequestWithoutToken } from "./FetchRequest";
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

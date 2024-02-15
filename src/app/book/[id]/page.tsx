"use client";
import * as React from "react";
import NavBar from "../../../components/NavBar";
import useGetBookById from "../../../hooks/useGetBookById";
import { Image } from "@nextui-org/react";
import { IBook } from "../../../interfaces/book.interface";
import useGetReviewsByBookId from "../../../hooks/useGetReviewsByBookId";
import Review from "../../../components/Review";
import { Button } from "@nextui-org/react";
import ModalReview from "../../../components/ModalReview";

export default function Page({ params }: { params: { id: number } }) {
  console.log(params.id);
  const { book, loading } = useGetBookById(params.id) as {
    book: IBook | null;
    loading: boolean;
  };
  const { reviews } = useGetReviewsByBookId(params.id);
  console.log(reviews);
  return (
    <>
      <NavBar />
      <div className="container w-screen h-screen flex flex-wrap items-start px-[1rem] justify-start">
        <div className="md:h-full w-full flex items-start pt-[5.2rem] justify-center md:w-1/3">
          {book !== null && (
            <Image
              className="w-auto h-[30rem] object-cover rounded-lg mt-[3rem] md:mt-[3rem]"
              alt="NextUI hero Image"
              src={book.image}
            />
          )}
        </div>
        <div className="md:h-full w-full flex items-start md:pt-[5rem] justify-start md:w-5/12">
          {book !== null && (
            <div className="text-center md:text-left flex justify-start flex-col py-[3rem] px-[2rem]">
              <h1 className="text-3xl font-bold text-black my-2">
                {book.name}
              </h1>
              <h3 className="text-1xl font-bold text-black my-2">
                {book.author}
              </h3>
              <h3 className="text-sm font-bold text-black italic my-2">
                Categoría: {book.category}
              </h3>
              <div className="h-auto md:h-[18rem] md:overflow-auto my-3">
                <p className="text-lg text-black">{book.resume}</p>
              </div>
            </div>
          )}
        </div>
        <div className="md:h-full w-full flex items-start md:pt-[5rem] justify-center md:w-3/12">
          {book !== null && (
            <div className="text-center md:text-left flex flex-col items-between w-full pb-[3rem] md:pt-[3rem] px-[1rem]">
              <h1 className="text-3xl font-bold text-black mb-[2rem] my-2">
                Reseñas
              </h1>
              <ModalReview bookId={book.id}/>
              <div className="md:max-h-[21rem] w-full overflow-y-auto p-2">
                {reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <Review key={index} review={review} />
                  ))
                ) : (
                  <h2 className="text-black">No hay reseñas</h2>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

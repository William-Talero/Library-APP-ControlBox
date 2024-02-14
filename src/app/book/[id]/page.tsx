"use client";
import * as React from "react";
import NavBar from "../../../components/NavBar";
import useGetBookById from "../../../hooks/useGetBookById";
import { Image } from "@nextui-org/react";
import { IBook } from "../../../interfaces/book.interface";

export default function Page({ params }: { params: { id: number } }) {
  console.log(params.id);
  const { book, loading } = useGetBookById(params.id) as {
    book: IBook | null;
    loading: boolean;
  };
  return (
    <>
      <NavBar />
      <div className="container w-screen h-screen flex flex-wrap items-center px-[3rem] justify-between">
        <div className="md:h-full w-full flex items-center pt-[5rem] justify-center md:w-1/3">
          {book !== null && (
            <Image
              className="w-auto h-[30rem] object-cover rounded-lg mt-[3rem] md:mt-0"
              alt="NextUI hero Image"
              src={book.image}
            />
          )}
        </div>
        <div className="h-full w-full flex items-center md:pt-[5rem] justify-center md:w-3/6">
          {book !== null && (
            <div className="text-center md:text-left flex justify-between flex-col h-full py-[3rem] px-[2rem]">
              <h1 className="text-3xl font-bold text-black">{book.name}</h1>
              <h3 className="text-1xl font-bold text-black">{book.author}</h3>
              <h3 className="text-sm font-bold text-black italic">
                Categoría: {book.category}
              </h3>
              <div className="h-[19rem] overflow-auto">
                <p className="text-lg text-black">{book.resume}</p>
              </div>
            </div>
          )}
        </div>
        <div className="md:h-full w-full flex items-start md:pt-[5rem] justify-center md:w-1/6">
          {book !== null && (
            <div className="text-left flex justify-between flex-col h-full py-[3rem] px-[2rem]">
              <h1 className="text-3xl font-bold text-black">Reseñas</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

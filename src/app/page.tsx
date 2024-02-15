"use client";
import * as React from "react";
import NavBar from "../components/NavBar";
import useGetAllBooks from "@/hooks/useGetAllBooks";
import Book from "../components/Book";
import { IBook } from "../interfaces/book.interface";
import { CircularProgress } from "@nextui-org/react";

export default function Page() {
  const { books, loading } = useGetAllBooks();
  console.log(books);
  return (
    <>
      <NavBar />
      <div className="container mx-auto flex justify-center flex-wrap mt-[6rem]">
        {books.length > 0 ? (
          books.map((book: IBook) => <Book key={book.id} book={book} />)
        ) : (
          <div className="h-[30rem] flex justify-cente">
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
}

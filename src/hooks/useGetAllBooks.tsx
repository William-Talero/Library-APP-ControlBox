"use client";
import { useState, useEffect } from "react";
import { CallApiGetAllBooks } from "../api/CallAPI";

const useGetAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CallApiGetAllBooks();
      setBooks(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return { books, loading };
};

export default useGetAllBooks;

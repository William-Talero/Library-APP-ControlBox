import { useState, useEffect } from "react";
import { CallApiGetBookById } from "../api/CallAPI";

const useGetBookById = (id: number) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CallApiGetBookById(id);
      setBook(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { book, loading };
};

export default useGetBookById;

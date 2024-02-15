import { useState, useEffect } from "react";
import { CallApiGetReviewsByBook } from "../api/CallAPI";

const useGetReviewsByBookId = (id: number) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await CallApiGetReviewsByBook(id);
      setReviews(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { reviews, loading };
};

export default useGetReviewsByBookId;

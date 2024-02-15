import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { IReviewProps } from "../interfaces/review.interface";

const Review = (data: IReviewProps) => {
  const { review } = data;
  return (
    <Card className="w-full">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {review.user.fullname}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {review.user.username}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 overflow-clip text-wrap w-full">
        <p>{review.review}</p>
      </CardBody>
      <CardFooter className="gap-3 mt-1">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{review.starts}</p>
          <p className=" text-default-400 text-small">Estrellas</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Review;

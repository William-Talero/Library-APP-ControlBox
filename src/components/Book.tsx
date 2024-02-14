import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { IBookProps } from "../interfaces/book.interface";
import { useRouter } from 'next/navigation';

const Book = (data: IBookProps) => {
  const { book } = data;
  const router = useRouter();
  return (
    <Card isFooterBlurred radius="lg" className="border-none m-5">
      <Image
        alt="Woman listing to music"
        className="object-cover w-[16rem] h-[25rem] object-cover"
        src={book.image}
      />
      <CardFooter className="justify-between bg-black/50 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_10px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/90 text-[10px]">{book.name}</p>
        <Button
          className="text-tiny ml-1 text-white bg-gradient-to-r from-blue-500 to-blue-700"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
          onClick={() => router.push(`/book/${book.id}`)}
        >
          Ver
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Book;

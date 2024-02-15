import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { CallApiCreateReview } from "../api/CallAPI";

interface IModal {
  bookId: number;
}

const ModalReview = (data: IModal) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { bookId } = data;

  const [review, setReview] = useState("");
  const [stars, setStars] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await CallApiCreateReview(
      review,
      Number(stars),
      new Date().toLocaleDateString("es-ES"),
      bookId,
      1
    );
    onOpenChange();
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" className="mb-5 w-full">
        Crear Reseña
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  className="text-black"
                  label="Reseña"
                  placeholder="Redacta tu reseña."
                  variant="bordered"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <Input
                  label="Estrellas"
                  className="text-black"
                  placeholder="Califica el libro de 1 a 5"
                  type="text"
                  variant="bordered"
                  value={stars}
                  onChange={(e) => {
                    if (
                      e.target.value === "" ||
                      /^[1-5]$/.test(e.target.value)
                    ) {
                      setStars(e.target.value);
                    }
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={(e) => onSubmit(e)}>
                  Crear
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalReview;

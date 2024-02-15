import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { callApiCreateUser } from "../api/CallAPI";

const ModalRegister = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await callApiCreateUser(fullname, username, email, password);
    if (data.id) {
      console.log("Usuario registrado con éxito");
      onOpenChange();
    } else {
      console.log("Error al registrar usuario:", data.error);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" className="w-full">
        Registrarse
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Registro
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Nombre Completo"
                  placeholder="Ingrese su nombre completo"
                  variant="bordered"
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="text-black"
                />
                <Input
                  label="Nombre de Usuario"
                  placeholder="Ingrese su nombre de usuario"
                  variant="bordered"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-black"
                />
                <Input
                  label="Correo Electrónico"
                  placeholder="Ingrese su correo electrónico"
                  variant="bordered"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black"
                />
                <Input
                  label="Contraseña"
                  placeholder="Ingrese su contraseña"
                  variant="bordered"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-black"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onClick={onSubmit}>
                  Registrarse
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRegister;

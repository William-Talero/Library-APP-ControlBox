import React, { useState } from "react";
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
import { callApiValidateUser } from "../api/CallAPI";
import { useAuth } from "../contexts/AuthContext";
import { generateToken } from "../utils/JWT";

const ModalLogin = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isAuthenticated, login, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = await callApiValidateUser(username, password);
    if (data.user) {
      if (data.validate) {
        console.log("Usuario validado");
        login(data.userData);
        onOpenChange();
      } else {
        console.log("Contraseña invalida");
      }
    } else {
      console.log("No existe el usuario");
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className="w-full"
        variant="flat"
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Username"
                  placeholder="Enter your username"
                  variant="bordered"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-black"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-black"
                />
                {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onClick={(e) => onSubmit(e)}>
                  Iniciar Sesión
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalLogin;

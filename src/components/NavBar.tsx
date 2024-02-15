"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Logo } from "../assets/images/Logo";
import { useRouter } from "next/navigation";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, login, logout } = useAuth();

  const router = useRouter();

  const menuItems = ["Profile", "Books", "Sign Out"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black py-2 fixed">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit mx-2">ControlBox</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link onClick={() => router.push("/")} aria-current="page">
            Books
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!isAuthenticated && (
          <NavbarItem className="hidden lg:flex">
            <ModalRegister />
          </NavbarItem>
        )}
        {!isAuthenticated && (
          <NavbarItem>
            <ModalLogin />
          </NavbarItem>
        )}
        {isAuthenticated && (
          <NavbarItem className="hidden lg:flex">
            <Link onClick={() => logout()} color="danger">
              Log Out
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu className="bg-black py-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 1
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              onClick={() => router.push("/")}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;

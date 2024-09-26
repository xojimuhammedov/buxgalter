import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import BuxgalterProIcon from "@/assets/pro.svg";
import { useRouter } from "next/router";
import Link from "next/link";

function Navbar() {
  const navigate = useRouter();
  // const userId = localStorage.getItem("courseToken");
  // const routeName = userId ? "/profile" : "/login";
  // const subName = userId ? "Profile" : "Login";
  return (
    <Box p={"8px 0"}>
      <Box className="container">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex alignItems={"center"}>
            <Link href={"/"}>
              <Flex {...css.link}>
                <Heading {...css.name}>buxgalter</Heading>
                <Image src={BuxgalterProIcon.src} alt="BuxgalterProIcon" />
              </Flex>
            </Link>
            <Link href={"/"}>
              <Text {...css.links}>Bosh sahifa</Text>
            </Link>
            <Link href={"/"}>
              <Text {...css.links}>Xizmatlarimiz</Text>
            </Link>
            <Link href={"/"}>
              <Text {...css.links}>Bog`lanish</Text>
            </Link>
          </Flex>
          <Button onClick={() => navigate.push('/login')} {...css.button}>
            Login
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  link: {
    alignItems: "center",
    gap: "8px",
    fontFamily: "Inter, sans-serif",

    _hover: {
      textDecoration: "none",
    },
  },
  name: {
    color: "#B0B0B0",
    fontSize: "30px",
    lineHeight: "45px",
    fontFamily: "Inter, sans-serif",
  },
  button: {
    borderRadius: "var(--radius-lg, 10px)",
    background: "#14151A",
    boxShadow: "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    letterSpacing: "-0.07px",
    color: "#fff",
    padding: "var(--spacing-6, 8px) var(--spacing-10, 14px)",
    transition: "0.3s all ease-in-out",
    cursor: "pointer",
    height: "auto",
    _hover: {
      background: "#14151A",
    },
    _focus: {
      border: "1px solid var(--border-action-focus-light, #B78AF0)",
      background: "#14151A",
      boxShadow: "0px 0px 0px 2px rgba(200, 178, 255, 0.50)",
    },
  },
  links: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "500",
    color: "#a1a1a3",
    fontFamily: "Inter, sans-serif",
    padding: "0 16px",

    _hover: {
      textDecoration: "none",
    },
  },
};

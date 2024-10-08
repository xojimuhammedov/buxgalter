import { Box, Flex, Image, Link, Text, Heading } from "@chakra-ui/react";
import React from "react";
import BuxgalterProIcon from "@/assets/logo.svg";

function Footer() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          align={"center"}
          justifyContent={"space-between"}
        >
          <Link {...css.link}>
            <Image src={BuxgalterProIcon.src} alt="BuxgalterProIcon" />
          </Link>
          <Text
            color={"rgba(13, 17, 38, 0.40)"}
            mb={{ base: "40px", md: 0 }}
            {...css.text}
          >
            © 2024 buxgalterPro. Барча ҳуқуқлар ҳимояланган.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;

const css = {
  box: {
    background: "#f7f7f8",
    padding: {
      xl: "var(--spacing-40, 20px) var(--spacing-120, 120px)",
      lg: "var(--spacing-40, 30px) var(--spacing-120, 100px)",
      md: "var(--spacing-40, 20px) var(--spacing-120, 40px)",
      sm: "var(--spacing-40, 20px) var(--spacing-120, 20px)",
      base: "var(--spacing-40, 20px) var(--spacing-120, 20px)",
    },
  },
  text: {
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 500,
    letterSpacing: "-0.07px",
    fontFamily: "Inter, sans-serif",

    _hover: {
      textDecoration: "none",
    },
  },
  name: {
    color: "#B0B0B0",
    fontSize: "25px",
    lineHeight: "45px",
    fontFamily: "Inter, sans-serif",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "Inter, sans-serif",

    _hover: {
      textDecoration: "none",
    },
  },
};

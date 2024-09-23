import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import OneIcon from "@/assets/1.svg";
import { useRouter } from "next/router";
import axios from "axios";

function Courses() {
  const navigate = useRouter();
  const [course, setCourse] = useState();

  useEffect(() => {
    axios
      .get("http://jimi.sigmaservis.uz/api/courses/main")
      .then((res) => setCourse(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box p={"35px 0"}>
      <Box className="container">
        <Heading {...css.name}>Bizning kurslarimiz</Heading>
        <SimpleGrid mt="48px" gap={"16px"} columns={{ base: 1, sm: 2, lg: 3 }}>
          {course?.length > 0 &&
            course?.map((item, index) => (
              <Box
                key={index}
                onClick={() => navigate.push(`/course/${item?.course_id}`)}
                {...css.item}
              >
                <Heading {...css.title}>{item?.name}</Heading>
                <Image {...css.icon} src={OneIcon.src} alt="OneIcon" />
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Courses;

const css = {
  title: {
    color: "#787878",
    fontSize: "15px",
    lineHeight: "22px",
    fontFamily: "Inter, sans-serif",
  },
  item: {
    border: "1px solid #DDDDDD",
    borderRadius: "10px",
    padding: "16px",
    position: "relative",
    height: "180px",
    transition: "all 0.3s",
    cursor: "pointer",

    _hover: {
      border: "1px solid #D34D4D",
    },
  },
  icon: {
    position: "absolute",
    right: "16px",
    top: "48px",
  },
  name: {
    color: "#262626",
    fontSize: "32px",
    lineHeight: "38px",
    marginBottom: "16px",
    textAlign: "center",
    fontFamily: "Inter, sans-serif",
  },
};

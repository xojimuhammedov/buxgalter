import { Box, Flex, Heading, Link, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Contents({ courseId }) {
  const [lesson, setLesson] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.buxgalterpro.uz/api/lessons?course_id=${courseId}`)
      .then((response) => setLesson(response?.data?.data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [courseId]);

  return (
    <Box p={'24px 0'}>
      <Heading {...css.title}>Мундарижа</Heading>
      {isLoading ? (
        <Flex mt={'24px'} align={'center'} justifyContent={'center'}>
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Flex>
      ) : (
        <Box {...css.box}>
          {lesson?.map((item, index) => (
            <Flex key={index} align={'center'} justifyContent={'space-between'}>
              <Heading {...css.name}>{item?.title}</Heading>
              <Link href={`/lesson/${item?.id}`} {...css.link}>
              Батафсил
              </Link>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Contents;

const css = {
  title: {
    color: '#262626',
    fontSize: '25px',
    lineHeight: '32px',
    marginBottom: '16px',
    fontFamily: 'Inter, sans-serif'
  },
  box: {
    width: '100%',
    boxShadow: 'rgba(144, 173, 248, 0.25) 0px 9px 18px 0px',
    background: '#fff',
    padding: '24px',
    display:"flex",
    flexDirection: "column",
    gap:"16px"
  },
  name: {
    color: '#262626',
    fontSize: '18px',
    lineHeight: '22px',
    fontFamily: 'Inter, sans-serif'
  },
  link: {
    borderRadius: 'var(--radius-lg, 10px)',
    background: '#14151A',
    boxShadow: '0px 1px 2px 0px rgba(20, 21, 26, 0.05)',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '-0.07px',
    color: '#fff',
    padding: 'var(--spacing-6, 8px) var(--spacing-10, 16px)',
    transition: '0.3s all ease-in-out',
    border: '2px solid var(--border-action-focus-light, #14151A)',
    cursor: 'pointer',
    height: 'auto',
    _hover: {
      background: '#fff',
      color: '#14151A',
      border: '2px solid var(--border-action-focus-light, #B78AF0)'
    },
    _focus: {
      border: '1px solid var(--border-action-focus-light, #B78AF0)',
      background: '#14151A',
      boxShadow: '0px 0px 0px 2px rgba(200, 178, 255, 0.50)'
    }
  }
};

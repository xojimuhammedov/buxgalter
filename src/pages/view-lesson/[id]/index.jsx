import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Box, Flex, Heading, Image, Link, Spinner, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import OneIcon from '@/assets/1.svg';
import Contents from '../_components/Content';
import { useRouter } from 'next/router';
import axios from 'axios';
import { API_URL } from '@/api';

function CourseAbout() {
  const router = useRouter().query;
  const [course, setCourse] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.buxgalterpro.uz/api/lessons')
      .then((response) => {
        setCourse(response?.data?.data?.find((item) => item?.id === router?.id));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [router?.id]);
  return (
    <>
      <Head>
        <title>
          Ўзбекистонда бухгалтерия ҳисоби ва солиқлар бўйича батафсил дарслар, материаллар ва
          инструментлар. Бухгалтерия ҳисоби ва солиқ солиш бўйича тавсиялар | BuxgalterPRO.uz
        </title>
        <meta name="description" content={course?.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main className="main">
        <Box p={'24px 0'}>
          {isLoading ? (
            <Flex mt={'24px'} align={'center'} justifyContent={'center'}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Flex>
          ) : (
            <Box className="container">
              <Flex {...css.box}>
                <Heading {...css.name}>{course?.title}</Heading>
                <Image src={`${API_URL}/uploads/images/${course?.image_src}`} alt="OneIcon" />
              </Flex>
              <Contents course={course} />
              <Box {...css.bottom}>
                <Text
                  {...css.text}
                  dangerouslySetInnerHTML={{
                    __html: course?.body
                  }}
                />
              </Box>
              {course.file ?? (
                <Link
                  {...css.link}
                  href={`${API_URL}/uploads/images/${course?.file}`}
                  target="_blank">
                  Дарсни юклаб олиш
                </Link>
              )}
            </Box>
          )}
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default CourseAbout;

const css = {
  name: {
    color: '#262626',
    fontSize: '32px',
    lineHeight: '38px',
    fontFamily: 'Inter, sans-serif'
  },
  box: {
    alignItems: 'center',
    gap: '16px',
    width: '100%',
    boxShadow: 'rgba(144, 173, 248, 0.25) 0px 9px 18px 0px',
    background: '#fff',
    height: '190px',
    padding: '24px',
    borderRadius: '16px',
    justifyContent: 'space-around'
  },
  bottom: {
    width: '100%',
    boxShadow: 'rgba(144, 173, 248, 0.25) 0px 9px 18px 0px',
    background: '#fff',
    padding: '24px',
    borderRadius: '16px',
    marginTop: '24px',
    marginBottom: '36px'
  },
  title: {
    color: '#262626',
    fontSize: '25px',
    lineHeight: '38px',
    fontFamily: 'Inter, sans-serif',
    marginBottom: '16px'
  },
  text: {
    color: '#74787c',
    fontSize: '16px',
    lineHeight: '24px',
    fontFamily: 'Inter, sans-serif'
  },
  link: {
    borderRadius: 'var(--radius-lg, 10px)',
    background: '#14151A',
    boxShadow: '0px 1px 2px 0px rgba(20, 21, 26, 0.05)',
    fontSize: '16px',
    lineHeight: '24px',
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

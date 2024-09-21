import { Box, Image, Link, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import CourseImage from '@/assets/kurs.jpeg';

function MyCourses() {
  return (
    <Box p={'24px 0'}>
      <SimpleGrid gap={'20px'} mt={'30px'} columns={{ base: 1, sm: 2, md: 3, xl: 4 }}>
        <Link href={'/course/about'}>
          <Box {...css.list}>
            <Image {...css.image} src={CourseImage.src} alt="CourseImage" />
            <Heading {...css.title}>AyTi sohasiga ilk qadam</Heading>
            <Text {...css.text}>
              Ushbu qisqa kursimiz orqali IT sohalari haqida tushunchaga ega
            </Text>
            <Link {...css.link}>Batafsil</Link>
          </Box>
        </Link>
        <Link href={'/course/about'}>
          <Box {...css.list}>
            <Image {...css.image} src={CourseImage.src} alt="CourseImage" />
            <Heading {...css.title}>AyTi sohasiga ilk qadam</Heading>
            <Text {...css.text}>
              Ushbu qisqa kursimiz orqali IT sohalari haqida tushunchaga ega
            </Text>
            <Link {...css.link}>Batafsil</Link>
          </Box>
        </Link>
        <Link href={'/course/about'}>
          <Box {...css.list}>
            <Image {...css.image} src={CourseImage.src} alt="CourseImage" />
            <Heading {...css.title}>AyTi sohasiga ilk qadam</Heading>
            <Text {...css.text}>
              Ushbu qisqa kursimiz orqali IT sohalari haqida tushunchaga ega
            </Text>
            <Link {...css.link}>Batafsil</Link>
          </Box>
        </Link>
        <Link href={'/course/about'}>
          <Box {...css.list}>
            <Image {...css.image} src={CourseImage.src} alt="CourseImage" />
            <Heading {...css.title}>AyTi sohasiga ilk qadam</Heading>
            <Text {...css.text}>
              Ushbu qisqa kursimiz orqali IT sohalari haqida tushunchaga ega
            </Text>
            <Link {...css.link}>Batafsil</Link>
          </Box>
        </Link>
      </SimpleGrid>
    </Box>
  );
}

export default MyCourses;

const css = {
  box: {
    padding: '30px 0'
  },
  name: {
    fontSize: '35px',
    lineHeight: '40px',
    color: '#103741',
    textAlign: 'center'
  },
  list: {
    borderRadius: '0px 0px 12px 12px',
    border: '1px solid #E1E5E8',
    paddingBottom: '20px',
    transition: '0.3s',

    _hover: {
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1)'
    }
  },
  image: {
    borderRadius: '12px 12px 0px 0px'
  },
  title: {
    fontSize: '18px',
    lineHeight: '28px',
    color: '#103741',
    padding: '1rem'
  },
  text: {
    padding: '0 1rem',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#616970',
    marginBottom: '10px'
  },
  link: {
    fontSize: '24px',
    lineHeight: '34px',
    color: ' #fe5d37',
    padding: '10px 1rem',
    fontWeight: '600'
  },
  button: {
    border: '2px solid #fe5d37',
    background: 'transparent',
    color: '#fe5d37',
    width: '230px',
    fontSize: '18px',
    height: '59px',
    borderRadius: '10px',
    marginTop: '35px',
    lineHeight: '26px',
    transition: '0.3s',

    _hover: {
      background: '#fe5d37',
      color: '#ffffff'
    }
  }
};

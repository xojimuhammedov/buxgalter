import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import OneIcon from '@/assets/1.svg';
import { useRouter } from 'next/router';

function Courses() {
  const navigate = useRouter();
  return (
    <Box p={'35px 0'}>
      <Box className="container">
        <Heading {...css.name}>Bizning kurslarimiz</Heading>
        <SimpleGrid mt="48px" gap={'16px'} columns={{ base: 1, sm: 2, lg: 3 }}>
          <Box onClick={() => navigate.push('/course/1')} {...css.item}>
            <Heading {...css.title}>Бухгалтерия ҳисоби буйича дарслар</Heading>
            <Image {...css.icon} src={OneIcon.src} alt="OneIcon" />
          </Box>
          <Box onClick={() => navigate.push('/course/1')} {...css.item}>
            <Heading {...css.title}>Солиқ ҳисоби бўйича дарслар</Heading>
            <Image {...css.icon} src={OneIcon.src} alt="OneIcon" />
          </Box>
          <Box onClick={() => navigate.push('/course/1')} {...css.item}>
            <Heading {...css.title}>Халқаро бухгалтерия ҳисоби бўйича дарслар</Heading>
            <Image {...css.icon} src={OneIcon.src} alt="OneIcon" />
          </Box>
          <Box onClick={() => navigate.push('/course/1')} {...css.item}>
            <Heading {...css.title}>Хуқуқ бўйича дарслар</Heading>
            <Image {...css.icon} src={OneIcon.src} alt="OneIcon" />
          </Box>
          <Box onClick={() => navigate.push('/course/1')} {...css.item}>
            <Heading {...css.title}>Махсус ва комплект курслар</Heading>
            <Image {...css.icon} src={OneIcon.src} alt="OneIcon" />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Courses;

const css = {
  title: {
    color: '#787878',
    fontSize: '15px',
    lineHeight: '22px',
    fontFamily: 'Inter, sans-serif'
  },
  item: {
    border: '1px solid #DDDDDD',
    borderRadius: '10px',
    padding: '16px',
    position: 'relative',
    height: '180px',
    transition: 'all 0.3s',
    cursor: 'pointer',

    _hover: {
      border: '1px solid #D34D4D'
    }
  },
  icon: {
    position: 'absolute',
    right: '16px',
    top: '48px'
  },
  name: {
    color: '#262626',
    fontSize: '32px',
    lineHeight: '38px',
    marginBottom: '16px',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif'
  }
};

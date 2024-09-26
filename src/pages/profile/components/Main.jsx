import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import ProfileIcon from '@/assets/avatar1.jpg';
import { get } from "lodash";
import { API, API_URL } from '@/api';
import { useQuery } from 'react-query';

function Main() {
  const { data } = useQuery('userMe', async () => {
    return await API.userMe().catch((err) => {
      console.log(err);
    });
  });

  const profileImage = get(data, 'data.data.image_src')
    ? `${API_URL}/uploads/images/${get(data, 'data.data.image_src')}`
    : ProfileIcon.src;
  return (
    <Box p={'48px 0'}>
      <Box className="container">
        <Flex {...css.list}>
          <Image {...css.image} src={profileImage} alt="ProfileIcon" />
          <Box mt={{ base: '0', md: '35px' }}>
            <Heading {...css.title} size={'h5'}>
            {get(data, "data.data.full_name")}
            </Heading>
            <Text {...css.number}>+{get(data, "data.data.phone_number")}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  list: {
    boxShadow: 'rgba(144, 173, 248, 0.25) 0px 9px 18px 0px',
    backgroundColor: '#fff',
    width: '100%',
    height: {
      base: '80px',
      md: '120px'
    },
    gap: '24px'
  },
  title: {
    color: '#14151A',
    fontSize: {
      base: '16px',
      md: '28px'
    },
    fontWeight: '700',
    lineHeight: {
      base: '22px',
      md: '35px'
    },
    letterSpacing: '1px',
    fontFamily: 'sans-serif'
  },
  number: {
    color: '#14151A',
    marginTop: '10px',
    fontSize: {
      base: '14px',
      md: '18px'
    },
    fontWeight: '400',
    lineHeight: '25px'
  },

  image: {
    width: {
      base: '80px',
      md: '140px'
    },
    height: {
      base: '80px',
      md: '140px'
    },
    borderRadius: '50%',
    objectFit: 'cover'
  }
};

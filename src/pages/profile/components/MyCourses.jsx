import { Box, Image, Link, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { API, API_URL } from '@/api';
import { get } from 'lodash';
import OneIcon from '@/assets/1.svg';

function MyCourses() {
  const navigate = useRouter();
  const { data } = useQuery('myCourses', async () => {
    return await API.myCourses().catch((err) => {
      console.log(err);
    });
  });

  console.log(data);

  return (
    <Box p={'24px 0'}>
      <SimpleGrid gap={'20px'} mt={'30px'} columns={{ base: 1, sm: 2, md: 3 }}>
        {get(data, 'data.data.courses')?.map((item) => (
          <>
            {item?.courses?.map((evt, index) => (
              <Box
                key={index}
                className="courses-item"
                onClick={() => navigate.push(`/view-course/${evt?.id}`)}
                {...css.item}>
                <Heading {...css.title}>{evt?.name}</Heading>
                <Image
                  className="courses-icon"
                  {...css.icon}
                  src={`${API_URL}/uploads/images/${evt?.images[0]?.src}`}
                  alt="OneIcon"
                />
              </Box>
            ))}
          </>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default MyCourses;

const css = {
  box: {
    padding: '30px 0'
  },
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
    cursor: 'pointer'
  },
  icon: {
    position: 'absolute',
    right: '16px',
    top: '48px',
    width: '100px',
    height: '115px',
    objectFit: 'contain'
  }
};

import { Box, Image, Link, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { API } from '@/api';
import { get } from 'lodash';
import OneIcon from '@/assets/1.svg';

function MyCourses() {
  const navigate = useRouter();
  const { data } = useQuery('myCourses', async () => {
    return await API.myCourses().catch((err) => {
      console.log(err);
    });
  });

  return (
    <Box p={'24px 0'}>
      <SimpleGrid gap={'20px'} mt={'30px'} columns={{ base: 1, sm: 2, md: 3 }}>
        {get(data, 'data.data.courses')?.map((item) => (
          <>
            {item?.courses?.map((evt, index) => (
              <Box
                key={index}
                onClick={() => navigate.push(`/course/${evt?.id}`)}
                {...css.item}>
                <Heading {...css.title}>{evt?.name}</Heading>
                <Image {...css.icon} src={OneIcon.src} alt="OneIcon" />
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
    fontSize: '18px',
    lineHeight: '28px',
    color: '#103741',
    padding: '1rem'
  },
  item: {
    border: '1px solid #DDDDDD',
    borderRadius: '10px',
    position: 'relative',
    height: '190px',
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
  }
};

import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import React from 'react';

function Contents({ course }) {
  return (
    <Box p={'24px 0'}>
      <Heading {...css.title}>Мундарижа</Heading>
      <Box {...css.box}>
        <Heading
          {...css.name}
          dangerouslySetInnerHTML={{
            __html: course?.contentplan
          }}
        />
      </Box>
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
    padding: '24px'
  },
  name: {
    color: '#262626',
    fontSize: '18px',
    lineHeight: '22px',
    fontFamily: 'Inter, sans-serif'
  }
};

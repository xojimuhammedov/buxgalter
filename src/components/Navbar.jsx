import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import BuxgalterProIcon from '@/assets/pro.svg';
import { useRouter } from 'next/router';

function Navbar() {
  const navigate = useRouter();
  return (
    <Box p={'8px 0'}>
      <Box className="container">
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Link href='/' {...css.link}>
            <Heading {...css.name}>buxgalter</Heading>
            <Image src={BuxgalterProIcon} alt="BuxgalterProIcon" />
          </Link>
          <Button onClick={() => navigate.push('/login')} {...css.button}>
            Login
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'Inter, sans-serif',

    _hover: {
      textDecoration: 'none'
    }
  },
  name: {
    color: '#B0B0B0',
    fontSize: '30px',
    lineHeight: '45px',
    fontFamily: 'Inter, sans-serif'
  },
  button: {
    borderRadius: 'var(--radius-lg, 10px)',
    background: '#14151A',
    boxShadow: '0px 1px 2px 0px rgba(20, 21, 26, 0.05)',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '-0.07px',
    color: '#fff',
    padding: 'var(--spacing-6, 6px) var(--spacing-10, 10px)',
    transition: '0.3s all ease-in-out',
    cursor: 'pointer',
    height: 'auto',
    _hover: {
      background: '#14151A'
    },
    _focus: {
      border: '1px solid var(--border-action-focus-light, #B78AF0)',
      background: '#14151A',
      boxShadow: '0px 0px 0px 2px rgba(200, 178, 255, 0.50)'
    }
  }
};

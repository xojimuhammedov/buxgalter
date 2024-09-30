import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { LogOut, UserRound } from 'lucide-react';
import { get } from 'lodash';
import Image from 'next/image';
import { useMutation, useQuery } from 'react-query';
import { API, API_URL } from '@/api';

import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
function ProfileAbout() {
  const [image, setImage] = useState(null);
  const removeClick = () => {
    localStorage.removeItem('courseToken');
    window.location.href = '/';
  };

  const { data, refetch } = useQuery('userMe', async () => {
    return await API.userMe().catch((err) => {
      console.log(err);
    });
  });

  const { handleSubmit, register, reset } = useForm({
    defaultValues: useMemo(() => {
      return {
        full_name: get(data, 'data.data.full_name'),
        phone_number: get(data, 'data.data.phone_number'),
        address: get(data, 'data.data.address')
      };
    }, [data]),
    mode: 'onChange'
  });

  useEffect(() => {
    reset({
      full_name: get(data, 'data.data.full_name'),
      phone_number: get(data, 'data.data.phone_number'),
      address: get(data, 'data.data.address')
    });
  }, [data]);

  const { mutate } = useMutation(async (payload) => {
    return await axios
      .put(`${API_URL}/users/${get(data, 'data.data.user_id')}`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('courseToken')}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(res);
        refetch();
        toast.success('Profile updated successfully');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Profile update failed');
      });
  });
  const onSubmit = (value) => {
    const submitData = {
      images: image,
      ...value
    };
    mutate(submitData);
  };

  return (
    <Box p={'24px 0'} width={'100%'}>
      <form onSubmit={handleSubmit(onSubmit)} className="profile-form" action="">
        <label htmlFor="setup-profile-img" className="setup-img-upload">
          {image ? (
            <img src={!!image && URL?.createObjectURL(image)} alt="" />
          ) : (
            <div className="setup-img-default">
              <img src={get(data, 'data.data.images')} alt="" />
              <UserRound color="gray" />
            </div>
          )}

          <input
            // {...register("images")}
            type="file"
            id="setup-profile-img"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <span style={{ color: '#14151A', fontWeight: '400' }}>Расм юклаш</span>
        </label>
        <label className="profile-label" htmlFor="full_name">
        F.I.O киритинг
        </label>
        <Input
          id="full_name"
          {...register('full_name')}
          {...css.input}
          type="name"
          autoComplete="off"
          placeholder="F.I.O киритинг"
        />
        <label className="profile-label" htmlFor="address">
        Манзилингизни киритинг
        </label>
        <Input
          id="address"
          {...css.input}
          {...register('address')}
          autoComplete="new-address"
          type="address"
          placeholder="Манзилингизни киритинг"
        />
        <label className="profile-label" htmlFor="phone_number">
        Сизнинг рақамингиз
        </label>
        <Input
          {...register('phone_number')}
          {...css.input}
          type="number"
          id="phone_number"
          placeholder="Сизнинг рақамингиз"
        />
        <Flex align={'center'} gap={{ base: '24px', md: '36px' }} mt={'20px'}>
          <Button {...css.button} type="submit">
          Янгилаш
          </Button>
          <Flex onClick={removeClick} cursor={'pointer'} align={'center'} gap={'10px'}>
            <LogOut color="#fe5d37" />
            <Text {...css.name}>Профилдан чиқиш</Text>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
}

export default ProfileAbout;

const css = {
  input: {
    width: {
      base: '100%',
      md: '650px'
    },
    color: '#000',
    border: '2px solid #B0B0B0',
    backgroundColor: '#fff',
    borderRadius: '10px',
    transition: 'border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out',
    padding: '1rem 0.75rem',
    height: '50px',
    margin: '8px 0',

    _focus: {
      boxShadow: '0 0 0 .25rem rgba(254,93,55,0.25)',
      border: '2px solid #14151A',
      color: '#000'
    },

    _placeholder: {
      fontSize: '16px'
    }
  },
  button: {
    borderRadius: 'var(--radius-lg, 12px)',
    background: '#14151A',
    boxShadow: '0px 1px 2px 0px rgba(20, 21, 26, 0.05)',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    letterSpacing: '-0.07px',
    color: '#fff',
    transition: '0.3s all ease-in-out',
    cursor: 'pointer',
    height: '40px',
    width: '140px',
    _hover: {
      background: '#14151A'
    },
    _focus: {
      border: '1px solid var(--border-action-focus-light, #B78AF0)',
      background: '#14151A',
      boxShadow: '0px 0px 0px 2px rgba(200, 178, 255, 0.50)'
    }
  },
  name: {
    color: '#fe5d37',
    fontWeight: '400',
    fontSize: '18px'
  }
};

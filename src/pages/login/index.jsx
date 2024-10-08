import Head from 'next/head';
import React from 'react';
import { Button, Heading, Input, Link } from '@chakra-ui/react';
import BuxgalterProIcon from '@/assets/logo.svg';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { API } from '@/api';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

function LoginPage() {
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { mutate } = useMutation(async (payload) => {
    return await API.loginUser(payload)
      .then((res) => {
        if (res?.data?.success) {
          navigate.push('/profile');
          toast.success('Siz muvaffaqiyatli login qildingiz!');
        }
        localStorage.setItem('courseToken', `${res?.data?.data?.tokens?.accessToken}`);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Telefon nomer yoki parolni xato kiritdingiz!');
      });
  });
  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <>
      <Head>
        <title>
          Ўзбекистонда бухгалтерия ҳисоби ва солиқлар бўйича батафсил дарслар, материаллар ва
          инструментлар. Бухгалтерия ҳисоби ва солиқ солиш бўйича тавсиялар | BuxgalterPRO.uz
        </title>
        <meta
          name="description"
          content="Ўзбекистонда бухгалтерия ҳисоби ва солиқлар бўйича батафсил дарслар, материаллар ва инструментлар. Бухгалтерия ҳисоби ва солиқ солиш бўйича тавсиялар | BuxgalterPRO.uz"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login">
        <main>
          <div className="login-form">
            <Heading {...css.title}>Кириш</Heading>
            <Link href="/" {...css.link}>
              <Image src={BuxgalterProIcon} alt="BuxgalterProIcon" />
            </Link>
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <Input
                type="number"
                {...css.input}
                {...register('phone_number', {
                  required: true
                })}
                autoComplete="off"
                required
                placeholder=" Сизнинг рақамингиз"
              />
              <Input
                {...css.input}
                type="password"
                {...register('password', {
                  required: true
                })}
                required
                autoComplete="new-password"
                placeholder="Пассворд"
              />
              <Button mt={'25px'} className="btn btn-primary" type="submit">
                Юбориш
              </Button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default LoginPage;

const css = {
  input: {
    width: '100%',
    color: '#000',
    border: '2px solid #B0B0B0',
    backgroundColor: '#fff',
    borderRadius: '10px',
    transition: 'border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out',
    padding: '1rem 0.75rem',
    height: '50px',
    margin: '15px 0',

    _focus: {
      boxShadow: '0 0 0 .25rem rgba(254,93,55,0.25)',
      border: '2px solid #14151A',
      color: '#000'
    },

    _placeholder: {
      fontSize: '16px'
    }
  },
  image: {
    height: '100px',
    objectFit: 'cover',
    width: '100%'
  },
  title: {
    color: '#262626',
    fontSize: '35px',
    lineHeight: '42px',
    fontFamily: 'Inter, sans-serif',
    textAlign: 'center',
    fontWeight: '700'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Inter, sans-serif',
    justifyContent: 'center',

    _hover: {
      textDecoration: 'none'
    }
  },
  name: {
    color: '#B0B0B0',
    fontSize: '30px',
    lineHeight: '45px',
    fontFamily: 'Inter, sans-serif'
  }
};

import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

import Head from 'next/head';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <Navbar />
          <Courses />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

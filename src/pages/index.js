import Head from 'next/head';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

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
      <>
        <nav>
          {' '}
          <Navbar />
        </nav>
        <main className="main">
          <Courses />
          <Services />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    </>
  );
}

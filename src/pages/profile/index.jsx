import Head from 'next/head';
import React from 'react';
import Main from './components/Main';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, Tab, TabList, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import ProfileAbout from './components/Profile';
import MyCourses from './components/MyCourses';

function Profile() {
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
      <nav>
        <Navbar />
      </nav>
      <main className="main">
        <Main />
        <Box className="container">
          <Tabs>
            <TabList>
              <Tab>Сотиб олинган курслар</Tab>
              <Tab>Профиль</Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={'0'}>
                <MyCourses />
              </TabPanel>
              <TabPanel p={'0'}>
                <ProfileAbout />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Profile;

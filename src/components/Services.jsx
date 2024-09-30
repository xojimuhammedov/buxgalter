import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

function Services() {
  return (
    <Box id='service' p={'35px 0'}>
      <Box className="container">
        <Heading {...css.title}>Бизнинг Хизматларимиз
        </Heading>
        <SimpleGrid columns={{base:1, sm:2}} gap={'16px'}>
          <Box {...css.item}>
            <Text {...css.text}>
              <b>Аутсорсинг</b> - сифатли бухгалтерия хизматлари. Кучли команда - аниқ ҳисоб гарови.
            </Text>
          </Box>
          <Box {...css.item}>
            <Text {...css.text}>
              <b>Консультация</b> - Сизни қийнаган савол ва муаммоларга бизда жавоб бор. Исталган саволга
              профессионал жавоб.
            </Text>
          </Box>
          <Box {...css.item}>
            <Text {...css.text}>
              <b>Онлайн дарслар</b> - бир неча даражаларга бўлиб тартибланган, содда тилдаги бухгалтерия,
              солиқ ва хуқуқ дарслари.
            </Text>
          </Box>
          <Box {...css.item}>
            <Text {...css.text}>
              <b>Бухгалтер e-shop</b> - Бухгалтер учун зарур инструментларни қулай нархларда сотиб олинг.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Services;

const css = {
  title: {
    color: '#262626',
    fontSize: '32px',
    lineHeight: '38px',
    marginBottom: '16px',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif'
  },
  text: {
    color: '#262626',
    fontSize: '16px',
    lineHeight: '22px',
    fontFamily: 'Inter, sans-serif',
    fontWeight:"500"
  },
  item: {
    width: '100%',
    boxShadow: 'rgba(144, 173, 248, 0.25) 0px 9px 18px 0px',
    background: '#fff',
    padding: '16px',
    borderRadius: '12px',
    cursor:"pointer",
  }
};

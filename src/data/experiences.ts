import { useTranslation } from 'react-i18next';

export interface Attraction {
  title: string;
  description: string;
  map: string;
  location: string;
  link: string;
}

export interface SectionData {
  id: string;
  name: string;
  items: Attraction[];
}

export const useExperiencesData = (): SectionData[] => {
  const { t } = useTranslation();

  return [
    {
      id: 'natura',
      name: t('experiences.nature'),
      items: [
        {
          title: t('experiences.items.parcRegal.title'),
          description: t('experiences.items.parcRegal.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.8566284650606!2d25.366135513756724!3d45.515541729713306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b347e5beeb4a0d%3A0x10349c2f733f4c31!2sParcul%20Regal!5e1!3m2!1sro!2sro!4v1787483384908!5m2!1sro!2sro',
          location: '5 km',
          link: 'https://maps.app.goo.gl/ZGZX8TAXtNXcx6uHA',
        },
        {
          title: t('experiences.items.wolfPark.title'),
          description: t('experiences.items.wolfPark.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8184975287204!2d25.332649776921922!3d45.580002925703745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3492541c91621%3A0x327d3f847a98276f!2sWolf%20Park%20Adventure!5e1!3m2!1sro!2sro!4v1787485635810!5m2!1sro!2sro',
          location: '6 km',
          link: 'https://maps.app.goo.gl/SvuW4jCUD1XZ89489',
        },
        {
          title: t('experiences.items.botorog.title'),
          description: t('experiences.items.botorog.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.6531515354354!2d25.2934673631792!3d45.53753189631792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b349b3ae2138ed%3A0x48bbca973dd39bf6!2sBotorog%20campground!5e1!3m2!1sro!2sro!4v1787482907701!5m2!1sro!2sro',
          location: '8.5 km',
          link: 'https://maps.app.goo.gl/aE88CLqfyxT35HLVA',
        },
        {
          title: t('experiences.items.prapastii.title'),
          description: t('experiences.items.prapastii.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35694.903213318146!2d25.285650572620945!3d45.53286485410781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b349e1a7c826f3%3A0x493ad2c6fcf5a64a!2zUHLEg3DEg3N0aWlsZSBaxINybmXImXRpdWx1aQ!5e1!3m2!1sro!2sro!4v1787485592278!5m2!1sro!2sro',
          location: '11.5 km',
          link: 'https://maps.app.goo.gl/nk8s5nAhmR14gX4MA',
        },
        {
          title: t('experiences.items.gradeiste.title'),
          description: t('experiences.items.gradeiste.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.295514365737!2d25.29544099123248!3d45.452901437536994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b339e1f4af517f%3A0x454a1254a4329f0!2sAdventure%20Park!5e1!3m2!1sro!2sro!4v1787485700568!5m2!1sro!2sro',
          location: '14 km',
          link: 'https://maps.app.goo.gl/BcicZfaXPizTebCZ6',
        },
        {
          title: t('experiences.items.plaiul.title'),
          description: t('experiences.items.plaiul.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50459.209785898005!2d25.223514180588662!3d45.556263376163514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b34bd0459908f5%3A0x6c6d6b99e4a6385c!2sPlaiul%20Foii!5e1!3m2!1sro!2sro!4v1787488150722!5m2!1sro!2sro',
          location: '17 km',
          link: 'https://maps.app.goo.gl/GSqJpmY1ZsuKohVc7',
        },
      ],
    },
    {
      id: 'atractii',
      name: t('experiences.attractions'),
      items: [
        {
          title: t('experiences.items.bran.title'),
          description: t('experiences.items.bran.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1624402585694!2d25.364588776919373!3d45.51490593005308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b347e5a415de31%3A0xcf922792d921ab7f!2sCastelul%20Bran!5e1!3m2!1sro!2sro!4v1787485768053!5m2!1sro!2sro',
          location: '5 km',
          link: 'https://maps.app.goo.gl/6auLpjPs6ZfWB73bA',
        },
        {
          title: t('experiences.items.libearty.title'),
          description: t('experiences.items.libearty.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12606.021866548452!2d25.37505893677441!3d45.595364276778334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b34f3ec6a9e4db%3A0x95765f7017ad8126!2sSanctuarul%20Libearty%20Z%C4%83rne%C8%99ti!5e1!3m2!1sro!2sro!4v1787486201116!5m2!1sro!2sro',
          location: '11 km',
          link: 'https://maps.app.goo.gl/gALXNEfgDT9Ph5px7',
        },
        {
          title: t('experiences.items.dinoPark.title'),
          description: t('experiences.items.dinoPark.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.052265410394!2d25.47148857692231!3d45.59147792493658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b345af5f63bf79%3A0x710495c8ec314b00!2sDino%20Parc!5e1!3m2!1sro!2sro!4v1787488189877!5m2!1sro!2sro',
          location: '13 km',
          link: 'https://maps.app.goo.gl/arwymR13Wv3xEsJa9',
        },
        {
          title: t('experiences.items.rasnov.title'),
          description: t('experiences.items.rasnov.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.107679552457!2d25.465837176922193!3d45.59064812499209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3450c103ff9d1%3A0x865c9981854d0e88!2zQ2V0YXRlYSBSw6LImW5vdg!5e1!3m2!1sro!2sro!4v1787486242155!5m2!1sro!2sro',
          location: '13 km',
          link: 'https://maps.app.goo.gl/mumUvPjtwP5wWAFG7',
        },
      ],
    },
    {
      id: 'restaurants',
      name: t('experiences.dining'),
      items: [
        {
          title: t('experiences.items.serena.title'),
          description: t('experiences.items.serena.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.3043224953054!2d25.36316508506875!3d45.52909704654097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b348768bb2b44b%3A0x776241977fc4a29!2sCasa%20Serena%2C%20Strada%20Bisericii%2014%2C%20507025%20Predelu%C8%9B!5e1!3m2!1sro!2sro!4v1787486432033!5m2!1sro!2sro',
          location: '2.5 km',
          link: 'https://maps.app.goo.gl/JZGdhTuRGPwvzmPw7',
        },
        {
          title: t('experiences.items.pizzaExpress.title'),
          description: t('experiences.items.pizzaExpress.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4459.847101953785!2d25.32573016706195!3d45.558267605404424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b348daf18de2cb%3A0xc925549ad11a9f61!2sPizza%20Express!5e1!3m2!1sro!2sro!4v1787486308757!5m2!1sro!2sro',
          location: '4.5 km',
          link: 'https://maps.app.goo.gl/5gSGEYUkvZaMqTp56',
        },
        {
          title: t('experiences.items.modern.title'),
          description: t('experiences.items.modern.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.114072493051!2d25.316238176921065!3d45.560595427001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b349058e5029bf%3A0xc3fd4687bc614ca8!2sRestaurant%20Modern!5e1!3m2!1sro!2sro!4v1787486354621!5m2!1sro!2sro',
          location: '4.5 km',
          link: 'https://maps.app.goo.gl/3YSzgg3zm3SeGFqN7',
        },
      ],
    },
    {
      id: 'transport',
      name: t('experiences.transport'),
      items: [
        {
          title: t('experiences.items.garaZarnesti.title'),
          description: t('experiences.items.garaZarnesti.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9708010256713!2d25.325935176921163!3d45.56274192685753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3491ca1eefab1%3A0xe028f6c4f0eb7797!2sGara%20Zarnesti!5e1!3m2!1sro!2sro!4v1787486470048!5m2!1sro!2sro',
          location: '4.5 km',
          link: 'https://maps.app.goo.gl/8SJsmLwZUiJ73z6S7',
        },
        {
          title: t('experiences.items.aeroport.title'),
          description: t('experiences.items.aeroport.description'),
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.1671295286587!2d25.515226076925874!3d45.69448811804296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b351004aa93337%3A0x901042384cf7f48c!2sAeroportul%20Interna%C8%9Bional%20Bra%C8%99ov-Ghimbav!5e1!3m2!1sro!2sro!4v1787486538556!5m2!1sro!2sro',
          location: '25 km',
          link: 'https://maps.app.goo.gl/etgfaPGbK3buTKWj7',
        },
      ],
    },
  ];
};

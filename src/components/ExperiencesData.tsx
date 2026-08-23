export interface Attraction {
  title: string;
  description: string;
  map: string;
  location: string;
}

export interface SectionData {
  id: string;
  name: string;
  items: Attraction[];
}

export const ExperiencesData: SectionData[] = [
  {
    id: 'natura',
    name: 'Natură & Aer curat',
    items: [
      {
        title: 'Parcul Regal (Bran)',
        description: 'Spațiu verde amenajat la baza Castelului Bran, perfect pentru plimbări relaxante și momente de liniște în aer liber.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.8566284650606!2d25.366135513756724!3d45.515541729713306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b347e5beeb4a0d%3A0x10349c2f733f4c31!2sParcul%20Regal!5e1!3m2!1sro!2sro!4v1787483384908!5m2!1sro!2sro',
        location: '5 km'
      },
      {
        title: 'Wolf Park Adventure',
        description: 'Parc de aventură din Zărnești dotat cu trasee suspendate la înălțime, tiroliene și activități dinamice în pădure.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8184975287204!2d25.332649776921922!3d45.580002925703745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3492541c91621%3A0x327d3f847a98276f!2sWolf%20Park%20Adventure!5e1!3m2!1sro!2sro!4v1787485635810!5m2!1sro!2sro',
        location: '6 km'
      },
      {
        title: 'Botorog Campground (Fântâna lui Botorog)',
        description: 'Punct de pornire popular pentru traseele montane din Piatra Craiului, ideal pentru campare în mijlocul naturii.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.6531515354354!2d25.2934673631792!3d45.53753189631792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b349b3ae2138ed%3A0x48bbca973dd39bf6!2sBotorog%20campground!5e1!3m2!1sro!2sro!4v1787482907701!5m2!1sro!2sro',
        location: '8.5 km'
      },
      {
        title: 'Prăpăstiile Zărneștiului',
        description: 'Canion spectaculos dedicat pasionaților de plimbări, ciclism montan sau cățărare pe stâncă, oferind trasee inedite în cadrul natural.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35694.903213318146!2d25.285650572620945!3d45.53286485410781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b349e1a7c826f3%3A0x493ad2c6fcf5a64a!2zUHLEg3DEg3N0aWlsZSBaxINybmXImXRpdWx1aQ!5e1!3m2!1sro!2sro!4v1787485592278!5m2!1sro!2sro',
        location: '11.5 km'
      },
      {
        title: 'Parcul de aventură Cheile Grădiștei',
        description: 'Complex de agrement ce oferă tiroliene, trasee cu obstacole și activități sportive pentru întreaga familie.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.295514365737!2d25.29544099123248!3d45.452901437536994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b339e1f4af517f%3A0x454a1254a4329f0!2sAdventure%20Park!5e1!3m2!1sro!2sro!4v1787485700568!5m2!1sro!2sro',
        location: '14 km'
      },
      {
        title: 'Plaiul Foii',
        description: 'O zonă pitorească superbă la poalele Munților Piatra Craiului, faimoasă pentru peisajele spectaculoase și accesul la traseele montane de creastă.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50459.209785898005!2d25.223514180588662!3d45.556263376163514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b34bd0459908f5%3A0x6c6d6b99e4a6385c!2sPlaiul%20Foii!5e1!3m2!1sro!2sro!4v1787488150722!5m2!1sro!2sro',
        location: '17 km'
      }
    ]
  },
  {
    id: 'atractii',
    name: 'Atracții principale',
    items: [
      {
        title: 'Castelul Bran',
        description: 'Celebrul monument istoric, fascinant și cunoscut la nivel internațional pentru legenda lui Dracula și arhitectura sa medievală.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.1624402585694!2d25.364588776919373!3d45.51490593005308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b347e5a415de31%3A0xcf922792d921ab7f!2sCastelul%20Bran!5e1!3m2!1sro!2sro!4v1787485768053!5m2!1sro!2sro',
        location: '5 km'
      },
      {
        title: 'Rezervația de urși de la Zărnești (Libearty)',
        description: 'Cel mai mare sanctuar de urși bruni din lume, unde urșii salvați trăiesc protejați în mediul lor natural.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12606.021866548452!2d25.37505893677441!3d45.595364276778334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b34f3ec6a9e4db%3A0x95765f7017ad8126!2sSanctuarul%20Libearty%20Z%C4%83rne%C8%99ti!5e1!3m2!1sro!2sro!4v1787486201116!5m2!1sro!2sro',
        location: '11 km'
      },
      {
        title: 'Dino Parc Râșnov',
        description: 'Cel mai mare parc cu dinozauri din Sud-Estul Europei, o atracție educativă și extrem de distractivă, ideală pentru familii și copii.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.052265410394!2d25.47148857692231!3d45.59147792493658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b345af5f63bf79%3A0x710495c8ec314b00!2sDino%20Parc!5e1!3m2!1sro!2sro!4v1787488189877!5m2!1sro!2sro',
        location: '13 km'
      },
      {
        title: 'Cetatea Râșnov',
        description: 'Una dintre cele mai bine conservate cetăți țărănești din Transilvania, oferind o panoramă spectaculoasă asupra Depresiunii Țării Bârsei.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.107679552457!2d25.465837176922193!3d45.59064812499209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3450c103ff9d1%3A0x865c9981854d0e88!2zQ2V0YXRlYSBSw6LImW5vdg!5e1!3m2!1sro!2sro!4v1787486242155!5m2!1sro!2sro',
        location: '13 km'
      }
    ]
  },
  {
    id: 'restaurants',
    name: 'Unde poți mânca',
    items: [
      {
        title: 'Casa Serena',
        description: 'Restaurant situat aproape, în Predeluț, ce oferă preparate tradiționale și internaționale într-un cadru cald și primitor.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d663.3043224953054!2d25.36316508506875!3d45.52909704654097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b348768bb2b44b%3A0x776241977fc4a29!2sCasa%20Serena%2C%20Strada%20Bisericii%2014%2C%20507025%20Predelu%C8%9B!5e1!3m2!1sro!2sro!4v1787486432033!5m2!1sro!2sro',
        location: '2.5 km'
      },
      {
        title: 'Pizza Express Zărnești',
        description: 'Pizzerie locală apreciată pentru preparatele rapide, pizza delicioasă și atmosferă relaxată.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4459.847101953785!2d25.32573016706195!3d45.558267605404424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b348daf18de2cb%3A0xc925549ad11a9f61!2sPizza%20Express!5e1!3m2!1sro!2sro!4v1787486308757!5m2!1sro!2sro',
        location: '4.5 km'
      },
      {
        title: 'Restaurant Modern',
        description: 'Locație primitoare din Zărnești cu un meniu diversificat, ideală pentru mese în familie sau cu prietenii.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.114072493051!2d25.316238176921065!3d45.560595427001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b349058e5029bf%3A0xc3fd4687bc614ca8!2sRestaurant%20Modern!5e1!3m2!1sro!2sro!4v1787486354621!5m2!1sro!2sro',
        location: '4.5 km'
      }
    ]
  },
  {
    id: 'transport',
    name: 'Conexiuni & Transport',
    items: [
      {
        title: 'Gara Zărnești',
        description: 'Punct principal de acces feroviar ce asigură conexiunea locală rapidă cu Brașovul.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9708010256713!2d25.325935176921163!3d45.56274192685753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b3491ca1eefab1%3A0xe028f6c4f0eb7797!2sGara%20Zarnesti!5e1!3m2!1sro!2sro!4v1787486470048!5m2!1sro!2sro',
        location: '4.5 km'
      },
      {
        title: 'Aeroportul Internațional Brașov-Ghimbav',
        description: 'Cel mai apropiat aeroport, ce facilitează călătoriile rapide către și dinspre principalele destinații internaționale.',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.1671295286587!2d25.515226076925874!3d45.69448811804296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b351004aa93337%3A0x901042384cf7f48c!2sAeroportul%20Interna%C8%9Bional%20Bra%C8%99ov-Ghimbav!5e1!3m2!1sro!2sro!4v1787486538556!5m2!1sro!2sro',
        location: '25 km'
      }
    ]
  }
];
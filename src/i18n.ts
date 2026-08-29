import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ro: {
    translation: {
      navbar: {
        home: 'Acasă',
        experiences: 'Experiențe',
        details: 'Detalii',
        gallery: 'Galerie',
        language: 'Limbă',
      },
      hero: {
        title: 'Refugiul tău din inima munților',
        subtitle: 'Descoperă liniștea la Lumar Lodge, Tohanița',
      },
      about: {
        title: 'Despre Noi',
        description1: 'LuMar Lodge Tohăniță Zarnesti se află în Zărneşti, la 5 km de Castelul Bran, și pune la dispoziție WiFi gratuit, o grădină, o bucătărie comună și un lounge comun. Această proprietate oferă acces la un balcon și parcare privată gratuită.',
        description2: 'Acest chalet cu terasă și vedere la munte include 3 dormitoare, un living, un televizor cu ecran plat, o bucătărie utilată, cu frigider și cuptor, precum și 3 băi cu duș. Acest chalet pune la dispoziția oaspeților prosoape și lenjerie de pat.',
        description3: 'Acest chalet pune la dispoziție un grătar.',
        description4: 'LuMar Lodge Tohăniță Zarnesti se află la 17 km de Dino Parc și la 31 km de Piaţa Sfatului. Aeroportul Internațional Brașov-Ghimbav se află la 30 km.',
      },
      amenities: {
        mountain: 'Priveliște Montană',
        mountainDesc: 'Vederi spectaculoase',
        grill: 'Grătar & Foișor',
        grillDesc: 'Mese în aer liber',
        wifi: 'Wi-Fi & Parcare',
        wifiDesc: 'Conectivitate totală',
      },
      experiences: {
        title: 'Experiențe Locale',
        subtitle: 'Descoperă atracțiile și destinațiile din jur',
        seeLocation: 'Vezi locația',
        nature: 'Natură & Aer curat',
        attractions: 'Atracții principale',
        dining: 'Unde poți mânca',
        transport: 'Conexiuni & Transport',
        items: {
          parcRegal: {
            title: 'Parcul Regal (Bran)',
            description: 'Spațiu verde amenajat la baza Castelului Bran, perfect pentru plimbări relaxante și momente de liniște în aer liber.',
          },
          wolfPark: {
            title: 'Wolf Park Adventure',
            description: 'Parc de aventură din Zărnești dotat cu trasee suspendate la înălțime, tiroliene și activități dinamice în pădure.',
          },
          botorog: {
            title: 'Botorog Campground (Fântâna lui Botorog)',
            description: 'Punct de pornire popular pentru traseele montane din Piatra Craiului, ideal pentru campare în mijlocul naturii.',
          },
          prapastii: {
            title: 'Prăpăstiile Zărneștiului',
            description: 'Canion spectaculos dedicat pasionaților de plimbări, ciclism montan sau cățărare pe stâncă, oferind trasee inedite în cadrul natural.',
          },
          gradeiste: {
            title: 'Parcul de aventură Cheile Grădiștei',
            description: 'Complex de agrement ce oferă tiroliene, trasee cu obstacole și activități sportive pentru întreaga familie.',
          },
          plaiul: {
            title: 'Plaiul Foii',
            description: 'O zonă pitorească superbă la poalele Munților Piatra Craiului, faimoasă pentru peisajele spectaculoase și accesul la traseele montane de creastă.',
          },
          bran: {
            title: 'Castelul Bran',
            description: 'Celebrul monument istoric, fascinant și cunoscut la nivel internațional pentru legenda lui Dracula și arhitectura sa medievală.',
          },
          libearty: {
            title: 'Rezervația de urși de la Zărnești (Libearty)',
            description: 'Cel mai mare sanctuar de urși bruni din lume, unde urșii salvați trăiesc protejați în mediul lor natural.',
          },
          dinoPark: {
            title: 'Dino Parc Râșnov',
            description: 'Cel mai mare parc cu dinozauri din Sud-Estul Europei, o atracție educativă și extrem de distractivă, ideală pentru familii și copii.',
          },
          rasnov: {
            title: 'Cetatea Râșnov',
            description: 'Una dintre cele mai bine conservate cetăți țărănești din Transilvania, oferind o panoramă spectaculoasă asupra Depresiunii Țării Bârsei.',
          },
          serena: {
            title: 'Casa Serena',
            description: 'Restaurant situat aproape, în Predeluț, ce oferă preparate tradiționale și internaționale într-un cadru cald și primitor.',
          },
          pizzaExpress: {
            title: 'Pizza Express Zărnești',
            description: 'Pizzerie locală apreciată pentru preparatele rapide, pizza delicioasă și atmosferă relaxată.',
          },
          modern: {
            title: 'Restaurant Modern',
            description: 'Locație primitoare din Zărnești cu un meniu diversificat, ideală pentru mese în familie sau cu prietenii.',
          },
          garaZarnesti: {
            title: 'Gara Zărnești',
            description: 'Punct principal de acces feroviar ce asigură conexiunea locală rapidă cu Brașovul.',
          },
          aeroport: {
            title: 'Aeroportul Internațional Brașov-Ghimbav',
            description: 'Cel mai apropiat aeroport, ce facilitează călătoriile rapide către și dinspre principalele destinații internaționale.',
          },
        },
      },
      gallery: {
        title: 'Galerie Foto',
        subtitle: 'Explorați frumusețea proprietății noastre',
        viewFullSize: 'Vizionează în mărime completă',
        exterior: 'Exterior',
        kitchen: 'Bucătărie',
        bedrooms: 'Dormitoare',
        bathrooms: 'Băi',
      },
      details: {
        title: 'Detalii cazare',
        subtitle: 'Informații esențiale despre sejur, prezentate pe scurt.',
        layoutTitle: 'Program de sosire și plecare',
        schedule: {
          checkin: 'Check-in',
          checkout: 'Check-out',
        },
        stats: {
          bedrooms: {
            label: 'Dormitoare',
          },
          bathrooms: {
            label: 'Băi',
          },
          kitchen: {
            label: 'Bucătărie',
          },
          area: {
            label: 'Suprafață',
          },
        },
        rulesSectionTitle: 'Reguli',
        rules: {
          smokingTitle: 'Fumatul interzis',
          partiesTitle: 'Fără petreceri sau evenimente similare',
          petsTitle: 'Fără animale de companie',
        },
        facilitiesTitle: 'Facilități',
        detailedAmenities: {
          title: 'Dotări complete',
          subtitle: 'Tot ce ai nevoie pentru un sejur confortabil, organizat pe categorii clare.',
          kitchenDiningTitle: 'Bucătărie și luat masa',
          bedBathTitle: 'Paturi, băi și igienă',
          entertainmentComfortTitle: 'Divertisment și confort',
          kitchenDiningItems: {
            fridge: 'Frigider',
            stoveOven: 'Plită și cuptor',
            microwave: 'Cuptor cu microunde',
            espressoMachine: 'Espressor / Cafetieră',
            toasterKettle: 'Prăjitor de pâine și fierbător',
            cookwareTableware: 'Veselă și ustensile de gătit',
            cleaningProducts: 'Produse pentru curățenie',
          },
          bedBathItems: {
            bedLinen: 'Lenjerie de pat premium',
            towels: 'Prosoape calitative',
            hairDryer: 'Uscător de păr',
            toiletries: 'Articole de toaletă gratuite',
            slippers: 'Papuci de casă',
            wardrobe: 'Dulap sau garderobă',
          },
          entertainmentComfortItems: {
            smartTv: 'Smart TV cu cablu/satelit',
            fireplace: 'Șemineu pe lemne',
            heating: 'Încălzire centralizată',
            soundproofing: 'Izolare fonică',
            bedsideOutlets: 'Prize lângă pat',
          },
        },
        languagesTitle: 'Limbi vorbite',
        languagesLabel: 'Gazda vorbește',
        languagesValue: 'Română, engleză, germană',
        gardenTitle: 'Grădină și exterior',
        gardenText: 'Curtea privată și terasa panoramică sunt puse în valoare aici, împreună cu priveliștea spre Bucegi și Piatra Craiului.',
        gardenBadge: 'Grădină și aer liber',
        garden: {
          features: {
            privateYard: 'Curte privată',
            bbq: 'Zonă de grătar / BBQ',
            terrace: 'Terasă cu panoramă',
            views: 'Priveliște Munții Bucegi & Piatra Craiului',
          },
        },
        amenities: {
          parkingTitle: 'Parcare privată gratuită',
          shuttleTitle: 'Transport aeroport (contra cost)',
          wifiTitle: 'Wi-Fi gratuit',
          heatingTitle: 'Încălzire în pardoseală',
          familyTitle: 'Camere de familie',
        },
        roomsTitle: 'Configurația camerelor',
        rooms: {
          bedroom1: {
            title: 'Dormitor 1',
            description: 'Pat matrimonial și Balcon',
          },
          bedroom2: {
            title: 'Dormitor 2',
            description: 'Pat matrimonial extra-mare și Balcon',
          },
          bedroom3: {
            title: 'Dormitor 3',
            description: 'Pat matrimonial',
          },
          living: {
            title: 'Living',
            description: 'Canapea extensibilă',
          },
        },
        price: {
          title: 'Preț pe noapte',
          value: '--- RON / noapte',
          subtitle: 'Tarif direct de la gazdă, fără comisioane sau taxe suplimentare.',
        },
      },
      footer: {
        about: 'O cabană de lux în inima Carpații Curburii, oferind experiențe autentice și confort premium.',
        contact: 'Contact',
        address: 'Str. Tohănița 116c, 505800 Zărneşti, România',
        phone: '+40 756 294 324',
        copyright: '© 2026 Lumar Lodge. All rights reserved.',
      },
    },
  },
  en: {
    translation: {
      navbar: {
        home: 'Home',
        experiences: 'Experiences',
        details: 'Details',
        gallery: 'Gallery',
        language: 'Language',
      },
      hero: {
        title: 'Your refuge in the heart of the mountains',
        subtitle: 'Discover peace at Lumar Lodge, Tohanita',
      },
      about: {
        title: 'About Us',
        description1: 'LuMar Lodge Tohanita Zarnesti is located in Zarnesti, 5 km from Bran Castle, and offers free WiFi, a garden, shared kitchen and common lounge. This property provides access to a balcony and free private parking.',
        description2: 'This mountain terrace chalet includes 3 bedrooms, a living room, flat-screen TV, equipped kitchen with refrigerator and oven, and 3 bathrooms with shower. The chalet provides guests with towels and bed linen.',
        description3: 'This chalet provides a barbecue.',
        description4: 'LuMar Lodge Tohanita Zarnesti is 17 km from Dino Parc and 31 km from Council Square. Brasov-Ghimbav International Airport is 30 km away.',
      },
      amenities: {
        mountain: 'Mountain View',
        mountainDesc: 'Spectacular views',
        grill: 'Grill & Gazebo',
        grillDesc: 'Outdoor dining',
        wifi: 'Wi-Fi & Parking',
        wifiDesc: 'Full connectivity',
      },
      experiences: {
        title: 'Local Experiences',
        subtitle: 'Discover attractions and destinations around us',
        seeLocation: 'View location',
        nature: 'Nature & Fresh Air',
        attractions: 'Main Attractions',
        dining: 'Where to Eat',
        transport: 'Connections & Transport',
        items: {
          parcRegal: {
            title: 'Royal Park (Bran)',
            description: 'Green space arranged at the base of Bran Castle, perfect for relaxing walks and moments of peace in the open air.',
          },
          wolfPark: {
            title: 'Wolf Park Adventure',
            description: 'Adventure park in Zarnesti equipped with suspended trails at height, zip-lines and dynamic activities in the forest.',
          },
          botorog: {
            title: 'Botorog Campground (Botorog Fountain)',
            description: 'Popular starting point for mountain trails in Piatra Craiului, ideal for camping in the middle of nature.',
          },
          prapastii: {
            title: 'Zarnesti Gorges',
            description: 'Spectacular canyon dedicated to hiking, mountain biking or rock climbing enthusiasts, offering unique trails in a natural setting.',
          },
          gradeiste: {
            title: 'Gradiste Gorges Adventure Park',
            description: 'Recreation complex offering zip-lines, obstacle courses and sports activities for the whole family.',
          },
          plaiul: {
            title: 'Plaiul Foii',
            description: 'A magnificent picturesque area at the foot of the Piatra Craiului Mountains, famous for spectacular landscapes and access to ridge mountain trails.',
          },
          bran: {
            title: 'Bran Castle',
            description: 'Famous historic monument, fascinating and internationally known for the Dracula legend and its medieval architecture.',
          },
          libearty: {
            title: 'Zarnesti Bear Sanctuary (Libearty)',
            description: 'The world\'s largest brown bear sanctuary, where rescued bears live protected in their natural environment.',
          },
          dinoPark: {
            title: 'Dino Parc Rasnov',
            description: 'The largest dinosaur park in South-Eastern Europe, an educational and extremely entertaining attraction, ideal for families and children.',
          },
          rasnov: {
            title: 'Rasnov Fortress',
            description: 'One of the best-preserved peasant fortresses in Transylvania, offering a spectacular panorama of the Bârsa Valley Depression.',
          },
          serena: {
            title: 'Casa Serena',
            description: 'Restaurant located nearby, in Predelut, offering traditional and international dishes in a warm and welcoming setting.',
          },
          pizzaExpress: {
            title: 'Pizza Express Zarnesti',
            description: 'Local pizzeria appreciated for quick meals, delicious pizza and relaxed atmosphere.',
          },
          modern: {
            title: 'Restaurant Modern',
            description: 'Welcoming location in Zarnesti with a diverse menu, ideal for dining with family or friends.',
          },
          garaZarnesti: {
            title: 'Zarnesti Railway Station',
            description: 'Main rail access point providing quick local connections to Brasov.',
          },
          aeroport: {
            title: 'Brasov-Ghimbav International Airport',
            description: 'The closest airport, facilitating quick travels to and from major international destinations.',
          },
        },
      },
      gallery: {
        title: 'Photo Gallery',
        subtitle: 'Explore the beauty of our property',
        viewFullSize: 'View full size',
        exterior: 'Exterior',
        kitchen: 'Kitchen',
        bedrooms: 'Bedrooms',
        bathrooms: 'Bathrooms',
      },
      details: {
        title: 'Accommodation details',
        subtitle: 'Essential stay information, kept short and easy to scan.',
        layoutTitle: 'Arrival and departure times',
        schedule: {
          checkin: 'Check-in',
          checkout: 'Check-out',
        },
        stats: {
          bedrooms: {
            label: 'Bedrooms',
          },
          bathrooms: {
            label: 'Bathrooms',
          },
          kitchen: {
            label: 'Kitchen',
          },
          area: {
            label: 'Area',
          },
        },
        rulesSectionTitle: 'Rules',
        rules: {
          smokingTitle: 'No smoking',
          partiesTitle: 'No parties or similar events',
          petsTitle: 'No pets',
        },
        facilitiesTitle: 'Facilities',
        detailedAmenities: {
          title: 'Complete amenities',
          subtitle: 'Everything you need for a comfortable stay, organized into clear categories.',
          kitchenDiningTitle: 'Kitchen & Dining',
          bedBathTitle: 'Bed, Bath & Hygiene',
          entertainmentComfortTitle: 'Entertainment & Comfort',
          kitchenDiningItems: {
            fridge: 'Fridge',
            stoveOven: 'Stove and oven',
            microwave: 'Microwave',
            espressoMachine: 'Espresso machine',
            toasterKettle: 'Toaster and kettle',
            cookwareTableware: 'Cookware and tableware',
            cleaningProducts: 'Cleaning products',
          },
          bedBathItems: {
            bedLinen: 'Premium bed linens',
            towels: 'Quality towels',
            hairDryer: 'Hair dryer',
            toiletries: 'Free toiletries',
            slippers: 'House slippers',
            wardrobe: 'Wardrobe or closet',
          },
          entertainmentComfortItems: {
            smartTv: 'Smart TV with cable/satellite',
            fireplace: 'Wood-burning fireplace',
            heating: 'Central heating',
            soundproofing: 'Soundproofing',
            bedsideOutlets: 'Bedside outlets',
          },
        },
        languagesTitle: 'Spoken languages',
        languagesLabel: 'Host speaks',
        languagesValue: 'Romanian, English, German',
        gardenTitle: 'Garden and outdoors',
        gardenText: 'The private yard and panoramic terrace are highlighted here, together with Bucegi and Piatra Craiului mountain views.',
        gardenBadge: 'Garden and outdoors',
        garden: {
          features: {
            privateYard: 'Private yard',
            bbq: 'BBQ / Grill area',
            terrace: 'Panoramic terrace',
            views: 'Bucegi & Piatra Craiului Mountain views',
          },
        },
        amenities: {
          parkingTitle: 'Free private parking',
          shuttleTitle: 'Airport shuttle (for a fee)',
          wifiTitle: 'Free Wi-Fi',
          heatingTitle: 'Underfloor heating',
          familyTitle: 'Family rooms',
        },
        roomsTitle: 'Room configuration',
        rooms: {
          bedroom1: {
            title: 'Bedroom 1',
            description: 'Queen-size bed & Balcony',
          },
          bedroom2: {
            title: 'Bedroom 2',
            description: 'King-size bed & Balcony',
          },
          bedroom3: {
            title: 'Bedroom 3',
            description: 'Queen-size bed',
          },
          living: {
            title: 'Living Room',
            description: 'Sofa bed',
          },
        },
        price: {
          label: 'Price',
          title: 'Price per night',
          value: '--- RON / night',
          subtitle: 'Direct rate from host, no extra fees or commissions.',
        },
      },
      footer: {
        about: 'A luxury cabin in the heart of the Curburrii Carpathians, offering authentic experiences and premium comfort.',
        contact: 'Contact',
        address: 'Str. Tohanita 116c, 505800 Zarnesti, Romania',
        phone: '+40 756 294 324',
        copyright: '© 2026 Lumar Lodge. All rights reserved.',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ro',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;


export interface Attraction {
  title: string;
  description: string;
  image: string;
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
        title: 'Botorog Campground',
        description: 'Punct de pornire popular pentru traseele montane din Piatra Craiului, ideal pentru campare în mijlocul naturii.',
        image: '#',
        location: '4.6 km'
      },
      {
        title: 'Parcul Regal',
        description: 'Spațiu verde din Zărnești, perfect pentru plimbări relaxante și momente de liniște în aer liber.',
        image: '#',
        location: '5 km'
      },
      {
        title: 'Parcul Copiilor',
        description: 'Spații amenajate special pentru cei mici, cu zone de joacă sigure și activități în aer liber.',
        image: '#',
        location: '5 km'
      },
      {
        title: 'Zona escaladă',
        description: 'Areal dedicat pasionaților de cățărare pe stâncă, oferind trasee spectaculoase în cadrul natural din apropierea munților.',
        image: '#',
        location: '6 km'
      },
      {
        title: 'Wolf Park Adventure',
        description: 'Parc de aventură din Zărnești dotat cu trasee suspendate la înălțime, tiroliene și activități dinamice în pădure.',
        image: '#',
        location: '7 km'
      },
      {
        title: 'Parcul de aventură Cheile Grădiștei',
        description: 'Complex de agrement ce oferă tiroliene, trasee cu obstacole și activități sportive pentru întreaga familie.',
        image: '#',
        location: '14 km'
      }
    ]
  },
  {
    id: 'atractii',
    name: 'Atracții principale',
    items: [
      {
        title: 'Castelul Bran',
        description: 'Celebrul monument istoric fascinant, cunoscut la nivel internațional pentru legenda lui Dracula și arhitectura sa medievală.',
        image: '#',
        location: '5 km'
      },
      {
        title: 'Monumentul Eroilor',
        description: 'Monument comemorativ dedicat eroilor locali, amplasat într-o zonă de interes istoric și de reculegere.',
        image: '#',
        location: '8 km'
      },
      {
        title: 'Rezervația de urși de la Zărnești',
        description: 'Cel mai mare santuar de urși bruni din lume, unde urșii salvați trăiesc protejați în mediul lor natural.',
        image: '#',
        location: '11 km'
      },
      {
        title: 'Cetatea Râșnov',
        description: 'Una dintre cele mai bine conservate cetăți țărănești din Transilvania, oferind o panoramă spectaculoasă asupra Depresiunii Țării Bârsei.',
        image: '#',
        location: '16 km'
      }
    ]
  },
  {
    id: 'restaurants',
    name: 'Unde poți mânca',
    items: [
      {
        title: 'Pizza Express Zărnești',
        description: 'Pizzerie locală apreciată pentru preparatele rapide, pizza delicioasă și atmosferă relaxată.',
        image: '#',
        location: '3.5 km'
      },
      {
        title: 'Restaurant Modern',
        description: 'Locație primitoare cu un meniu diversificat, ideală pentru mese în familie sau cu prietenii.',
        image: '#',
        location: '3.9 km'
      },
      {
        title: 'Casa Serena',
        description: 'Restaurant ce oferă preparate tradiționale și internaționale într-un cadru cald și primitor.',
        image: '#',
        location: '4 km'
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
        image: '#',
        location: '4.3 km'
      },
      {
        title: 'Gara General Traian Moșoiu',
        description: 'Stație feroviară secundară pentru conexiuni regionale.',
        image: '#',
        location: '5 km'
      },
      {
        title: 'Aeroportul Internațional Brașov-Ghimbav',
        description: 'Cel mai apropiat aeroport modern, ce facilitează călătoriile rapide către și dinspre principalele destinații internaționale.',
        image: '#',
        location: '29 km'
      }
    ]
  }
];
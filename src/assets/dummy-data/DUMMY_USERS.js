const DUMMY_USERS = [
  {
    id: '60da7433cba3337b3626e7f30',
    name: 'Livingston Sosa',
    gender: 'male',
    email: 'livingstonsosa@schoolio.com',
    phone: '+1 (849) 577-2060',
    premium: false
  },
  {
    id: '60da7433f50659b0eb17062c1',
    name: 'Mitchell Wilkins',
    gender: 'male',
    email: 'mitchellwilkins@schoolio.com',
    phone: '+1 (941) 469-2255',
    premium: false
  },
  {
    id: '60da7433b280a056b4dfc9fb2',
    name: 'Orr Quinn',
    gender: 'male',
    email: 'orrquinn@schoolio.com',
    phone: '+1 (967) 507-3550',
    premium: true
  },
  {
    id: '60da74336522611fb6f4d4b23',
    name: 'Angelina Head',
    gender: 'female',
    email: 'angelinahead@schoolio.com',
    phone: '+1 (825) 423-2517',
    premium: false
  },
  {
    id: '60da7433d54416f24184564e4',
    name: 'Maddox Durham',
    gender: 'male',
    email: 'maddoxdurham@schoolio.com',
    phone: '+1 (885) 424-3887',
    premium: false
  },
  {
    id: '60da7433cfce37de906a7dd85',
    name: 'Graves Wilson',
    gender: 'male',
    email: 'graveswilson@schoolio.com',
    phone: '+1 (910) 561-2063',
    premium: true
  },
  {
    id: '60da74333a45e461bd57d4fd6',
    name: 'Elliott Mccullough',
    gender: 'male',
    email: 'elliottmccullough@schoolio.com',
    phone: '+1 (976) 479-2137',
    premium: false
  },
  {
    id: '60da7433caca8c483a1116317',
    name: 'Hobbs Greene',
    gender: 'male',
    email: 'hobbsgreene@schoolio.com',
    phone: '+1 (951) 495-2058',
    premium: false
  },
  {
    id: '60da74336133f1fbfb45a6518',
    name: 'Hallie West',
    gender: 'female',
    email: 'halliewest@schoolio.com',
    phone: '+1 (871) 453-2794',
    premium: false
  },
  {
    id: '60da7433738f455215f3727d9',
    name: 'Knox Fowler',
    gender: 'male',
    email: 'knoxfowler@schoolio.com',
    phone: '+1 (863) 528-3948',
    premium: true
  },
  {
    id: '60da743331d877fb636c8cfa10',
    name: 'Lorraine Stanley',
    gender: 'female',
    email: 'lorrainestanley@schoolio.com',
    phone: '+1 (931) 514-2472',
    premium: true
  },
  {
    id: '60da7433037d960ed1484ca611',
    name: 'Victoria Steele',
    gender: 'female',
    email: 'victoriasteele@schoolio.com',
    phone: '+1 (846) 569-3352',
    premium: false
  },
  {
    id: '60da7433dddcad0868ea651d12',
    name: 'Daniels Fulton',
    gender: 'male',
    email: 'danielsfulton@schoolio.com',
    phone: '+1 (938) 449-2362',
    premium: true
  },
  {
    id: '60da743361b484c3ca77b06813',
    name: 'Helen Strong',
    gender: 'female',
    email: 'helenstrong@schoolio.com',
    phone: '+1 (926) 495-2504',
    premium: false
  },
  {
    id: '60da7433fd4e3d089cdbec7f14',
    name: 'Melba Johns',
    gender: 'female',
    email: 'melbajohns@schoolio.com',
    phone: '+1 (861) 572-3587',
    premium: false
  },
  {
    id: '60da74338dd3e9708af9969f15',
    name: 'Leslie Duffy',
    gender: 'female',
    email: 'leslieduffy@schoolio.com',
    phone: '+1 (841) 485-3719',
    premium: true
  },
  {
    id: '60da74339cb10868a256d9cf16',
    name: 'Mercer Jennings',
    gender: 'male',
    email: 'mercerjennings@schoolio.com',
    phone: '+1 (904) 487-2297',
    premium: true
  },
  {
    id: '60da74338deee2e68528a3eb17',
    name: 'Frieda Diaz',
    gender: 'female',
    email: 'friedadiaz@schoolio.com',
    phone: '+1 (945) 418-2149',
    premium: true
  },
  {
    id: '60da7433dee05eb7f0312eb518',
    name: 'Margarita Anderson',
    gender: 'female',
    email: 'margaritaanderson@schoolio.com',
    phone: '+1 (818) 520-2002',
    premium: false
  },
  {
    id: '60da7433ec5225cbcf55b30e19',
    name: 'Melendez Atkins',
    gender: 'male',
    email: 'melendezatkins@schoolio.com',
    phone: '+1 (866) 439-2395',
    premium: false
  },
  {
    id: '60da7433c0cca1270d5db3b720',
    name: 'Elisabeth Carson',
    gender: 'female',
    email: 'elisabethcarson@schoolio.com',
    phone: '+1 (834) 438-3836',
    premium: true
  },
  {
    id: '60da7433fe5f19e5fa95828921',
    name: 'Christy Ferguson',
    gender: 'female',
    email: 'christyferguson@schoolio.com',
    phone: '+1 (944) 534-3430',
    premium: true
  },
  {
    id: '60da7433c31a6388198df41e22',
    name: 'Regina Sharpe',
    gender: 'female',
    email: 'reginasharpe@schoolio.com',
    phone: '+1 (820) 561-3294',
    premium: true
  },
  {
    id: '60da7433d5d8ab52b73ed66923',
    name: 'Jacqueline Weber',
    gender: 'female',
    email: 'jacquelineweber@schoolio.com',
    phone: '+1 (871) 498-2199',
    premium: false
  },
  {
    id: '60da7433acc331df55c919fc24',
    name: 'Toni Wallace',
    gender: 'female',
    email: 'toniwallace@schoolio.com',
    phone: '+1 (804) 419-2534',
    premium: true
  },
  {
    id: '60da743311417986ee5f33ce25',
    name: 'Bridget Sparks',
    gender: 'female',
    email: 'bridgetsparks@schoolio.com',
    phone: '+1 (935) 514-3382',
    premium: true
  },
  {
    id: '60da7433c836063564bfb16d26',
    name: 'Riddle Dale',
    gender: 'male',
    email: 'riddledale@schoolio.com',
    phone: '+1 (926) 595-2757',
    premium: true
  },
  {
    id: '60da7433279dc2cad60474fd27',
    name: 'Blake Chavez',
    gender: 'male',
    email: 'blakechavez@schoolio.com',
    phone: '+1 (852) 521-2037',
    premium: true
  },
  {
    id: '60da7433c0b813dd2763011a28',
    name: 'Best Golden',
    gender: 'male',
    email: 'bestgolden@schoolio.com',
    phone: '+1 (962) 517-2067',
    premium: true
  },
  {
    id: '60da7433479cdf8c8d1782a929',
    name: 'Bender Finley',
    gender: 'male',
    email: 'benderfinley@schoolio.com',
    phone: '+1 (838) 467-3010',
    premium: false
  },
  {
    id: '60da74337008335bf81ed76a30',
    name: 'Wiley Casey',
    gender: 'male',
    email: 'wileycasey@schoolio.com',
    phone: '+1 (893) 525-3300',
    premium: false
  },
  {
    id: '60da7433ca153c69453fc35d31',
    name: 'Herman Oneil',
    gender: 'male',
    email: 'hermanoneil@schoolio.com',
    phone: '+1 (847) 465-3313',
    premium: true
  },
  {
    id: '60da7433891e7264c21dc05332',
    name: 'Jamie Waller',
    gender: 'female',
    email: 'jamiewaller@schoolio.com',
    phone: '+1 (942) 511-3920',
    premium: false
  },
  {
    id: '60da7433f2ae0c8f37b1c7ae33',
    name: 'Lynne Curry',
    gender: 'female',
    email: 'lynnecurry@schoolio.com',
    phone: '+1 (967) 474-2747',
    premium: true
  },
  {
    id: '60da7433d995034b1289f18934',
    name: 'Slater Russo',
    gender: 'male',
    email: 'slaterrusso@schoolio.com',
    phone: '+1 (865) 438-2947',
    premium: true
  },
  {
    id: '60da74334356e059708fdb8235',
    name: 'Brigitte Davidson',
    gender: 'female',
    email: 'brigittedavidson@schoolio.com',
    phone: '+1 (945) 577-3096',
    premium: false
  },
  {
    id: '60da743331e78987980dfd1236',
    name: 'Amie Watts',
    gender: 'female',
    email: 'amiewatts@schoolio.com',
    phone: '+1 (995) 562-2464',
    premium: true
  },
  {
    id: '60da74331702561d8914e93437',
    name: 'Sofia Page',
    gender: 'female',
    email: 'sofiapage@schoolio.com',
    phone: '+1 (874) 462-2588',
    premium: true
  },
  {
    id: '60da7433e1ae587b38ed4eeb38',
    name: 'Cecelia Keith',
    gender: 'female',
    email: 'ceceliakeith@schoolio.com',
    phone: '+1 (885) 440-2917',
    premium: true
  },
  {
    id: '60da7433f87b256ed6cf20a339',
    name: 'Tammie Ewing',
    gender: 'female',
    email: 'tammieewing@schoolio.com',
    phone: '+1 (945) 473-3176',
    premium: true
  },
  {
    id: '60da743363cbd440bdbffea840',
    name: 'Lavonne Copeland',
    gender: 'female',
    email: 'lavonnecopeland@schoolio.com',
    phone: '+1 (915) 596-2308',
    premium: true
  },
  {
    id: '60da74330faa19a23addb88141',
    name: 'Tracie Hopkins',
    gender: 'female',
    email: 'traciehopkins@schoolio.com',
    phone: '+1 (880) 518-2798',
    premium: false
  },
  {
    id: '60da7433c7d955e18159e14242',
    name: 'Mullen Gilbert',
    gender: 'male',
    email: 'mullengilbert@schoolio.com',
    phone: '+1 (841) 478-3022',
    premium: true
  },
  {
    id: '60da7433039352d6ef56132343',
    name: 'Espinoza Watson',
    gender: 'male',
    email: 'espinozawatson@schoolio.com',
    phone: '+1 (882) 562-2218',
    premium: true
  },
  {
    id: '60da7433b7483af743bd623e44',
    name: 'Amy Fisher',
    gender: 'female',
    email: 'amyfisher@schoolio.com',
    phone: '+1 (917) 533-3885',
    premium: true
  },
  {
    id: '60da7433dec90af12a11fd4a45',
    name: 'Kirk Brock',
    gender: 'male',
    email: 'kirkbrock@schoolio.com',
    phone: '+1 (812) 437-2358',
    premium: false
  },
  {
    id: '60da74334a7df7f4c4b36c1646',
    name: 'Jimenez Mendez',
    gender: 'male',
    email: 'jimenezmendez@schoolio.com',
    phone: '+1 (940) 514-3273',
    premium: true
  },
  {
    id: '60da74339ae9d505dd5425fb47',
    name: 'Moon Richmond',
    gender: 'male',
    email: 'moonrichmond@schoolio.com',
    phone: '+1 (954) 477-2051',
    premium: true
  },
  {
    id: '60da7433fcd6679f04b4429148',
    name: 'Marylou Mosley',
    gender: 'female',
    email: 'maryloumosley@schoolio.com',
    phone: '+1 (864) 589-3937',
    premium: false
  },
  {
    id: '60da7433d1d302b0c3459c7249',
    name: 'Nichole Carney',
    gender: 'female',
    email: 'nicholecarney@schoolio.com',
    phone: '+1 (950) 514-3112',
    premium: true
  },
  {
    id: '60da74335fe125fc960fc24350',
    name: 'Rice Williamson',
    gender: 'male',
    email: 'ricewilliamson@schoolio.com',
    phone: '+1 (961) 596-3791',
    premium: false
  },
  {
    id: '60da743313cc1ec29d9a544351',
    name: 'Melva Mullen',
    gender: 'female',
    email: 'melvamullen@schoolio.com',
    phone: '+1 (913) 475-2742',
    premium: true
  },
  {
    id: '60da7433851127d0f86fdb5a52',
    name: 'Sargent Burris',
    gender: 'male',
    email: 'sargentburris@schoolio.com',
    phone: '+1 (839) 593-3937',
    premium: true
  },
  {
    id: '60da74334da7ce0cb626291c53',
    name: 'Murphy Dyer',
    gender: 'male',
    email: 'murphydyer@schoolio.com',
    phone: '+1 (878) 559-2861',
    premium: true
  },
  {
    id: '60da74338606e39a9a31be9b54',
    name: 'Rowland Henson',
    gender: 'male',
    email: 'rowlandhenson@schoolio.com',
    phone: '+1 (956) 547-2202',
    premium: true
  },
  {
    id: '60da7433371dbc92e819c8ee55',
    name: 'Haney Emerson',
    gender: 'male',
    email: 'haneyemerson@schoolio.com',
    phone: '+1 (937) 560-3489',
    premium: false
  },
  {
    id: '60da7433e758bef68e36f33d56',
    name: 'Deloris Lyons',
    gender: 'female',
    email: 'delorislyons@schoolio.com',
    phone: '+1 (905) 504-3733',
    premium: true
  },
  {
    id: '60da7433844267b88df58e4257',
    name: 'Tami Hubbard',
    gender: 'female',
    email: 'tamihubbard@schoolio.com',
    phone: '+1 (853) 454-3342',
    premium: true
  },
  {
    id: '60da7433f698cd68c434ef2658',
    name: 'Kennedy Hogan',
    gender: 'male',
    email: 'kennedyhogan@schoolio.com',
    phone: '+1 (959) 530-3774',
    premium: true
  },
  {
    id: '60da743374a91cf51ae1c23059',
    name: 'Holcomb Ruiz',
    gender: 'male',
    email: 'holcombruiz@schoolio.com',
    phone: '+1 (878) 555-2187',
    premium: false
  },
  {
    id: '60da7433166f5c0d97bf3fd560',
    name: 'Allyson Leach',
    gender: 'female',
    email: 'allysonleach@schoolio.com',
    phone: '+1 (877) 524-3515',
    premium: false
  },
  {
    id: '60da74331e6bfa004c61471d61',
    name: 'Katheryn Ratliff',
    gender: 'female',
    email: 'katherynratliff@schoolio.com',
    phone: '+1 (985) 405-3854',
    premium: false
  },
  {
    id: '60da7433a2c9781e4126b4ba62',
    name: 'Levy Austin',
    gender: 'male',
    email: 'levyaustin@schoolio.com',
    phone: '+1 (955) 576-2456',
    premium: false
  },
  {
    id: '60da7433abbdd83a708074b863',
    name: 'Latasha Holman',
    gender: 'female',
    email: 'latashaholman@schoolio.com',
    phone: '+1 (860) 539-3297',
    premium: false
  },
  {
    id: '60da74336a72f8a3de856d2964',
    name: 'Hollie Hodges',
    gender: 'female',
    email: 'holliehodges@schoolio.com',
    phone: '+1 (905) 450-3527',
    premium: true
  },
  {
    id: '60da7433c48213a9eb8f896d65',
    name: 'Morales Harrington',
    gender: 'male',
    email: 'moralesharrington@schoolio.com',
    phone: '+1 (919) 478-2426',
    premium: true
  },
  {
    id: '60da7433960e8df62c025edc66',
    name: 'Penny Pollard',
    gender: 'female',
    email: 'pennypollard@schoolio.com',
    phone: '+1 (902) 455-3113',
    premium: true
  },
  {
    id: '60da74337616fe927012dfbb67',
    name: 'Ina Alvarado',
    gender: 'female',
    email: 'inaalvarado@schoolio.com',
    phone: '+1 (808) 560-3032',
    premium: false
  },
  {
    id: '60da7433bcbaeb1aac03c46568',
    name: 'Jerri Fry',
    gender: 'female',
    email: 'jerrifry@schoolio.com',
    phone: '+1 (844) 501-2449',
    premium: true
  },
  {
    id: '60da74339d923034ba23ac8c69',
    name: 'Geraldine Schultz',
    gender: 'female',
    email: 'geraldineschultz@schoolio.com',
    phone: '+1 (896) 600-3176',
    premium: false
  },
  {
    id: '60da7433c6d840gb39cfb5dbd70',
    name: 'Knapp Hutchinson',
    gender: 'male',
    email: 'knapphutchinson@schoolio.com',
    phone: '+1 (944) 592-2896',
    premium: false
  },
  {
    id: '60da7433ecbe0dcf3854g03bc71',
    name: 'Hartman Estrada',
    gender: 'male',
    email: 'hartmanestrada@schoolio.com',
    phone: '+1 (886) 597-3729',
    premium: true
  },
  {
    id: '60da7433g948f2eef2a08981d72',
    name: 'Anastasia Jacobs',
    gender: 'female',
    email: 'anastasiajacobs@schoolio.com',
    phone: '+1 (933) 413-3796',
    premium: true
  },
  {
    id: '60da7433bf49bb6988ffaedc773',
    name: 'Waters Harris',
    gender: 'male',
    email: 'watersharris@schoolio.com',
    phone: '+1 (917) 559-3721',
    premium: false
  },
  {
    id: '60da743a330507b5fd7fc939074',
    name: 'Amalia Alexander',
    gender: 'female',
    email: 'amaliaalexander@schoolio.com',
    phone: '+1 (806) 575-3177',
    premium: false
  }
]



const getUsers = ({page, search, filter} ) => {
  const filtered = filter === 'all' ? DUMMY_USERS : DUMMY_USERS.filter(user => user.premium)

  var searched = filtered;
  if (!!search){
    searched = filtered.filter(user => user.email.includes(search.toLowerCase()))
  }

  const totalPages = Math.ceil(searched.length/10)

  return {
    users: searched.slice((page-1)*10, page*10),
    totalPages
  }
}

export default getUsers;

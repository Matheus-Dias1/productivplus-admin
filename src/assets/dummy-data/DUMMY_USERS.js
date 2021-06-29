const DUMMY_USERS = [
  {
    "id": "60da7433cba3337b3626e7f3",
    "name": "Livingston Sosa",
    "gender": "male",
    "email": "livingstonsosa@schoolio.com",
    "phone": "+1 (849) 577-2060"
  },
  {
    "id": "60da7433f50659b0eb17062c",
    "name": "Mitchell Wilkins",
    "gender": "male",
    "email": "mitchellwilkins@schoolio.com",
    "phone": "+1 (941) 469-2255"
  },
  {
    "id": "60da7433b280a056b4dfc9fb",
    "name": "Orr Quinn",
    "gender": "male",
    "email": "orrquinn@schoolio.com",
    "phone": "+1 (967) 507-3550"
  },
  {
    "id": "60da74336522611fb6f4d4b2",
    "name": "Angelina Head",
    "gender": "female",
    "email": "angelinahead@schoolio.com",
    "phone": "+1 (825) 423-2517"
  },
  {
    "id": "60da7433d54416f24184564e",
    "name": "Maddox Durham",
    "gender": "male",
    "email": "maddoxdurham@schoolio.com",
    "phone": "+1 (885) 424-3887"
  },
  {
    "id": "60da7433cfce37de906a7dd8",
    "name": "Graves Wilson",
    "gender": "male",
    "email": "graveswilson@schoolio.com",
    "phone": "+1 (910) 561-2063"
  },
  {
    "id": "60da74333a45e461bd57d4fd",
    "name": "Elliott Mccullough",
    "gender": "male",
    "email": "elliottmccullough@schoolio.com",
    "phone": "+1 (976) 479-2137"
  },
  {
    "id": "60da7433caca8c483a111631",
    "name": "Hobbs Greene",
    "gender": "male",
    "email": "hobbsgreene@schoolio.com",
    "phone": "+1 (951) 495-2058"
  },
  {
    "id": "60da74336133f1fbfb45a651",
    "name": "Hallie West",
    "gender": "female",
    "email": "halliewest@schoolio.com",
    "phone": "+1 (871) 453-2794"
  },
  {
    "id": "60da7433738f455215f3727d",
    "name": "Knox Fowler",
    "gender": "male",
    "email": "knoxfowler@schoolio.com",
    "phone": "+1 (863) 528-3948"
  },
  {
    "id": "60da743331d877fb636c8cfa",
    "name": "Lorraine Stanley",
    "gender": "female",
    "email": "lorrainestanley@schoolio.com",
    "phone": "+1 (931) 514-2472"
  },
  {
    "id": "60da7433037d960ed1484ca6",
    "name": "Victoria Steele",
    "gender": "female",
    "email": "victoriasteele@schoolio.com",
    "phone": "+1 (846) 569-3352"
  },
  {
    "id": "60da7433dddcad0868ea651d",
    "name": "Daniels Fulton",
    "gender": "male",
    "email": "danielsfulton@schoolio.com",
    "phone": "+1 (938) 449-2362"
  },
  {
    "id": "60da743361b484c3ca77b068",
    "name": "Helen Strong",
    "gender": "female",
    "email": "helenstrong@schoolio.com",
    "phone": "+1 (926) 495-2504"
  },
  {
    "id": "60da7433fd4e3d089cdbec7f",
    "name": "Melba Johns",
    "gender": "female",
    "email": "melbajohns@schoolio.com",
    "phone": "+1 (861) 572-3587"
  },
  {
    "id": "60da74338dd3e9708af9969f",
    "name": "Leslie Duffy",
    "gender": "female",
    "email": "leslieduffy@schoolio.com",
    "phone": "+1 (841) 485-3719"
  },
  {
    "id": "60da74339cb10868a256d9cf",
    "name": "Mercer Jennings",
    "gender": "male",
    "email": "mercerjennings@schoolio.com",
    "phone": "+1 (904) 487-2297"
  },
  {
    "id": "60da74338deee2e68528a3eb",
    "name": "Frieda Diaz",
    "gender": "female",
    "email": "friedadiaz@schoolio.com",
    "phone": "+1 (945) 418-2149"
  },
  {
    "id": "60da7433dee05eb7f0312eb5",
    "name": "Margarita Anderson",
    "gender": "female",
    "email": "margaritaanderson@schoolio.com",
    "phone": "+1 (818) 520-2002"
  },
  {
    "id": "60da7433ec5225cbcf55b30e",
    "name": "Melendez Atkins",
    "gender": "male",
    "email": "melendezatkins@schoolio.com",
    "phone": "+1 (866) 439-2395"
  },
  {
    "id": "60da7433c0cca1270d5db3b7",
    "name": "Elisabeth Carson",
    "gender": "female",
    "email": "elisabethcarson@schoolio.com",
    "phone": "+1 (834) 438-3836"
  },
  {
    "id": "60da7433fe5f19e5fa958289",
    "name": "Christy Ferguson",
    "gender": "female",
    "email": "christyferguson@schoolio.com",
    "phone": "+1 (944) 534-3430"
  },
  {
    "id": "60da7433c31a6388198df41e",
    "name": "Regina Sharpe",
    "gender": "female",
    "email": "reginasharpe@schoolio.com",
    "phone": "+1 (820) 561-3294"
  },
  {
    "id": "60da7433d5d8ab52b73ed669",
    "name": "Jacqueline Weber",
    "gender": "female",
    "email": "jacquelineweber@schoolio.com",
    "phone": "+1 (871) 498-2199"
  },
  {
    "id": "60da7433acc331df55c919fc",
    "name": "Toni Wallace",
    "gender": "female",
    "email": "toniwallace@schoolio.com",
    "phone": "+1 (804) 419-2534"
  },
  {
    "id": "60da743311417986ee5f33ce",
    "name": "Bridget Sparks",
    "gender": "female",
    "email": "bridgetsparks@schoolio.com",
    "phone": "+1 (935) 514-3382"
  },
  {
    "id": "60da7433c836063564bfb16d",
    "name": "Riddle Dale",
    "gender": "male",
    "email": "riddledale@schoolio.com",
    "phone": "+1 (926) 595-2757"
  },
  {
    "id": "60da7433279dc2cad60474fd",
    "name": "Blake Chavez",
    "gender": "male",
    "email": "blakechavez@schoolio.com",
    "phone": "+1 (852) 521-2037"
  },
  {
    "id": "60da7433c0b813dd2763011a",
    "name": "Best Golden",
    "gender": "male",
    "email": "bestgolden@schoolio.com",
    "phone": "+1 (962) 517-2067"
  },
  {
    "id": "60da7433479cdf8c8d1782a9",
    "name": "Bender Finley",
    "gender": "male",
    "email": "benderfinley@schoolio.com",
    "phone": "+1 (838) 467-3010"
  },
  {
    "id": "60da74337008335bf81ed76a",
    "name": "Wiley Casey",
    "gender": "male",
    "email": "wileycasey@schoolio.com",
    "phone": "+1 (893) 525-3300"
  },
  {
    "id": "60da7433ca153c69453fc35d",
    "name": "Herman Oneil",
    "gender": "male",
    "email": "hermanoneil@schoolio.com",
    "phone": "+1 (847) 465-3313"
  },
  {
    "id": "60da7433891e7264c21dc053",
    "name": "Jamie Waller",
    "gender": "female",
    "email": "jamiewaller@schoolio.com",
    "phone": "+1 (942) 511-3920"
  },
  {
    "id": "60da7433f2ae0c8f37b1c7ae",
    "name": "Lynne Curry",
    "gender": "female",
    "email": "lynnecurry@schoolio.com",
    "phone": "+1 (967) 474-2747"
  },
  {
    "id": "60da7433d995034b1289f189",
    "name": "Slater Russo",
    "gender": "male",
    "email": "slaterrusso@schoolio.com",
    "phone": "+1 (865) 438-2947"
  },
  {
    "id": "60da74334356e059708fdb82",
    "name": "Brigitte Davidson",
    "gender": "female",
    "email": "brigittedavidson@schoolio.com",
    "phone": "+1 (945) 577-3096"
  },
  {
    "id": "60da743331e78987980dfd12",
    "name": "Amie Watts",
    "gender": "female",
    "email": "amiewatts@schoolio.com",
    "phone": "+1 (995) 562-2464"
  },
  {
    "id": "60da74331702561d8914e934",
    "name": "Sofia Page",
    "gender": "female",
    "email": "sofiapage@schoolio.com",
    "phone": "+1 (874) 462-2588"
  },
  {
    "id": "60da7433e1ae587b38ed4eeb",
    "name": "Cecelia Keith",
    "gender": "female",
    "email": "ceceliakeith@schoolio.com",
    "phone": "+1 (885) 440-2917"
  },
  {
    "id": "60da7433f87b256ed6cf20a3",
    "name": "Tammie Ewing",
    "gender": "female",
    "email": "tammieewing@schoolio.com",
    "phone": "+1 (945) 473-3176"
  },
  {
    "id": "60da743363cbd440bdbffea8",
    "name": "Lavonne Copeland",
    "gender": "female",
    "email": "lavonnecopeland@schoolio.com",
    "phone": "+1 (915) 596-2308"
  },
  {
    "id": "60da74330faa19a23addb881",
    "name": "Tracie Hopkins",
    "gender": "female",
    "email": "traciehopkins@schoolio.com",
    "phone": "+1 (880) 518-2798"
  },
  {
    "id": "60da7433c7d955e18159e142",
    "name": "Mullen Gilbert",
    "gender": "male",
    "email": "mullengilbert@schoolio.com",
    "phone": "+1 (841) 478-3022"
  },
  {
    "id": "60da7433039352d6ef561323",
    "name": "Espinoza Watson",
    "gender": "male",
    "email": "espinozawatson@schoolio.com",
    "phone": "+1 (882) 562-2218"
  },
  {
    "id": "60da7433b7483af743bd623e",
    "name": "Amy Fisher",
    "gender": "female",
    "email": "amyfisher@schoolio.com",
    "phone": "+1 (917) 533-3885"
  },
  {
    "id": "60da7433dec90af12a11fd4a",
    "name": "Kirk Brock",
    "gender": "male",
    "email": "kirkbrock@schoolio.com",
    "phone": "+1 (812) 437-2358"
  },
  {
    "id": "60da74334a7df7f4c4b36c16",
    "name": "Jimenez Mendez",
    "gender": "male",
    "email": "jimenezmendez@schoolio.com",
    "phone": "+1 (940) 514-3273"
  },
  {
    "id": "60da74339ae9d505dd5425fb",
    "name": "Moon Richmond",
    "gender": "male",
    "email": "moonrichmond@schoolio.com",
    "phone": "+1 (954) 477-2051"
  },
  {
    "id": "60da7433fcd6679f04b44291",
    "name": "Marylou Mosley",
    "gender": "female",
    "email": "maryloumosley@schoolio.com",
    "phone": "+1 (864) 589-3937"
  },
  {
    "id": "60da7433d1d302b0c3459c72",
    "name": "Nichole Carney",
    "gender": "female",
    "email": "nicholecarney@schoolio.com",
    "phone": "+1 (950) 514-3112"
  },
  {
    "id": "60da74335fe125fc960fc243",
    "name": "Rice Williamson",
    "gender": "male",
    "email": "ricewilliamson@schoolio.com",
    "phone": "+1 (961) 596-3791"
  },
  {
    "id": "60da743313cc1ec29d9a5443",
    "name": "Melva Mullen",
    "gender": "female",
    "email": "melvamullen@schoolio.com",
    "phone": "+1 (913) 475-2742"
  },
  {
    "id": "60da7433851127d0f86fdb5a",
    "name": "Sargent Burris",
    "gender": "male",
    "email": "sargentburris@schoolio.com",
    "phone": "+1 (839) 593-3937"
  },
  {
    "id": "60da74334da7ce0cb626291c",
    "name": "Murphy Dyer",
    "gender": "male",
    "email": "murphydyer@schoolio.com",
    "phone": "+1 (878) 559-2861"
  },
  {
    "id": "60da74338606e39a9a31be9b",
    "name": "Rowland Henson",
    "gender": "male",
    "email": "rowlandhenson@schoolio.com",
    "phone": "+1 (956) 547-2202"
  },
  {
    "id": "60da7433371dbc92e819c8ee",
    "name": "Haney Emerson",
    "gender": "male",
    "email": "haneyemerson@schoolio.com",
    "phone": "+1 (937) 560-3489"
  },
  {
    "id": "60da7433e758bef68e36f33d",
    "name": "Deloris Lyons",
    "gender": "female",
    "email": "delorislyons@schoolio.com",
    "phone": "+1 (905) 504-3733"
  },
  {
    "id": "60da7433844267b88df58e42",
    "name": "Tami Hubbard",
    "gender": "female",
    "email": "tamihubbard@schoolio.com",
    "phone": "+1 (853) 454-3342"
  },
  {
    "id": "60da7433f698cd68c434ef26",
    "name": "Kennedy Hogan",
    "gender": "male",
    "email": "kennedyhogan@schoolio.com",
    "phone": "+1 (959) 530-3774"
  },
  {
    "id": "60da743374a91cf51ae1c230",
    "name": "Holcomb Ruiz",
    "gender": "male",
    "email": "holcombruiz@schoolio.com",
    "phone": "+1 (878) 555-2187"
  },
  {
    "id": "60da7433166f5c0d97bf3fd5",
    "name": "Allyson Leach",
    "gender": "female",
    "email": "allysonleach@schoolio.com",
    "phone": "+1 (877) 524-3515"
  },
  {
    "id": "60da74331e6bfa004c61471d",
    "name": "Katheryn Ratliff",
    "gender": "female",
    "email": "katherynratliff@schoolio.com",
    "phone": "+1 (985) 405-3854"
  },
  {
    "id": "60da7433a2c9781e4126b4ba",
    "name": "Levy Austin",
    "gender": "male",
    "email": "levyaustin@schoolio.com",
    "phone": "+1 (955) 576-2456"
  },
  {
    "id": "60da7433abbdd83a708074b8",
    "name": "Latasha Holman",
    "gender": "female",
    "email": "latashaholman@schoolio.com",
    "phone": "+1 (860) 539-3297"
  },
  {
    "id": "60da74336a72f8a3de856d29",
    "name": "Hollie Hodges",
    "gender": "female",
    "email": "holliehodges@schoolio.com",
    "phone": "+1 (905) 450-3527"
  },
  {
    "id": "60da7433c48213a9eb8f896d",
    "name": "Morales Harrington",
    "gender": "male",
    "email": "moralesharrington@schoolio.com",
    "phone": "+1 (919) 478-2426"
  },
  {
    "id": "60da7433960e8df62c025edc",
    "name": "Penny Pollard",
    "gender": "female",
    "email": "pennypollard@schoolio.com",
    "phone": "+1 (902) 455-3113"
  },
  {
    "id": "60da74337616fe927012dfbb",
    "name": "Ina Alvarado",
    "gender": "female",
    "email": "inaalvarado@schoolio.com",
    "phone": "+1 (808) 560-3032"
  },
  {
    "id": "60da7433bcbaeb1aac03c465",
    "name": "Jerri Fry",
    "gender": "female",
    "email": "jerrifry@schoolio.com",
    "phone": "+1 (844) 501-2449"
  },
  {
    "id": "60da74339d923034ba23ac8c",
    "name": "Geraldine Schultz",
    "gender": "female",
    "email": "geraldineschultz@schoolio.com",
    "phone": "+1 (896) 600-3176"
  },
  {
    "id": "60da7433c6d840b39cfb5dbd",
    "name": "Knapp Hutchinson",
    "gender": "male",
    "email": "knapphutchinson@schoolio.com",
    "phone": "+1 (944) 592-2896"
  },
  {
    "id": "60da7433ecbe0dcf385403bc",
    "name": "Hartman Estrada",
    "gender": "male",
    "email": "hartmanestrada@schoolio.com",
    "phone": "+1 (886) 597-3729"
  },
  {
    "id": "60da7433948f2eef2a08981d",
    "name": "Anastasia Jacobs",
    "gender": "female",
    "email": "anastasiajacobs@schoolio.com",
    "phone": "+1 (933) 413-3796"
  },
  {
    "id": "60da7433bf49b6988ffaedc7",
    "name": "Waters Harris",
    "gender": "male",
    "email": "watersharris@schoolio.com",
    "phone": "+1 (917) 559-3721"
  },
  {
    "id": "60da743330507b5fd7fc9390",
    "name": "Amalia Alexander",
    "gender": "female",
    "email": "amaliaalexander@schoolio.com",
    "phone": "+1 (806) 575-3177"
  }
]

export default DUMMY_USERS;

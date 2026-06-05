import {
  Accessibility,
  Balloon,
  Banknote,
  Bike,
  Blocks,
  BookMarked,
  BowArrow,
  Building,
  Bus,
  Cable,
  CarTaxiFront,
  Cat,
  Cctv,
  Church,
  CookingPot,
  Cross,
  Dog,
  Drama,
  Droplet,
  Droplets,
  FireExtinguisher,
  Footprints,
  Fuel,
  Gavel,
  GraduationCap,
  HeartPulse,
  Hospital,
  Hotel,
  House,
  HouseHeart,
  Landmark,
  Map,
  Microscope,
  PersonStanding,
  Rabbit,
  Recycle,
  Road,
  Rose,
  Rows4,
  School,
  Shield,
  Siren,
  Sprout,
  SquareParking,
  Store,
  Toilet,
  TrainFront,
  TramFront,
  Trash2,
  TreePalm,
  TreePine,
  Volleyball,
  Wallet,
  Wifi,
  Wind,
  Zap,
} from "lucide-react-native";
import {
  CULTURAL_INSTITUTION_DATA_SET,
  CULTURAL_INSTITUTION_DATA_SET_ID,
  ELEMENTARY_SCHOOL_DATA_SET,
  ELEMENTARY_SCHOOL_DATA_SET_ID,
  HIGH_SCHOOL_DATA_SET,
  HIGH_SCHOOL_DATA_SET_ID,
  HIGHER_EDUCATION_INSTITUTION_DATA_SET,
  HIGHER_EDUCATION_INSTITUTION_DATA_SET_ID,
  ODMORKO_DATA_SET,
  ODMORKO_DATA_SET_ID,
  PUBLIC_PLAYGROUND_DATA_SET,
  PUBLIC_PLAYGROUND_DATA_SET_ID,
  PUPIL_DORM_DATA_SET,
  PUPIL_DORM_DATA_SET_ID,
  SPORT_FACILITIES_DATA_SET,
  SPORT_FACILITIES_DATA_SET_ID,
  STUDENT_DORM_DATA_SET,
  STUDENT_DORM_DATA_SET_ID,
  STUDENT_RESTAURANT_DATA_SET,
  STUDENT_RESTAURANT_DATA_SET_ID,
} from "./dataSets";

export const CATEGORIES = [
  {
    id: "education",
    label: "Obrazovanje, kultura i sport",
    description: "Velit cursus magna fringilla natoque.",
    icon: GraduationCap,
    dataSets: [
      {
        label: "Studentski restoran",
        description: "Geolokacije studentskih restorana.",
        icon: CookingPot,
        datasetId: STUDENT_RESTAURANT_DATA_SET_ID,
        fetchUrl: STUDENT_RESTAURANT_DATA_SET.fetchUrl,
      },
      {
        label: "Studentsko naselje",
        description: "Geolokacije studentskih naselja.",
        icon: Hotel,
        datasetId: STUDENT_DORM_DATA_SET_ID,
        fetchUrl: STUDENT_DORM_DATA_SET.fetchUrl,
      },
      {
        label: "Kulturne ustanove",
        description: "Geolokacije kulturnih ustanova grada Zagreba.",
        icon: Drama,
        datasetId: CULTURAL_INSTITUTION_DATA_SET_ID,
        fetchUrl: CULTURAL_INSTITUTION_DATA_SET.fetchUrl,
      },

      {
        label: "Osnovne škole",
        description: "Geolokacija osnovnih škola na području grada Zagreba.",
        icon: School,
        datasetId: ELEMENTARY_SCHOOL_DATA_SET_ID,
        fetchUrl: ELEMENTARY_SCHOOL_DATA_SET.fetchUrl,
      },
      {
        label: "Odmorko",
        description:
          "Geolokacije besplatnih sportskih aktivnosti sa osnovnim kontakt informacijama.",
        icon: TreePalm,
        datasetId: ODMORKO_DATA_SET_ID,
        fetchUrl: ODMORKO_DATA_SET.fetchUrl,
      },
      {
        label: "Javna sportska igrališta",
        description: "Geolokacije javnih sportskih igrališta.",
        icon: Volleyball,
        datasetId: PUBLIC_PLAYGROUND_DATA_SET_ID,
        fetchUrl: PUBLIC_PLAYGROUND_DATA_SET.fetchUrl,
      },
      {
        label: "Visokoškolske ustanove",
        description:
          "Geolokacija, naziv visokoškolske ustanove, adresa, telefon, email, web.",
        icon: GraduationCap,
        datasetId: HIGHER_EDUCATION_INSTITUTION_DATA_SET_ID,
        fetchUrl: HIGHER_EDUCATION_INSTITUTION_DATA_SET.fetchUrl,
      },
      {
        label: "Sportski objekti",
        description: "Sportski objekati grada Zagreba.",
        icon: Volleyball,
        datasetId: SPORT_FACILITIES_DATA_SET_ID,
        fetchUrl: SPORT_FACILITIES_DATA_SET.fetchUrl,
      },
      {
        label: "Učenički domovi",
        description: "Geolokacije učeničkih domova u gradu Zagrebu.",
        icon: Building,
        datasetId: PUPIL_DORM_DATA_SET_ID,
        fetchUrl: PUPIL_DORM_DATA_SET.fetchUrl,
      },
      {
        label: "Srednje škole",
        description: "Srednje škole na području grada Zagreba.",
        icon: School,
        datasetId: HIGH_SCHOOL_DATA_SET_ID,
        fetchUrl: HIGH_SCHOOL_DATA_SET.fetchUrl,
      },
      {
        label: "Studentska naselja",
        description: "Studentska naselja na području grada Zagreba.",
        icon: Hotel,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/f4e333057dd24bdaa1cb033680dc1b96_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "economy",
    label: "Ekonomija i financije",
    description: "Quisque himenaeos tempor pharetra.",
    icon: Wallet,
    dataSets: [
      {
        label: "Kapitalna ulaganja 2024.",
        description:
          "Program radova kapitalnih ulaganja u objekte za društvene djelatnosti i u obnovu objekata oštećenih potresom u Gradu Zagrebu u 2024.",
        icon: Banknote,
        fetchUrl:
          "https://hub.arcgis.com/api/v3/datasets/f1871e3fd952438e99dcccd63d37e81b_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Kapitalna ulaganja 2023",
        description:
          "Program radova kapitalnih ulaganja u objekte za društvene djelatnosti i u obnovu objekata oštećenih potresom u Gradu Zagrebu u 2023.",
        icon: Banknote,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/e898521c36224b05b7bc0778632cd91d_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "public-sector",
    label: "Javni sektor i ustanove",
    description: "Aenean lobortis gravida finibus torquent accumsan.",
    icon: Landmark,
    dataSets: [
      {
        label: "Područni odsjeci",
        description: "Područni odsjeci komunalnog i prometnog redarstva.",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/PO/FeatureServer/replicafilescache/PO_-7066151195297644305.geojson",
      },
      {
        label: "Gradska trgovačka društva", // imported the fetched geojson to geojson.io and it doesn't work
        description:
          "Popis gradskih trgovačkih društva i podružnica Zagrebačkog Holdinga.",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_gradska_trgovacka_drustva/FeatureServer/replicafilescache/Geoportal_gradska_trgovacka_drustva_-4659600723509782750.geojson",
      },
      {
        label: "Druge javne ustanove",
        description:
          "Ustanove na području Grada Zagreba u nadležnosti Gradskog ureda za strategijsko planiranje i razvoj Grada.",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/29edc0bf8d604e759bc641fcfd9fec3a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Zdravstvene ustanove",
        description:
          "Geolokacija, naziv zdravstvene ustanove, adresa, telefon, fax, e-mail adresa, web stranica.",
        icon: Hospital,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/fcadb80196684cc09f8c8a76852a4aa9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Sjedišta gradskih četvrti",
        description: "Geolokacije sjedišta gradskih četvrti grada Zagreba.",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3cabb747881e44b39b561626dcd8b89a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Mjesna samouprava",
        description: "Geolokacije Mjesnih samouprava u gradu Zagrebu.",
        icon: Landmark,
        fetchUrl:
          " https://opendata.arcgis.com/api/v3/datasets/f8f6eaeae11b408eaadf20474809a1b3_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Crkve (Rimokatoličke Župe)",
        description:
          "Popis crkva na području Grada Zagreba sa podacima: naziv, adresa, telefon, fax, email, web, nadležan.",
        icon: Church,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/97dd39a14cdf4ce38bc3cb8ef484728a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Područni uredi",
        description:
          "Geolokacije područnih ureda Gradske uprave Grada Zagreba.",
        icon: BookMarked,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ab488f0b14b54acaaa0b29d35c9af626_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Visokoškolske ustanove",
        description:
          "Geolokacija, naziv visokoškolske ustanove, adresa, telefon, email, web.",
        icon: GraduationCap,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3f6954c6679f4b299f738304542a4837_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Tijela državne uprave",
        description: "Geolokacije tijela državne uprave.",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/5c237e0b5c84441e80a4c46ffcb30522_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "environment",
    label: "Okoliš",
    description:
      "Porttitor eleifend montes curabitur aptent risus ullamcorper.",
    icon: TreePine,
    dataSets: [
      {
        label: "Polupodzemni spremnik",
        description: "Lokacije polupodzemnih spremnika u Gradu Zagrebu.",
        icon: Trash2,
        fetchUrl:
          "https://data.zagreb.hr/dataset/a48f972b-9639-4719-9470-9d398049dbf9/resource/c04a1f0c-ac8a-4156-ba1f-707b1564d2f8/download/data.geojson",
      },
      {
        label: "Podzemni spremnik",
        description: "Lokacije podzemnih spremnika u Gradu Zagrebu.",
        icon: Trash2,
        fetchUrl:
          "https://data.zagreb.hr/dataset/1c02bf11-26a8-40dd-9a7d-0635dc065325/resource/980478d5-97a8-4b7d-8e92-f404bd0d3a24/download/data.geojson",
      },
      {
        label: "Pojilice sa pitkom vodom",
        description:
          "Lokacije pojilica s pitkom vodom na području Grada Zagreba.",
        icon: Droplet,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/pitka_voda/FeatureServer/replicafilescache/pitka_voda_-1391343346496493938.geojson",
      },
      {
        label: "Topografska osnova 2018. Vegetacija i vrste zemljišta", // Check at geojson.io
        description:
          "Podaci o tematskoj cjelini, vegetaciji / vrsti zemljišta.",
        icon: Map,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Topografska_osnova_2018_Vegetacija_i_vrste_zemlji%C5%A1ta/FeatureServer/replicafilescache/Topografska_osnova_2018_Vegetacija_i_vrste_zemlji%C5%A1ta_-351063888473117085.geojson",
      },
      {
        label: "Topografska osnova 2018. Vode", // Check at geojson.io
        description: "Podac o tematskoj cjelini, vode tip, izvorniku.",
        icon: Map,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Vodene_povrsine/FeatureServer/replicafilescache/Vodene_povrsine_-7160223387066445382.geojson",
      },
      {
        label: "Gradski vrt",
        description: "Popis gradskih vrtova Grada Zagreba.",
        icon: Rose,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/9858b1819a914c6ba0fedd0069f2d861_1/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Gradski vrt Point",
        description: "Lokacije gradskih vrtova Grada Zagreba.",
        icon: Rose,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3df175d45719402fa2526013a897e43e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Reciklažna dvorišta grada Zagreba",
        description: "Geolokacije reciklažnih dvorišta grada Zagreba.",
        icon: Recycle,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/249fa384ccf9481abf4fd2de73a822f5_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Kvaliteta zraka",
        description:
          "Gradske mjerne postaje za trajno praćenje kvalitete zraka gradske mreže grada Zagreba.",
        icon: Wind,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ed9898e63ec94770a8fb37713c36f8ca_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Brownfield površine",
        description: "Brownfield površine na području Grada Zagreba.",
        icon: Blocks,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/6a86bf7404fe4cbc88a15ac86856da19_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "agriculture",
    label: "Poljoprivreda, ribarstvo, šumarstvo i hrana",
    description: "Bibendum tristique congue maximus litora sem vulputate.",
    icon: Sprout,
    dataSets: [
      {
        label: "Granice dopuštenog držanja domaćih životinja",
        description: "Prikaz granice dopuštenog držanja domaćih životinja.",
        icon: Cat,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/7e93637c72ac4c278c69ad5260611c39_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Gradske tržnice",
        description: "Popis tržnica grada Zagreba s pripadajućim lokacijama.",
        icon: Store,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/55461536a14e46a69c81a0a67e56c53f_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Zajednička lovišta",
        description:
          "Popis zajedničkih lovišta sa podacima status, area ha i naziv lovišta.",
        icon: BowArrow,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/d87e492a5c994e04b47b1eaa7a06699d_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Program zaštite divljači",
        description: "Naziv područja i površina u ha.",
        icon: Rabbit,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/96a059b8909a4d70b81bbbae9d883a25_5/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "judiciary",
    label: "Pravosuđe, pravni sustav i javna sigurnost",
    description: "Pulvinar maecenas placerat faucibus per senectus ligula.",
    icon: Gavel,
    dataSets: [
      {
        label: "Nadzorne kamere",
        description: "Geolokacije nadzornih kamera.",
        icon: Cctv,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Policija",
        description:
          "Lokacija, naziv, adresa, telefon, web adresa, nadležnost.",
        icon: Siren,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/30d4d80d445a46d99f2f802814d70833_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Vatrogasci",
        description: "Geolokacije vatrogasaca grada Zagreba.",
        icon: FireExtinguisher,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/11ac9ebf240e4d2382ef7fd0b16ef9ac_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "traffic",
    label: "Promet",
    description: "Efficitur ridiculus iaculis parturient morbi netus aliquam.",
    icon: Road,
    dataSets: [
      {
        label: "Autobusna stajališta ZET",
        description: "Popis autobusnih stajališta ZET-a.",
        icon: Bus,
        fetchUrl:
          "https://data.zagreb.hr/dataset/cc7e45ae-4bad-4a07-bca2-25e82f1e082c/resource/3b12a182-afa3-4b07-833f-17d8bcf80ea9/download/data.geojson",
      },
      {
        label: "Željeznička stajališta HŽ",
        description:
          "Nazivi željezničkih stajališta s koordinatama, šiframa, stacionažom, opisom te vrstom.",
        icon: TrainFront,
        fetchUrl:
          "https://data.zagreb.hr/dataset/d0886c88-cdc8-43fa-ac94-67a8d128d0c2/resource/af3dbe3e-68fd-4862-bb6a-e39790f76dce/download/data.geojson",
      },
      {
        label: "Pješačka zona", // Multipolygon
        description: "Velit cursus magna fringilla natoque.",
        icon: Footprints,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3aabf37d1d8b497c970dcddc21ed9612_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Topografska osnova 2018. Promet",
        description: "Velit cursus magna fringilla natoque.",
        icon: Map,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Promet/FeatureServer/replicafilescache/Promet_5602162737547094296.geojson",
      },
      {
        label: "Zone rezerviranih parkirališnih mjesta",
        description: "Velit cursus magna fringilla natoque.",
        icon: SquareParking,
        fetchUrl:
          " https://opendata.arcgis.com/api/v3/datasets/04e3d79e90b04167a6efa8d277e5a482_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Javne garaže",
        description: "Velit cursus magna fringilla natoque.",
        icon: Rows4,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3e3484aca5284b16b4a1c41bd6594711_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Javna parkirališta za bicikle",
        description:
          "Geolokacije sa podacima o broju stalaka, broju bicikala te ostalim podacima.",
        icon: SquareParking,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/04012b0e4968447c978a6ee494d76495_2/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Sustav javnih bicikala",
        description:
          "Geolokacije sustava javnih bicikala sa sljedećim podacima: naziv, adresa, oznaka, lokacija, broj stalaka.",
        icon: Bike,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/95f8892f77eb45968b65469b9063f8b9_3/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Biciklističke staze", // Multiipolygon / MultiLineString / Point
        description: "Geolokacije biciklističkih staza grada Zagreba.",
        icon: Road,
        fetchUrl:
          " https://opendata.arcgis.com/api/v3/datasets/b10db2ae3a5b4e4b8dbee85a89d4b5b1_4/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Nadzorne kamere",
        description: "Geolokacije nadzornih kamera.",
        icon: Cctv,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Taxi stajališta",
        description:
          "Prikaz točne lokacije taxi stajališta u Zagrebu te nadležan gradski ured",
        icon: CarTaxiFront,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/c2a3ae87380b472d9b7e72f31cd296da_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Električne punionice",
        description:
          "Geolokacije električnih punionica na području Grada Zagreba sa brojem i tipom utičnice.",
        icon: Cable,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/4a4fc728724b4d319c27a9f647a0bb62_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Tramvajska stajališta ZET",
        description:
          "Geolokacije tramvajskih stajališta ZET sa sljedećim podacima: naziv, stajalište, linije, opis, smjer.",
        icon: TramFront,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/8f84d42e684141eaa7ceb26d9c9b8f5a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Benzinske postaje",
        description:
          "Lokacije svih benzinskih postaja na području Grada Zagreba.",
        icon: Fuel,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/05fa1c92366e415c8ce813b9e28da8c5_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "society",
    label: "Stanovništvo i društvo",
    description: "Convallis sapien molestie cubilia pretium orci hendrerit.",
    icon: PersonStanding,
    dataSets: [
      {
        label: "Javni zdenci",
        description: "Javni zdenci Grada Zagreba.",
        icon: Droplets,
        fetchUrl:
          "https://data.zagreb.hr/dataset/0d1c65b5-6e8f-4b6a-be90-cc9ecb6fa374/resource/2010797b-3e1e-4a43-9a5a-b1619722d2ac/download/data.geojson",
      },
      {
        label: "Domovi za djecu",
        description:
          "Popis domova za djecu bez odgovarajuće roditeljske skrbi sa kontakt podacima te ostalim informacijama.",
        icon: HouseHeart,
        fetchUrl:
          "https://data.zagreb.hr/dataset/65e1cb89-9cc7-43d2-a94d-3305e2917224/resource/e0f7e07d-73e1-4c9e-a81b-30369204b201/download/data.geojson",
      },
      {
        label: "Ustanove za osobe s invaliditetom",
        description: "Geolokacije ustanova za osobe s invaliditetom.",
        icon: Accessibility,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanove_TUR_i_OSI/FeatureServer/replicafilescache/Geoportal_ustanove_TUR_i_OSI_-7182187914465045449.geojson",
      },
      {
        label: "Zborna mjesta civilne zaštite Grada Zagreba",
        description: "Zborna mjesta civilne zaštite Grada Zagreba.",
        icon: Landmark,
        fetchUrl:
          "https://data.zagreb.hr/dataset/d736c146-6497-4915-894b-41bdf51267b0/resource/d30eb215-3ce2-48f8-88b2-6ffac82d46b5/download/zborna_mjesta_civilne_zatite_grada_zagreba-1.geojson",
      },
      {
        label: "Evakuacijske površine Grada Zagreba",
        description: "Evakuacijske površine Grada Zagreba.",
        icon: Map,
        fetchUrl:
          "https://data.zagreb.hr/dataset/b3c27d0f-b9b5-4140-b0cf-670e5cc1c19b/resource/479205c7-f75a-46a6-ac38-1499fcdca3d3/download/evakuacijske_povrsine.geojson",
      },
      {
        label: "Hrvatski zavod za socijalni rad",
        description:
          "Lokacije Hrvatskog zavoda za socijalni rad na području Grada Zagreba.",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_centar_za_socijalnu_skrb/FeatureServer/replicafilescache/Geoportal_centar_za_socijalnu_skrb_-2638481923376160763.geojson",
      },
      {
        label: "Nadležne institucije socijalne zaštite",
        description:
          "Nadležne institucije socijalne zaštite sa osnovnim kontakt informacijama te informacijom o nadležnosti.",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_nadlezna_institucija/FeatureServer/replicafilescache/Geoportal_nadlezna_institucija_2079182892719747966.geojson",
      },
      {
        label: "Ostale djelatnosti socijalne skrbi",
        description:
          "Geolokacije ostalih djelatnosti socijalne skrbi na području Grada Zagreba, sa kontakt i ostalim informacijama.",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ostale_djelatnosti_socijalne_skrbi/FeatureServer/replicafilescache/Geoportal_ostale_djelatnosti_socijalne_skrbi_-2781268371483281578.geojson",
      },
      {
        label: "Ustanove za branitelje",
        description:
          "Geolokacije ustanova za branitelje sa sljedećim podacima: naziv, vrsta, adresa, telefon, fax, nadležnost, gradska četvrt, osnivač.",
        icon: Shield,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanova_za_branitelje/FeatureServer/replicafilescache/Geoportal_ustanova_za_branitelje_-3924332151953522156.geojson",
      },
      {
        label: "Ustanove za beskućnike",
        description:
          "Geolokacije ustanova za beskućnike sa sljedećim podacima: naziv, vrsta, adresa, telefon, fax, email, web, kapacitet, podružnica, vlasništvo, nadležnost.",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_ustanova_za_beskucnike/FeatureServer/replicafilescache/Geoportal_ustanova_za_beskucnike_-235981892016937521.geojson",
      },
      {
        label: "Domovi za starije osobe",
        description:
          "Geolokacije domova za starije osobe na području Grada Zagreba sa kontakt podacima te ostalim informacijama (kapacitet, podruznica, nadležan).",
        icon: House,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_domovi_za_starije_osobe/FeatureServer/replicafilescache/Geoportal_domovi_za_starije_osobe_8327597670917525104.geojson",
      },
      {
        label: "Javni WC-i",
        description: "Podaci o nazivu, adresi, naplati, tko je nadležan.",
        icon: Toilet,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/javni_wc/FeatureServer/replicafilescache/javni_wc_-4667436749754589776.geojson",
      },
      {
        label: "Besplatna WiFi mreža",
        description: "Besplatna WiFi mreža na području Grada Zagreba.",
        icon: Wifi,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/59efced0d006469fa858ab07764735b0_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Dječji vrtići",
        description: "Popis dječjih vrtića na području Grada Zagreba.",
        icon: Balloon,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/49bb07d4efc34bd5bacc1d330dc28a07_0/downloads/data?format=fgdb&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Gradski vrt",
        description:
          "Popis gradskih vrtova Grada Zagreba sa geolokacijama, kontakt informacijama.",
        icon: Rose,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/9858b1819a914c6ba0fedd0069f2d861_1/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Sjedišta gradskih četvrti",
        description:
          "Geolokacije sjedišta gradskih četvrti s informacijama: naziv, adresa, telefon, radno vrijeme, područni ured.",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3cabb747881e44b39b561626dcd8b89a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Crkve (Rimokatoličke Župe)",
        description:
          "Popis crkva na području Grada Zagreba sa podacima: naziv, adresa, telefon, fax, email, web, nadležan.",
        icon: Church,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/97dd39a14cdf4ce38bc3cb8ef484728a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Gradske tržnice",
        description:
          "Naziv tržnice s adresom, kontakt podacima - telefon, email, web, te radno vrijeme nadležna podružnica ZGH-a.",
        icon: Store,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/55461536a14e46a69c81a0a67e56c53f_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Gradski vrt Point",
        description:
          "Prikazane X i Y koordinate, objectid, naziv gradskog vrta, adresa, gradska četvrt, telefon, kontakt, godina otvaranja, br.vr.parcela, br.korisnika, nadlezan gradski ured, izvor, izradio.",
        icon: Rose,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3df175d45719402fa2526013a897e43e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Kapitalna ulaganja 2023",
        description:
          "Kapitalna ulaganja sadrže: točnu lokaciju (X,Y koordinate), objectid,redni broj, vrstu objekta, adresu, opis radova, obveza, broj i Plan 2023. te br.ekon.klas.",
        icon: Banknote,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/e898521c36224b05b7bc0778632cd91d_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Javne površine za pse",
        description: "Lokacija sa opisnim podacima o javnim površinama za pse.",
        icon: Dog,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/78e1786ccdd544cfb8465b73051f22c9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Javna sportska igrališta",
        description: "Lokacije javnih igrališta.",
        icon: Volleyball,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/8e2abb22194b4595965d2056f31ff66e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Nadležna institucija",
        description:
          "Prikazane su X i Y koordinate, naziv institucije, adresa, telefon, fax, email, web, osnivac, nadlezni gradski ured, izvor, izradio.",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/81ae155978074414a306970b07fcde95_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Vjerske zajednice",
        description:
          "Geolokacija, naziv vjerske zajednice, adresa, telefon, email, web.",
        icon: Church,
        fetchUrl:
          "hhttps://opendata.arcgis.com/api/v3/datasets/26e9553b2fb34513ac2f8e4468d6b652_0/downloads/data?format=shp&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Vatrogasci",
        description:
          "Geolokacije vatrogasaca sa sljedećim podacima: naziv, vrsta, adresa, telefon, fax, web, nadležnost, gradska četvrt.",
        icon: FireExtinguisher,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/11ac9ebf240e4d2382ef7fd0b16ef9ac_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "health-care",
    label: "Zdravstvo",
    description: "Nascetur vehicula platea condimentum rutrum eros donec.",
    icon: HeartPulse,
    dataSets: [
      {
        label: "Zdravstvene ustanove",
        description:
          "geolokacija, naziv zdravstvene ustanove, adresa, telefon, fax, e-mail adresa, web stranica.",
        icon: Cross,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/fcadb80196684cc09f8c8a76852a4aa9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Domovi zdravlja",
        description:
          "Geolokacije domova zdravlja na području Grada Zagreba sa kontakt podacima i ostalim informacijama.",
        icon: Cross,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ddc03fc26c6145e7a4a84b35a41d68d1_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Ljekarne",
        description:
          "Geolokacije ljekarni na području Grada Zagreba sa pripadajućim kontakt informacijama.",
        icon: Cross,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/861f84594b034965b4c0ac96cf4083b0_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
  {
    id: "science",
    label: "Znanost i tehnologija",
    description: "Sollicitudin feugiat penatibus tincidunt mauris.",
    icon: Microscope,
    dataSets: [
      {
        label: "Telekomunikacijski razvodni ormarići",
        description:
          "Prikazani su podaci o tipu ormara, točnoj lokaciji, katastarskoj čestici i općini, operateru, tipu površine, datumu izdavanja suglasnosti i datumu rješenja.",
        icon: Zap,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/f72999526a9b4105b2af4f6f036a16fa_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
    ],
  },
];

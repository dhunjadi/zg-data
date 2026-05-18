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

export const CATEGORIES = [
  {
    id: "education",
    label: "Obrazovanje, kultura i sport",
    description: "Velit cursus magna fringilla natoque.",
    icon: GraduationCap,
    dataSets: [
      {
        label: "Studentski restoran",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
        fetchUrl:
          "https://data.zagreb.hr/dataset/8b4ab584-5b5a-4d70-9cf3-24897645ad6b/resource/e1caf1d1-ecdf-4d5c-8020-6798c45a188d/download/data.geojson",
      },
      {
        label: "Studentsko naselje",
        description: "Velit cursus magna fringilla natoque.",
        icon: Hotel,
        fetchUrl:
          "https://data.zagreb.hr/dataset/cd0afdae-2ef7-44f8-96bb-b96f119aa59b/resource/306ebc37-e4ee-4715-b9e1-8f67418e36e7/download/data.geojson",
      },
      {
        label: "Kulturne ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/83db22aeb39441ec84911ee94f26e746_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Osnovne škole",
        description: "Velit cursus magna fringilla natoque.",
        icon: School,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/08ff18612cea48a1b1bdb921a83974bc_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Odmorko",
        description: "Velit cursus magna fringilla natoque.",
        icon: TreePalm,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/0a671e4943634d42930ba9c0648a9ddb_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Kultura",
        description: "Velit cursus magna fringilla natoque.",
        icon: Drama,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/83db22aeb39441ec84911ee94f26e746_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Javna sportska igrališta",
        description: "Velit cursus magna fringilla natoque.",
        icon: Volleyball,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/8e2abb22194b4595965d2056f31ff66e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Visokoškolske ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: GraduationCap,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3f6954c6679f4b299f738304542a4837_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Sportski objekti",
        description: "Velit cursus magna fringilla natoque.",
        icon: Volleyball,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/c2dd015f24f84bdb9e367b7eafce6762_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Učenički domovi",
        description: "Velit cursus magna fringilla natoque.",
        icon: Building,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/25bdb57e84e443b38ecf47a912b5c2d1_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Srednje škole",
        description: "Velit cursus magna fringilla natoque.",
        icon: School,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/1095aeca947440bda0317834daa48c6a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Studentska naselja",
        description: "Velit cursus magna fringilla natoque.",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Banknote,
        fetchUrl:
          "https://hub.arcgis.com/api/v3/datasets/f1871e3fd952438e99dcccd63d37e81b_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Kapitalna ulaganja 2023",
        description: "Velit cursus magna fringilla natoque.",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/PO/FeatureServer/replicafilescache/PO_-7066151195297644305.geojson",
      },
      {
        label: "Gradska trgovačka društva", // imported the fetched geojson to geojson.io and it doesn't work
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Geoportal_gradska_trgovacka_drustva/FeatureServer/replicafilescache/Geoportal_gradska_trgovacka_drustva_-4659600723509782750.geojson",
      },
      {
        label: "Druge javne ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/29edc0bf8d604e759bc641fcfd9fec3a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Zdravstvene ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: Hospital,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/fcadb80196684cc09f8c8a76852a4aa9_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Sjedišta gradskih četvrti",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3cabb747881e44b39b561626dcd8b89a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Mjesna samouprava",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl:
          " https://opendata.arcgis.com/api/v3/datasets/f8f6eaeae11b408eaadf20474809a1b3_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Crkve (Rimokatoličke Župe)",
        description: "Velit cursus magna fringilla natoque.",
        icon: Church,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/97dd39a14cdf4ce38bc3cb8ef484728a_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Područni uredi",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ab488f0b14b54acaaa0b29d35c9af626_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Visokoškolske ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: GraduationCap,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3f6954c6679f4b299f738304542a4837_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Tijela državne uprave",
        description: "Velit cursus magna fringilla natoque.",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Trash2,
        fetchUrl:
          "https://data.zagreb.hr/dataset/a48f972b-9639-4719-9470-9d398049dbf9/resource/c04a1f0c-ac8a-4156-ba1f-707b1564d2f8/download/data.geojson",
      },
      {
        label: "Podzemni spremnik",
        description: "Velit cursus magna fringilla natoque.",
        icon: Trash2,
        fetchUrl:
          "https://data.zagreb.hr/dataset/1c02bf11-26a8-40dd-9a7d-0635dc065325/resource/980478d5-97a8-4b7d-8e92-f404bd0d3a24/download/data.geojson",
      },
      {
        label: "Pojilice sa pitkom vodom",
        description: "Velit cursus magna fringilla natoque.",
        icon: Droplet,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/pitka_voda/FeatureServer/replicafilescache/pitka_voda_-1391343346496493938.geojson",
      },
      {
        label: "Topografska osnova 2018. Vegetacija i vrste zemljišta", // Check at geojson.io
        description: "Velit cursus magna fringilla natoque.",
        icon: Map,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Topografska_osnova_2018_Vegetacija_i_vrste_zemlji%C5%A1ta/FeatureServer/replicafilescache/Topografska_osnova_2018_Vegetacija_i_vrste_zemlji%C5%A1ta_-351063888473117085.geojson",
      },
      {
        label: "Topografska osnova 2018. Vode", // Check at geojson.io
        description: "Velit cursus magna fringilla natoque.",
        icon: Map,
        fetchUrl:
          "https://services8.arcgis.com/Usi0jGQwMmBUpFjr/arcgis/rest/services/Vodene_povrsine/FeatureServer/replicafilescache/Vodene_povrsine_-7160223387066445382.geojson",
      },
      {
        label: "Gradski vrt",
        description: "Velit cursus magna fringilla natoque.",
        icon: Rose,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/9858b1819a914c6ba0fedd0069f2d861_1/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Gradski vrt Point",
        description: "Velit cursus magna fringilla natoque.",
        icon: Rose,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/3df175d45719402fa2526013a897e43e_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Reciklažna dvorišta grada Zagreba",
        description: "Velit cursus magna fringilla natoque.",
        icon: Recycle,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/249fa384ccf9481abf4fd2de73a822f5_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Kvaliteta zraka",
        description: "Velit cursus magna fringilla natoque.",
        icon: Wind,
        fetchUrl:
          "https://opendata.arcgis.com/api/v3/datasets/ed9898e63ec94770a8fb37713c36f8ca_0/downloads/data?format=geojson&spatialRefId=4326&where=1%3D1",
      },
      {
        label: "Brownfield površine",
        description: "Velit cursus magna fringilla natoque.",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Cat,
        fetchUrl: "",
      },
      {
        label: "Gradske tržnice",
        description: "Velit cursus magna fringilla natoque.",
        icon: Store,
        fetchUrl: "",
      },
      {
        label: "Zajednička lovišta",
        description: "Velit cursus magna fringilla natoque.",
        icon: BowArrow,
        fetchUrl: "",
      },
      {
        label: "Program zaštite divljači",
        description: "Velit cursus magna fringilla natoque.",
        icon: Rabbit,
        fetchUrl: "",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Cctv,
        fetchUrl: "",
      },
      {
        label: "Policija",
        description: "Velit cursus magna fringilla natoque.",
        icon: Siren,
        fetchUrl: "",
      },
      {
        label: "Vatrogasci",
        description: "Velit cursus magna fringilla natoque.",
        icon: FireExtinguisher,
        fetchUrl: "",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Bus,
        fetchUrl: "",
      },
      {
        label: "Željeznička stajališta HŽ",
        description: "Velit cursus magna fringilla natoque.",
        icon: TrainFront,
        fetchUrl: "",
      },
      {
        label: "Pješačka zona",
        description: "Velit cursus magna fringilla natoque.",
        icon: Footprints,
        fetchUrl: "",
      },
      {
        label: "Topografska osnova 2018. Promet",
        description: "Velit cursus magna fringilla natoque.",
        icon: Map,
        fetchUrl: "",
      },
      {
        label: "Zone rezerviranih parkirališnih mjesta",
        description: "Velit cursus magna fringilla natoque.",
        icon: SquareParking,
        fetchUrl: "",
      },
      {
        label: "Javne garaže",
        description: "Velit cursus magna fringilla natoque.",
        icon: Rows4,
        fetchUrl: "",
      },
      {
        label: "Javna parkirališta za bicikle",
        description: "Velit cursus magna fringilla natoque.",
        icon: SquareParking,
        fetchUrl: "",
      },
      {
        label: "Sustav javnih bicikala",
        description: "Velit cursus magna fringilla natoque.",
        icon: Bike,
        fetchUrl: "",
      },
      {
        label: "Biciklističke staze",
        description: "Velit cursus magna fringilla natoque.",
        icon: Road,
        fetchUrl: "",
      },
      {
        label: "Nadzorne kamere",
        description: "Velit cursus magna fringilla natoque.",
        icon: Cctv,
        fetchUrl: "",
      },
      {
        label: "Taxi stajališta",
        description: "Velit cursus magna fringilla natoque.",
        icon: CarTaxiFront,
        fetchUrl: "",
      },
      {
        label: "Električne punionice",
        description: "Velit cursus magna fringilla natoque.",
        icon: Cable,
        fetchUrl: "",
      },
      {
        label: "Tramvajska stajališta ZET",
        description: "Velit cursus magna fringilla natoque.",
        icon: TramFront,
        fetchUrl: "",
      },
      {
        label: "Benzinske postaje",
        description: "Velit cursus magna fringilla natoque.",
        icon: Fuel,
        fetchUrl: "",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Droplets,
        fetchUrl: "",
      },
      {
        label: "Domovi za djecu",
        description: "Velit cursus magna fringilla natoque.",
        icon: HouseHeart,
        fetchUrl: "",
      },
      {
        label: "Ustanove za osobe s invaliditetom",
        description: "Velit cursus magna fringilla natoque.",
        icon: Accessibility,
        fetchUrl: "",
      },
      {
        label: "Zborna mjesta civilne zaštite Grada Zagreba",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl: "",
      },
      {
        label: "Evakuacijske površine Grada Zagreba",
        description: "Velit cursus magna fringilla natoque.",
        icon: Map,
        fetchUrl: "",
      },
      {
        label: "Hrvatski zavod za socijalni rad",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl: "",
      },
      {
        label: "Nadležne institucije socijalne zaštite",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl: "",
      },
      {
        label: "Ostale djelatnosti socijalne skrbi",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl: "",
      },
      {
        label: "Ustanove za branitelje",
        description: "Velit cursus magna fringilla natoque.",
        icon: Shield,
        fetchUrl: "",
      },
      {
        label: "Ustanove za beskućnike",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl: "",
      },
      {
        label: "Domovi za starije osobe",
        description: "Velit cursus magna fringilla natoque.",
        icon: House,
        fetchUrl: "",
      },
      {
        label: "Javni WC-i",
        description: "Velit cursus magna fringilla natoque.",
        icon: Toilet,
        fetchUrl: "",
      },
      {
        label: "Besplatna WiFi mreža",
        description: "Velit cursus magna fringilla natoque.",
        icon: Wifi,
        fetchUrl: "",
      },
      {
        label: "Dječji vrtići",
        description: "Velit cursus magna fringilla natoque.",
        icon: Balloon,
        fetchUrl: "",
      },
      {
        label: "Gradski vrt",
        description: "Velit cursus magna fringilla natoque.",
        icon: Rose,
        fetchUrl: "",
      },
      {
        label: "Sjedišta gradskih četvrti",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl: "",
      },
      {
        label: "Gradske tržnice",
        description: "Velit cursus magna fringilla natoque.",
        icon: Store,
        fetchUrl: "",
      },
      {
        label: "Gradski vrt Point",
        description: "Velit cursus magna fringilla natoque.",
        icon: Rose,
        fetchUrl: "",
      },
      {
        label: "Kapitalna ulaganja 2023",
        description: "Velit cursus magna fringilla natoque.",
        icon: Banknote,
        fetchUrl: "",
      },
      {
        label: "Javne površine za pse",
        description: "Velit cursus magna fringilla natoque.",
        icon: Dog,
        fetchUrl: "",
      },
      {
        label: "Javna sportska igrališta",
        description: "Velit cursus magna fringilla natoque.",
        icon: Volleyball,
        fetchUrl: "",
      },
      {
        label: "Nadležna institucija",
        description: "Velit cursus magna fringilla natoque.",
        icon: Landmark,
        fetchUrl: "",
      },
      {
        label: "Vjerske zajednice",
        description: "Velit cursus magna fringilla natoque.",
        icon: Church,
        fetchUrl: "",
      },
      {
        label: "Vatrogasci",
        description: "Velit cursus magna fringilla natoque.",
        icon: FireExtinguisher,
        fetchUrl: "",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Cross,
        fetchUrl: "",
      },
      {
        label: "Domovi zdravlja",
        description: "Velit cursus magna fringilla natoque.",
        icon: Cross,
        fetchUrl: "",
      },
      {
        label: "Ljekarne",
        description: "Velit cursus magna fringilla natoque.",
        icon: Cross,
        fetchUrl: "",
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
        description: "Velit cursus magna fringilla natoque.",
        icon: Zap,
        fetchUrl: "",
      },
    ],
  },
];

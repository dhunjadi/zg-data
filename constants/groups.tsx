import {
  BookMarked,
  CookingPot,
  Gavel,
  GraduationCap,
  HeartPulse,
  Landmark,
  Microscope,
  PersonStanding,
  Road,
  Sprout,
  TreePine,
  Wallet,
} from "lucide-react-native";

export const GROUPS = [
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
      },
      {
        label: "Studentsko naselje",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Kulturne ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Osnovne škole",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Odmorko",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Kultura",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Javna sportska igrališta",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Visokoškolske ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Sportski objekti",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Učenički domovi",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Srednje škole",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Studentska naselja",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
    ],
  },
  {
    id: "economy",
    label: "Ekonomije i financije",
    description: "Quisque himenaeos tempor pharetra.",
    icon: Wallet,
    dataSets: [
      {
        label: "Kapitalna ulaganja 2024.",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Kapitalna ulaganja 2023",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
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
        icon: CookingPot,
      },
      {
        label: "Gradska trgovačka društva",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Druge javne ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Zdravstvene ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Sjedišta gradskih četvrti",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Mjesna samouprava",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Crkve (Rimokatoličke Župe)",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Područni uredi",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Visokoškolske ustanove",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Tijela državne uprave",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
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
        icon: CookingPot,
      },
      {
        label: "Podzemni spremnik",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Pojilice sa pitkom vodom",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Topografska osnova 2018. Vegetacija i vrste zemljišta",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Topografska osnova 2018. Vode",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Gradski vrt",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Gradski vrt Point",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Reciklažna dvorišta grada Zagreba",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Kvaliteta zraka",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Brownfield površine",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
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
        icon: CookingPot,
      },
      {
        label: "Gradske tržnice",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Zajednička lovišta",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Program zaštite divljači",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
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
        icon: CookingPot,
      },
      {
        label: "Policija",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Vatrogasci",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
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
        icon: CookingPot,
      },
      {
        label: "Željeznička stajališta HŽ",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Pješačka zona",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Topografska osnova 2018. Promet",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Zone rezerviranih parkirališnih mjesta",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Javne garaže",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Javna parkirališta za bicikle",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Sustav javnih bicikala",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Biciklističke staze",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Nadzorne kamere",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Taxi stajališta",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Električne punionice",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Tramvajska stajališta ZET",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Benzinske postaje",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
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
        icon: CookingPot,
      },
      {
        label: "Domovi za djecu",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Ustanove za osobe s invaliditetom",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Zborna mjesta civilne zaštite Grada Zagreba",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Evakuacijske površine Grada Zagreba",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Hrvatski zavod za socijalni rad",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Nadležne institucije socijalne zaštite",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Ostale djelatnosti socijalne skrbi",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Ustanove za branitelje",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Ustanove za beskućnike",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Domovi za starije osobe",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Javni WC-i",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Besplatna WiFi mreža",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Dječji vrtići",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Gradski vrt",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Sjedišta gradskih četvrti",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Gradske tržnice",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Gradski vrt Point",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Kapitalna ulaganja 2023",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Javne površine za pse",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Javna sportska igrališta",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Nadležna institucija",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Vjerske zajednice",
        description: "Velit cursus magna fringilla natoque.",
        icon: CookingPot,
      },
      {
        label: "Vatrogasci",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
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
        icon: CookingPot,
      },
      {
        label: "Domovi zdravlja",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
      },
      {
        label: "Ljekarne",
        description: "Velit cursus magna fringilla natoque.",
        icon: BookMarked,
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
        icon: CookingPot,
      },
    ],
  },
];

export type PointGeometry = {
  type: "Point";
  coordinates: [number, number];
};

export type PolygonGeometry = {
  type: "Polygon";
  coordinates: number[][][];
};

export type MultiPolygonGeometry = {
  type: "MultiPolygon";
  coordinates: number[][][][];
};
export type MultiLineStringGeometry = {
  type: "MultiLineString";
  coordinates: number[][][];
};

export type Geometry =
  | PointGeometry
  | PolygonGeometry
  | MultiPolygonGeometry
  | MultiLineStringGeometry;

export type BaseProperties = {
  naziv: string;
  adresa: string;
  nadlezan: string;
  web?: string;
  email?: string;
  OBJECTID?: number;
  OBJECTID_1?: number; // Check Roman catholic parishes geojson
  FID?: number; // Check Telecommunication Distribution Cabinets geojson
  GlobalID?: string;
};

export type Feature<TProperties> = {
  id: number;
  type: "Feature";
  properties: BaseProperties & TProperties;
  geometry: Geometry;
};

export type FeatureCollection<TProperties> = {
  type: "FeatureCollection";
  features: Feature<TProperties>[];
};

export type DataSetDetail = {
  label: string;
  value?: string | number | null;
};

export type DataSetDisplayData = {
  title: string;
  details: DataSetDetail[];
};

export type DataSetConfig<TProperties> = {
  id: string;
  fetchUrl: string;
  getDisplayData: (feature: Feature<TProperties>) => DataSetDisplayData;
};

export type AnyDataSetConfig = {
  id: string;
  fetchUrl: string;
  getDisplayData: (
    feature: Feature<Record<string, unknown>>,
  ) => DataSetDisplayData;
};

// Data specific properties

//EDUCATION
export type StudentRestaurant = {
  gc: string;
  izvor: string;
  izradio: string;
};

export type StudentDorm = {
  gc: string;
  izvor: string;
  izradio: string;
};

export type CulturalInstitution = {
  telefon: string;
  fax: string;
  radno_vrijeme: string;
  osnivac: string;
  energetski_razred: string;
  ustanove: string;
};

export type ElementarySchool = {
  telefon: string;
  fax: string;
  maticna_podrucna: string;
  smjenski_rad: string;
  produzeni_boravak: string;
  vrsta_odg_ust: string;
  vrsta_obr_prog: string;
  tip_obr_prog: string;
  br_uc: string;
  br_raz: string;
  god_izgradnje: string;
  dogradnja_nadogradnja: string;
  kuhinja: string;
  sport_dvor: string;
  sport_teren: string;
  gradjevina: string;
  oznaka: string;
  strani_jezik: string;
  klasicni_jezik: string;
  ENCERTIFIKAT: string;
  GRAD_CETVRT: string;
};

export type Odmorko = {
  lokacija: string;
  sport: string;
  tel: string;
  web: string;
  radno_vrijeme: string;
  grupa: string;
  izvor: string;
  izradio: string;
  Napomena: string;
  Prijava: string;
  Naziv: string;
  Geoportal: string;
  Školska_godina: string;
};

export type PublicPlayground = {
  rb: number;
  Gradska_cetvrt: string;
  Mjesni_odbor: string;
  lokacija: string;
  Vrsta_objekta: string;
  Izvor: string;
  Izradio: string;
};

export type HigherEducationInstitution = {
  vrsta: string;
  telefon: string;
  fax: string;
  osnivac: string;
  kampus: string;
  sjediste: string;
};

export type SportFacility = {
  telefon: string;
  fax: string;
  kategorija: string;
  upravljac: string;
  sportovi: string;
  objekt: string;
  opremljenost: string;
};

export type PupilDorm = {
  telefon: string;
  fax: string;
  vr_odg_us: string;
  vr_ob_pr: string;
  tip_ob_pr: string;
  Broj_koris: number;
  God_izgrad: string;
  sport_tere: string;
  gradevina: string;
  sport_dvor: string;
  poSTRUKTURI: string;
  GRAD_CETVRT: string;
};

export type HighSchool = {
  telefon: string;
  fax: string;
  vr_odg_us: string;
  vr_ob_pr: string;
  tip_ob_pr: string;
  smjenski_r: string;
  Broj_uceni: number;
  God_izgrad: string;
  Sport_tere: string;
  sport_dvor: string;
  gradevina: string;
  strani_jezik: string;
  klasicni_jezik: string;
  ENCERTIFIKAT: string;
  GRAD_CETVRT: string;
};

// ECONOMY
export type CapitalInvestment = {
  Rb: string;
  Vrsta_objekta: string;
  Br_ekon_klas: number;
  naziv: string;
  Adresa: string;
  Opis_radova: string;
  Obveza: string;
  Broj: number;
};

// PUBLIC SECTOR
export type OtherPublicInstitution = {
  naziv: string;
  adresa: string;
  telefon: string;
  email: string;
  web: string;
  izvor: string;
  izradio: string;
};

export type HealthCareInstitution = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
};

export type CityDistrictOffice = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  primanje_stranaka: string;
  sjediste: string;
};

export type LocalSelfGovernment = {
  MO: string;
  adresa_sjedista_MO: string;
  telefon: string;
  email: string;
  primanje_stranaka: string;
  web: string;
};

export type RomanCatholicParish = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  nadlezan: string;
};

export type LocalOffice = {
  naziv: string;
  adresa: string;
  telefon: string;
  web: string;
  radno_vrijeme: string;
};

export type StateAdministrationBody = {
  tdu: string;
  adresa: string;
};

// ENVIRONMENT
export type SemiUndergroundContainer = {
  adrese: string;
  status: string;
  JMS_IME: string;
  JMS_IME_1: string;
};

export type UndergroundContainer = {
  adrese: string;
  status: string;
  JMS_IME: string;
  Spremnik: string;
  JMS_IME_1: string;
};

export type DrinkingWaterFountain = {
  naziv: string;
  adresa: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

export type CityGarden = {
  naziv: string;
  adresa: string;
  grad_cetvrt: string;
  telefon: string;
  kontakt: string;
  godina_otvaranja: string;
  br_vr_parcela: number;
  br_korisnika: number;
  nadlezan: string;
  izvor: string;
  izradio: string;
  SHAPE_Length: number;
  SHAPE_Area: number;
};

export type RecyclingYard = {
  RBR: number;
  VRSTA: string;
  NAZIV: string;
  ADRESA_LOK: string;
  NAZIV_PUNI: string;
  ADRESA: string;
  TELEFON: string;
  E_MAIL: string;
  FAX: string;
  WEB: string;
  RADNO_VRIJ: string;
  PAPIR: string;
  PLASTIKA: string;
  STAKLO: string;
  METALNA_AM: string;
  STARE_BATE?: string;
  BIOOTPAD: string;
  OTPAD_GUME: string;
  OTPAD_MU: string;
  GRADJ_OTPA: string;
  ELEK_OTPAD: string;
  OSTALO: string;
  NAPOMENA: string;
};

export type AirQuality = {
  naziv: string;
  opis_lokac: string;
  lokacija: string;
  tip_podrucja: string;
  tip_postaje: string;
  visina_m: string;
  dimenzija: string;
  mjerne_tvari: string;
  odgovorna_inst: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

export type BrownFieldArea = {
  Naziv: string;
  Oznaka_planske_namjene: string;
  Obveza_izrade_UPUa: string;
  Nepokretna_kulturna_dobra: string;
  Zastićeni_dijelovi_priroda: string;
  Poveznica: string;
  Obveza_provedbe_AUNa: string;
  Prethodno_koristenje: string;
  Privremeno_korištenje: string;
  Vlasništvo: string;
  Oznaka_na_karti: number;
  Status_UPUa: null;
  SHAPE_Length: number;
  SHAPE_Area: number;
};

// AGRICULTURE
export type DometicAnimalKeepingBoundry = {
  LAYER: string;
  Nadlezan: string;
  Izvor: string;
  Izradio: string;
  SHAPE_Length: number;
  SHAPE_Area: number;
};

export type CityMarket = {
  naziv: string;
  adresa: string;
  telefon: string;
  email: string;
  web: string;
  radno_vrijeme: string;
  nadlezan: string;
};

export type SharedHuntingGround = {
  STATUS: string;
  Area_ha: number;
  Naziv: string;
};

export type WildlifeProtectionProgram = {
  Naziv: string;
  Povrsina_ha: number;
  SHAPE_Length: number;
  SHAPE_Area: number;
};

// JUDICIARY
export type PoliceStation = {
  naziv: string;
  adresa: string;
  telefon: string;
  web: string;
  nadlezan: string;
};

export type Firefighter = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
  grad_cetv: string;
};

// TRAFFIC
export type ZetBusStop = {
  Opis: string;
  Linije: string;
  Displej: string;
  Nadstresnica: string;
  Naziv_stajališta: string;
};

export type HzRailwayStop = {
  Opis: string;
  Naziv: string;
  Peron: string;
  Sifra: number;
  Vrsta: string;
  Stacionaza: string;
};

export type ReservedParkingZone = {
  Naziv: string;
  Opis: string;
};

export type PublicGarage = {
  naziv: string;
  adresa: string;
  telefon: string;
  kapacitet: number;
  invalidska_mj: number;
  punionica_za_EV: number;
  mj_za_hibrid_voz: number;
  parkiraliste_za_bic: number;
  obiteljska_mj: number;
  br_etaza: number;
  uk_povr_m2: number;
  preuzete_garaze_god: string;
  korisnici: string;
  vlasnistvo: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

export type PublicBicycleParking = {
  vrsta: string;
  naziv: string;
  lokacija: string;
  broj_stalaka: number;
  broj_bicikala: number;
  godina_postavljanja: number;
  MJESNI_ODBOR: string;
  GRADSKA_CETVRT: string;
};

export type PublicBicycleSystem = {
  naziv: string;
  lokacija: string;
  broj_stalaka: number;
};

export type SurveillanceCamera = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  osnivac: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

export type TaxiStand = {
  lokacija: string;
  nadlezan: string;
};

export type ElectricChargingStation = {
  NAZIV: string;
  ADRESA: string;
  BROJ_UTICNICA: number;
  TIP_UTICNICE: string;
};

export type ZetTramStop = {
  Naziv_stajališta: string;
  Linije: string;
  Opis: string;
  Napomena: string;
};

export type GasStation = {
  NAZIV: string;
  ADRESA: string;
};

// SOCIETY
export type PublicWell = {
  ki_vrsta: string;
  lokacija: string;
  naziv_gc: string;
  odrzava_ki: string;
  tip_zdenca: string;
  upravitelj: string;
  status_odrz: string;
  aktivan_da_ne: string;
  napomena_teren: string;
};

export type ChildrenHome = {
  gc: string;
  web: string;
  email: string;
  izvor: string;
  naziv: string;
  vrsta: string;
  adresa: string;
  izradio: string;
  nadlezan: string;
  podruznica: string;
};

export type Disabilityinstitution = {
  naziv: string;
  vrsta: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  podruznica: string;
  nadlezan: string;
};

export type CivilProtectionAssemblyPoint = {
  gradska_ce: string;
  zboriste: string;
};

export type EvacuationArea = {
  NAZIV: string;
  Tip: string;
  G_cetvrt: string;
  Povrsina_ha: number;
};

export type CroatianInstituteForSocialWork = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  podr_nadleznosti: string;
  osnivac: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
  IME_GC: string;
};

export type SocialProtectionInstitution = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  osnivac: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

export type OtherSocialWelfareActivitiy = {
  naziv: string;
  vrsta: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  kapacitet: string;
  podruznica: string;
  osnivac: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
  gradska_cetvrt: string;
};

export type VeteransInstitution = {
  NAZIV: string;
  VRSTA: string;
  ADRESA: string;
  TELEFON: string;
  FAX: string;
  EMAIL: string;
  WEB: string;
  NADLEZAN: string;
  IZVOR: string;
  IZRADIO: string;
  gradska_cetvrt: string;
  OSNIVAC: string;
};

export type HomelessInstitution = {
  naziv: string;
  vrsta: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  kapacitet: number;
  podruznica: string;
  vlasnistvo: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

export type ElderlyHome = {
  naziv: string;
  vrsta: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  kapacitet: number;
  podruznica: string;
  nadlezan: string;
  gradska_cetvrt: string;
  osnivac: string;
};

export type PublicToilet = {
  naziv: string;
  adresa: string;
  naplata: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

export type FreeWifiNetwork = {
  Lokacija: string;
  godina: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
  IME_GC: string;
  Shape_Leng: number;
};

export type Kindergarten = {
  naziv: string;
  adresa: string;
  grad_cetvr: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  vr_vrtica: string;
  tip_vrtica: string;
  nadlezan: string;
  gradjevina: string;
  kuhinja: string;
  dvorana: string;
  vdi: string;
  strani_jez: string;
};

export type PublicDogArea = {
  Rb: number;
  Lokacija: string;
  Nadlezan: string;
  Izvor: string;
  Izradio: string;
  Vrsta: string;
  RbGC: number;
  GC: string;
};

export type CompetentInstitution = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  osnivac: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

export type ReligiousCommunity = {
  naziv: string;
  adresa: string;
  telefon: string;
  email: string;
  web: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

// HEALTHCARE
export type HealthcareInstitution = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
};

export type PrimaryHealthCenter = {
  Domovi_zdravlja_naziv: string;
  Domovi_zdravlja_adresa: string;
  Domovi_zdravlja_telefon: string;
  Domovi_zdravlja_web: string;
  Domovi_zdravlja_nadlezan: string;
};

export type Pharmacy = {
  naziv: string;
  adresa: string;
  telefon: string;
  email: string;
  web: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
};

// SCIENCE
export type TelecommunicationDistributionCabinet = {
  Klasa_ZDG: string;
  Klasa_GRAD: string;
  Operater: string;
  Tip_ormara: string;
  Dužina: number;
  Širina: number;
  Visina: number;
  Površina: number;
  Adresa: string;
  Katastarska_čestica: string;
  Katastarska_općina: string;
  Datum_izdavanja_suglasnosti: string;
  Datum_rješenja: string;
  Tip_površine: string;
  Longitude: number;
  Latitude: number;
};

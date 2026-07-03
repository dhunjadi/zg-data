export type PointGeometry = {
  type: "Point";
  coordinates: [number, number];
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

export type DataSetDisplay = {
  title: string;
  details: DataSetDetail[];
};

export type DataSetConfig<TProperties> = {
  id: string;
  fetchUrl: string;
  getDisplayData: (feature: Feature<TProperties>) => DataSetDisplay;
};

export type AnyDataSetConfig = {
  id: string;
  fetchUrl: string;
  getDisplayData: (feature: Feature<Record<string, unknown>>) => DataSetDisplay;
};

// Data specific properties

export type StudentRestaurantProperties = {
  gc: string;
  izvor: string;
  izradio: string;
};

export type StudentDormProperties = {
  gc: string;
  izvor: string;
  izradio: string;
};

export type CulturalInstitutionProperties = {
  telefon: string;
  fax: string;
  radno_vrijeme: string;
  osnivac: string;
  energetski_razred: string;
  ustanove: string;
};

export type ElementarySchoolProperties = {
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

export type OdmorkoProperties = {
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

export type PublicPlaygroundProperties = {
  rb: number;
  Gradska_cetvrt: string;
  Mjesni_odbor: string;
  lokacija: string;
  Vrsta_objekta: string;
  Izvor: string;
  Izradio: string;
};

export type HigherEducationInstitutionProperties = {
  vrsta: string;
  telefon: string;
  fax: string;
  osnivac: string;
  kampus: string;
  sjediste: string;
};

export type SportFacilitiesProperties = {
  telefon: string;
  fax: string;
  kategorija: string;
  upravljac: string;
  sportovi: string;
  objekt: string;
  opremljenost: string;
};

export type PupilDormProperties = {
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

export type HighSchoolProperties = {
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

export type CapitalInvestmentProperties = {
  Rb: string;
  Vrsta_objekta: string;
  Br_ekon_klas: number;
  naziv: string;
  Adresa: string;
  Opis_radova: string;
  Obveza: string;
  Broj: number;
};

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

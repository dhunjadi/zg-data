type Geometry = {
  type: "Point";
  coordinates: [number, number];
};

export type BaseProperties = {
  OBJECTID?: number;
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
  label: string;
  fetchUrl: string;
  getDisplayData: (feature: Feature<TProperties>) => DataSetDisplay;
};

export type AnyDataSetConfig = {
  id: string;
  label: string;
  fetchUrl: string;
  getDisplayData: (feature: Feature<Record<string, unknown>>) => DataSetDisplay;
};

// Data specific properties

export type StudentRestaurantProperties = {
  gc: string;
  web: string;
  email: string;
  izvor: string;
  naziv: string;
  adresa: string;
  izradio: string;
  nadlezan: string;
};

export type StudentRestaurantCollection =
  FeatureCollection<StudentRestaurantProperties>;

export type StudentDormProperties = {
  gc: string;
  web: string;
  email: null;
  izvor: string;
  naziv: string;
  adresa: string;
  izradio: string;
  GlobalID: string;
  nadlezan: string;
};

export type StudentDormCollection = FeatureCollection<StudentDormProperties>;

export type CulturalInstitutionProperties = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  radno_vrijeme: string;
  osnivac: string;
  energetski_razred: string;
  nadlezan: string;
  ustanove: string;
};

export type CulturalInstitutionCollection =
  FeatureCollection<CulturalInstitutionProperties>;

export type ElementarySchoolProperties = {
  naziv: string;
  adresa: string;
  telefon: string;
  fax: string;
  email: string;
  web: string;
  maticna_podrucna: string;
  smjenski_rad: string;
  produzeni_boravak: string;
  vrsta_odg_ust: string;
  vrsta_obr_prog: string;
  tip_obr_prog: string;
  nadlezan: string;
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

export type ElementarySchoolCollection =
  FeatureCollection<ElementarySchoolProperties>;

export type OdmorkoProperties = {
  lokacija: string;
  sport: string;
  adresa: string;
  tel: string;
  web: string;
  radno_vrijeme: string;
  grupa: string;
  nadlezan: string;
  izvor: string;
  izradio: string;
  Napomena: string;
  Prijava: string;
  Naziv: string;
  Geoportal: string;
  Školska_godina: string;
};

export type OdmorkoCollection = FeatureCollection<OdmorkoProperties>;

export type PublicPlaygroundProperties = {
  rb: number;
  Gradska_cetvrt: string;
  Mjesni_odbor: string;
  lokacija: string;
  Vrsta_objekta: string;
  Izvor: string;
  Izradio: string;
};

export type PublicPlaygroundCollection = FeatureCollection<OdmorkoProperties>;

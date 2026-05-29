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
  getDisplayData: (
    feature: Feature<Record<string, unknown>>,
  ) => DataSetDisplay;
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

export type StudentRestaurantCollection =
  FeatureCollection<StudentRestaurantProperties>;

export type CulturalInstitutionCollection =
  FeatureCollection<CulturalInstitutionProperties>;

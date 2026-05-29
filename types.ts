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

export type DataSetConfig<TProperties> = {
  id: string;
  label: string;
  fetchUrl: string;
  getTitle: (properties: BaseProperties & TProperties) => string;
  getDetails: (properties: BaseProperties & TProperties) => DataSetDetail[];
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

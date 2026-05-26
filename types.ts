type Geometry = {
  type: "Point";
  coordinates: [number, number];
};

type Properties = {
  OBJECTID: number;
};

export type Feature = {
  id: number;
  type: "Feature";
  properties: Properties;
  geometry: Geometry;
};

export type Item = {
  id: number;
  type: "Feature" | "FeatureCollection";
  features: Feature[];
};

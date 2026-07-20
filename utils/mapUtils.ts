import {
  MultiLineStringGeometry,
  MultiPolygonGeometry,
  PolygonGeometry,
} from "@/types";
import { LatLng } from "react-native-maps";

export const polygonToCoordinates = (geometry: PolygonGeometry): LatLng[] => {
  return geometry.coordinates[0].map(([lng, lat]) => ({
    latitude: lat,
    longitude: lng,
  }));
};

export const multiPolygonToCoordinates = (
  geometry: MultiPolygonGeometry,
): LatLng[][] => {
  return geometry.coordinates.map((polygon) => {
    const outerRing = polygon[0];

    return outerRing.map(([lng, lat]) => ({
      latitude: lat,
      longitude: lng,
    }));
  });
};

export const multiLineToCoordinates = (
  geometry: MultiLineStringGeometry,
): LatLng[][] => {
  return geometry.coordinates.map((line) =>
    line.map(([lng, lat]) => ({
      latitude: lat,
      longitude: lng,
    })),
  );
};

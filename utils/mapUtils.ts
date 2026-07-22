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

type LinkType = "email" | "phone" | "url" | "text";

const PHONE_PREFIXES = ["01", "091", "095", "097", "098", "099"];

export const detectLinkType = (value: string): LinkType => {
  const trimmed = value.trim();

  if (trimmed.includes("@")) return "email";
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("www.")
  ) {
    return "url";
  }
  if (PHONE_PREFIXES.some((prefix) => trimmed.startsWith(prefix))) {
    return "phone";
  }

  return "text";
};

export const getURLLink = (value: string): string => {
  const trimmed = value.trim();
  const type = detectLinkType(trimmed);

  switch (type) {
    case "email":
      return `mailto:${trimmed}`;
    case "phone":
      return `tel:${trimmed.replace(/[^\d+]/g, "")}`;
    case "url":
      return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
    default:
      return trimmed;
  }
};

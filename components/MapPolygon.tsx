import {
  DEFAULT_FILL_DARK,
  DEFAULT_FILL_LIGHT,
  SELECTED_FILL_DARK,
  SELECTED_FILL_LIGHT,
  STROKE_COLOR_DARK,
  STROKE_COLOR_LIGHT,
} from "@/constants/mapConstants";
import { Feature, PolygonGeometry } from "@/types";
import { polygonToCoordinates } from "@/utils/mapUtils";
import React from "react";
import { useColorScheme } from "react-native";
import { Polygon } from "react-native-maps";

type MapPolygonProps = {
  feature: Feature<Record<string, unknown>>;
  isSelected: boolean;
  onPress: (feature: Feature<Record<string, unknown>>) => void;
};

const MapPolygon = React.memo(
  ({ feature, isSelected, onPress }: MapPolygonProps) => {
    const colorScheme = useColorScheme();
    const isDarkTheme = colorScheme === "dark";

    const coordinates = polygonToCoordinates(
      feature.geometry as PolygonGeometry,
    );

    const fillColor = isSelected
      ? isDarkTheme
        ? SELECTED_FILL_DARK
        : SELECTED_FILL_LIGHT
      : isDarkTheme
        ? DEFAULT_FILL_DARK
        : DEFAULT_FILL_LIGHT;

    return (
      <Polygon
        coordinates={coordinates}
        fillColor={fillColor}
        strokeColor={isDarkTheme ? STROKE_COLOR_DARK : STROKE_COLOR_LIGHT}
        strokeWidth={2}
        tappable
        onPress={() => onPress(feature)}
      />
    );
  },
);

MapPolygon.displayName = "MapPolygon";

export default MapPolygon;

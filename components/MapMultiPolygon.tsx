import {
  DEFAULT_FILL_DARK,
  DEFAULT_FILL_LIGHT,
  SELECTED_FILL_DARK,
  SELECTED_FILL_LIGHT,
  STROKE_COLOR_DARK,
  STROKE_COLOR_LIGHT,
} from "@/constants/mapConstants";
import { Feature, MultiPolygonGeometry } from "@/types";
import { multiPolygonToCoordinates } from "@/utils/mapUtils";
import React from "react";
import { useColorScheme } from "react-native";
import { Polygon } from "react-native-maps";

type MapMultiPolygonProps = {
  feature: Feature<Record<string, unknown>>;
  isSelected: boolean;
  onPress: (feature: Feature<Record<string, unknown>>) => void;
};

const MapMultiPolygon = React.memo(
  ({ feature, isSelected, onPress }: MapMultiPolygonProps) => {
    const colorScheme = useColorScheme();
    const isDarkTheme = colorScheme === "dark";

    const polygons = multiPolygonToCoordinates(
      feature.geometry as MultiPolygonGeometry,
    );

    // Hardcoded for now
    const isInnerZone =
      feature.properties.Naziv === "I. ZONA" ||
      feature.properties.Naziv === "II. ZONA";

    const fillColor = isSelected
      ? isDarkTheme
        ? SELECTED_FILL_DARK
        : SELECTED_FILL_LIGHT
      : isDarkTheme
        ? DEFAULT_FILL_DARK
        : DEFAULT_FILL_LIGHT;

    return (
      <>
        {polygons.map((coordinates, index) => (
          <Polygon
            key={index}
            coordinates={coordinates}
            fillColor={fillColor}
            strokeColor={isDarkTheme ? STROKE_COLOR_DARK : STROKE_COLOR_LIGHT}
            strokeWidth={2}
            tappable
            zIndex={isInnerZone ? 20 : 10}
            onPress={() => onPress(feature)}
          />
        ))}
      </>
    );
  },
);

MapMultiPolygon.displayName = "MapMultiPolygon";

export default MapMultiPolygon;

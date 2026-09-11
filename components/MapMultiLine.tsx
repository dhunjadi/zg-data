import {
  SELECTED_FILL_DARK,
  SELECTED_FILL_LIGHT,
  STROKE_COLOR_DARK,
  STROKE_COLOR_LIGHT,
} from "@/constants/mapConstants";
import { Feature, MultiLineStringGeometry } from "@/types";
import { multiLineToCoordinates } from "@/utils/mapUtils";
import React from "react";
import { useColorScheme } from "react-native";
import { Polyline } from "react-native-maps";

interface MapMultiLineProps {
  feature: Feature<Record<string, unknown>>;
}

const MapMultiLine = React.memo(({ feature }: MapMultiLineProps) => {
  const colorScheme = useColorScheme();
  const isDarkTheme = colorScheme === "dark";

  const lines = multiLineToCoordinates(
    feature.geometry as MultiLineStringGeometry,
  );

  return (
    <>
      {lines.map((coordinates, index) => (
        <Polyline
          key={index}
          coordinates={coordinates}
          fillColor={isDarkTheme ? SELECTED_FILL_DARK : SELECTED_FILL_LIGHT}
          strokeColor={isDarkTheme ? STROKE_COLOR_DARK : STROKE_COLOR_LIGHT}
          strokeWidth={2}
        />
      ))}
    </>
  );
});

MapMultiLine.displayName = "MapMultiLine";

export default MapMultiLine;

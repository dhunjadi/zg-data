import {
  DEFAULT_FILL,
  SELECTED_FILL,
  STROKE_COLOR,
} from "@/constants/mapConstants";
import { Feature, PolygonGeometry } from "@/types";
import { polygonToCoordinates } from "@/utils/mapUtils";
import React from "react";
import { Polygon } from "react-native-maps";

type MapPolygonProps = {
  feature: Feature<Record<string, unknown>>;
  isSelected: boolean;
  onPress: (feature: Feature<Record<string, unknown>>) => void;
};

const MapPolygon = React.memo(
  ({ feature, isSelected, onPress }: MapPolygonProps) => {
    const coordinates = polygonToCoordinates(
      feature.geometry as PolygonGeometry,
    );

    return (
      <Polygon
        coordinates={coordinates}
        fillColor={isSelected ? SELECTED_FILL : DEFAULT_FILL}
        strokeColor={STROKE_COLOR}
        strokeWidth={2}
        tappable
        onPress={() => onPress(feature)}
      />
    );
  },
);

MapPolygon.displayName = "MapPolygon";

export default MapPolygon;

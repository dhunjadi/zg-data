import {
  DEFAULT_FILL,
  SELECTED_FILL,
  STROKE_COLOR,
} from "@/constants/mapConstants";
import { Feature, MultiPolygonGeometry } from "@/types";
import { multiPolygonToCoordinates } from "@/utils/mapUtils";
import React from "react";
import { Polygon } from "react-native-maps";

type MapMultiPolygonProps = {
  feature: Feature<Record<string, unknown>>;
  isSelected: boolean;
  onPress: (feature: Feature<Record<string, unknown>>) => void;
};

const MapMultiPolygon = React.memo(
  ({ feature, isSelected, onPress }: MapMultiPolygonProps) => {
    const polygons = multiPolygonToCoordinates(
      feature.geometry as MultiPolygonGeometry,
    );

    // Hardcoded for now
    const isInnerZone =
      feature.properties.Naziv === "I. ZONA" ||
      feature.properties.Naziv === "II. ZONA";

    return (
      <>
        {polygons.map((coordinates, index) => (
          <Polygon
            key={index}
            coordinates={coordinates}
            fillColor={isSelected ? SELECTED_FILL : DEFAULT_FILL}
            strokeColor={STROKE_COLOR}
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

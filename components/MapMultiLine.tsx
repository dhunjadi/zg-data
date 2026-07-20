import { SELECTED_FILL, STROKE_COLOR } from "@/constants/mapConstants";
import { Feature, MultiLineStringGeometry } from "@/types";
import { multiLineToCoordinates } from "@/utils/mapUtils";
import React from "react";
import { Polyline } from "react-native-maps";

interface MapMultiLineProps {
  feature: Feature<Record<string, unknown>>;
}

const MapMultiLine = React.memo(({ feature }: MapMultiLineProps) => {
  const lines = multiLineToCoordinates(
    feature.geometry as MultiLineStringGeometry,
  );

  return (
    <>
      {lines.map((coordinates, index) => (
        <Polyline
          key={index}
          coordinates={coordinates}
          fillColor={SELECTED_FILL}
          strokeColor={STROKE_COLOR}
          strokeWidth={2}
        />
      ))}
    </>
  );
});

MapMultiLine.displayName = "MapMultiLine";

export default MapMultiLine;

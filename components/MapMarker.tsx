import { Feature } from "@/types";
import React from "react";
import { Marker } from "react-native-maps";

type MapMarkerProps = {
  feature: Feature<Record<string, unknown>>;
  onPress: (feature: Feature<Record<string, unknown>>) => void;
};

const MapMarker = React.memo(({ feature, onPress }: MapMarkerProps) => {
  const [lng, lat] = feature.geometry.coordinates as [number, number];

  return (
    <Marker
      coordinate={{ latitude: lat, longitude: lng }}
      onPress={() => onPress(feature)}
    />
  );
});

MapMarker.displayName = "MapMarker";

export default MapMarker;

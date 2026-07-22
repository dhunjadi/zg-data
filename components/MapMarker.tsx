import { Feature } from "@/types";
import React from "react";
import { Image } from "react-native";
import { Marker } from "react-native-maps";
import PinSelected from "../assets/images/pin-selected.png";
import PinDefault from "../assets/images/pin.png";

type MapMarkerProps = {
  feature: Feature<Record<string, unknown>>;
  isSelected: boolean;
  onPress: (feature: Feature<Record<string, unknown>>) => void;
};

const MapMarker = React.memo(
  ({ feature, isSelected, onPress }: MapMarkerProps) => {
    const [lng, lat] = feature.geometry.coordinates as [number, number];

    return (
      <Marker
        coordinate={{ latitude: lat, longitude: lng }}
        onPress={() => onPress(feature)}
        anchor={{ x: 0.5, y: 1 }}
      >
        <Image
          source={isSelected ? PinSelected : PinDefault}
          style={{
            width: 48,
            height: 48,
          }}
          resizeMode="contain"
        />
      </Marker>
    );
  },
);

MapMarker.displayName = "MapMarker";

export default MapMarker;

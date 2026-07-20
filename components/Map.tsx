import { Feature } from "@/types";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import MapMarker from "./MapMarker";
import MapMultiLine from "./MapMultiLine";
import MapMultiPolygon from "./MapMultiPolygon";
import MapPolygon from "./MapPolygon";

const INITIAL_REGION: Region = {
  latitude: 45.815399,
  longitude: 15.966568,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

type MapProps = {
  visibleFeatures: Feature<Record<string, unknown>>[];
  selectedFeature: Feature<Record<string, unknown>> | null;
  onFeatureSelect: (feature: Feature<Record<string, unknown>>) => void;
  onRegionChange: (region: Region) => void;
};

const Map = ({
  visibleFeatures,
  selectedFeature,
  onFeatureSelect,
  onRegionChange,
}: MapProps) => {
  const mapViewRef = useRef<MapView | null>(null);

  return (
    <MapView
      ref={mapViewRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={INITIAL_REGION}
      onRegionChangeComplete={onRegionChange}
      onMapReady={async () => {
        const boundaries = await mapViewRef.current?.getMapBoundaries();
        if (!boundaries) return;

        const { northEast, southWest } = boundaries;

        onRegionChange({
          latitude: (northEast.latitude + southWest.latitude) / 2,
          longitude: (northEast.longitude + southWest.longitude) / 2,
          latitudeDelta: northEast.latitude - southWest.latitude,
          longitudeDelta: northEast.longitude - southWest.longitude,
        });
      }}
    >
      {visibleFeatures.map((feature) => {
        const key =
          (feature.properties.OBJECTID ||
            feature.properties.OBJECTID_1 ||
            feature.properties.FID) ??
          feature.id;

        const isSelected = selectedFeature === feature;

        if (feature.geometry.type === "Point") {
          return (
            <MapMarker key={key} feature={feature} onPress={onFeatureSelect} />
          );
        }

        if (feature.geometry.type === "Polygon") {
          return (
            <MapPolygon
              key={key}
              feature={feature}
              isSelected={isSelected}
              onPress={onFeatureSelect}
            />
          );
        }

        if (feature.geometry.type === "MultiPolygon") {
          return (
            <MapMultiPolygon
              key={key}
              feature={feature}
              isSelected={isSelected}
              onPress={onFeatureSelect}
            />
          );
        }

        if (feature.geometry.type === "MultiLineString") {
          return <MapMultiLine key={key} feature={feature} />;
        }

        return null;
      })}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

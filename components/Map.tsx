import { useUserLocation } from "@/hooks/useUserLocation";
import { Feature } from "@/types";
import React, { useCallback, useMemo, useRef } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-map-clustering";
import {
  default as MapViewType,
  Marker,
  PROVIDER_GOOGLE,
  Region,
} from "react-native-maps";
import PinSelected from "../assets/images/pin-selected.png";
import PinDefault from "../assets/images/pin.png";
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
};

type Cluster = {
  id: string;
  geometry: {
    coordinates: [number, number];
  };
  properties: {
    point_count: number;
  };
  onPress: () => void;
};

const Map = ({
  visibleFeatures,
  selectedFeature,
  onFeatureSelect,
}: MapProps) => {
  const { isPermissionGranted } = useUserLocation();

  const mapViewRef = useRef<MapViewType | null>(null);
  const renderCluster = useCallback((cluster: Cluster) => {
    const { id, geometry, onPress, properties } = cluster;

    return (
      <Marker
        key={id}
        coordinate={{
          latitude: geometry.coordinates[1],
          longitude: geometry.coordinates[0],
        }}
        onPress={onPress}
      >
        <View style={styles.cluster}>
          <Text style={styles.clusterText}>{properties.point_count}</Text>
        </View>
      </Marker>
    );
  }, []);

  const renderedFeatures = useMemo(() => {
    return visibleFeatures.map((feature) => {
      const key =
        (feature.properties.OBJECTID ||
          feature.properties.OBJECTID_1 ||
          feature.properties.FID) ??
        feature.id;

      const isSelected = selectedFeature === feature;

      if (feature.geometry.type === "Point") {
        const [lng, lat] = feature.geometry.coordinates;
        return (
          <Marker
            key={key}
            coordinate={{ latitude: lat, longitude: lng }}
            onPress={() => onFeatureSelect(feature)}
            anchor={{ x: 0.5, y: 1 }}
          >
            <Image
              source={isSelected ? PinSelected : PinDefault}
              resizeMode="contain"
              className="w-10 h-10"
            />
          </Marker>
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
    });
  }, [visibleFeatures, selectedFeature, onFeatureSelect]);

  return (
    <MapView
      ref={mapViewRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={INITIAL_REGION}
      minPoints={5}
      radius={100}
      showsUserLocation={isPermissionGranted}
      renderCluster={renderCluster}
      userInterfaceStyle="light"
    >
      {renderedFeatures}
    </MapView>
  );
};

export default React.memo(Map);

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  cluster: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#005793",
    justifyContent: "center",
    alignItems: "center",
  },
  clusterText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

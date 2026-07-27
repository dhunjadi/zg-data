import { DataSetDisplayData } from "@/types";
import { detectLinkType, getURLLink } from "@/utils/mapUtils";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Map } from "lucide-react-native";
import React, { forwardRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import { showLocation } from "react-native-map-link";
import URLLink from "./URLLink";

type DetailsBottomSheetProps = {
  selectedFeatureData?: DataSetDisplayData;
  selectedFeatureCoordinates?: [number, number];
};
const DetailsBottomSheet = forwardRef<BottomSheet, DetailsBottomSheetProps>(
  ({ selectedFeatureData, selectedFeatureCoordinates }, ref) => {
    const { t } = useTranslation();
    const snapPoints = useMemo(() => ["25%", "50%"], []);

    const handleOpenInMaps = () => {
      if (!selectedFeatureCoordinates) return;

      const [longitude, latitude] = selectedFeatureCoordinates;

      showLocation({
        latitude,
        longitude,
        googleForceLatLon: true,
      });
    };

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        enableDynamicSizing={false}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <BottomSheetScrollView
          className="p-4"
          contentContainerClassName="pb-10"
        >
          <View className="flex-row items-start">
            <Text className="stext-xl font-bold text-primaryDark flex-1 shrink">
              {selectedFeatureData?.title ? t(selectedFeatureData.title) : ""}
            </Text>

            <Pressable onPress={handleOpenInMaps} className="">
              <Map size={24} color="#005793" />
            </Pressable>
          </View>

          {selectedFeatureData?.details.map((detail) => {
            if (!detail.value) return null;

            const items = detail.value
              .toString()
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean);

            return (
              <View key={detail.label} className="mt-3">
                <Text className="text-xs font-bold uppercase text-black">
                  {t(detail.label)}
                </Text>

                {items.map((item, i) => {
                  const type = detectLinkType(item);
                  return type !== "text" ? (
                    <URLLink key={i} url={getURLLink(item)} label={item} />
                  ) : (
                    <Text key={i} className="text-base text-neutral-900">
                      {item}
                    </Text>
                  );
                })}
              </View>
            );
          })}
        </BottomSheetScrollView>
      </BottomSheet>
    );
  },
);

DetailsBottomSheet.displayName = "DetailsBottomSheet";

export default DetailsBottomSheet;

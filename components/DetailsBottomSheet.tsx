import { DataSetItem } from "@/constants/categories";
import { Feature } from "@/types";
import { detectLinkType, getURLLink } from "@/utils/mapUtils";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Map } from "lucide-react-native";
import { forwardRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, useColorScheme, View } from "react-native";
import { showLocation } from "react-native-map-link";
import URLLink from "./URLLink";

type DetailsBottomSheetProps = {
  selectedFeature: Feature<Record<string, unknown>> | null;
  selectedDataSet?: DataSetItem;
};
const DetailsBottomSheet = forwardRef<BottomSheet, DetailsBottomSheetProps>(
  ({ selectedFeature, selectedDataSet }, ref) => {
    const colorScheme = useColorScheme();
    const isDarkTheme = colorScheme === "dark";
    const { t } = useTranslation();

    const snapPoints = useMemo(() => ["25%", "50%"], []);

    const handleOpenInMaps = () => {
      if (selectedFeature?.geometry.type !== "Point") return;

      const [longitude, latitude] = selectedFeature.geometry.coordinates;

      showLocation({
        latitude,
        longitude,
        googleForceLatLon: true,
      });
    };

    const selectedFeatureData = useMemo(() => {
      return selectedDataSet && selectedFeature
        ? selectedDataSet.getDisplayData(selectedFeature)
        : undefined;
    }, [selectedDataSet, selectedFeature]);

    return (
      <BottomSheet
        ref={ref}
        index={1}
        enableDynamicSizing={false}
        snapPoints={snapPoints}
        enablePanDownToClose
        handleStyle={{ backgroundColor: isDarkTheme ? "#17284d" : "#f5f5f5" }}
        handleIndicatorStyle={{
          backgroundColor: isDarkTheme ? "#e8b74b" : "black",
          borderRadius: 99,
        }}
      >
        <BottomSheetScrollView
          className={`p-4 ${isDarkTheme ? "bg-elementBgDark" : "bg-neutral-100"}`}
          contentContainerClassName="pb-10"
        >
          <View className="flex-row items-start">
            <Text
              className={`"stext-xl font-bold ${isDarkTheme ? "text-highlight" : "text-primaryDark"} flex-1 shrink"`}
            >
              {selectedFeatureData?.title ? t(selectedFeatureData.title) : ""}
            </Text>

            {selectedFeature?.geometry.type === "Point" && (
              <Pressable onPress={handleOpenInMaps}>
                <Map size={24} color={isDarkTheme ? "#e8b74b" : "#005793"} />
              </Pressable>
            )}
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
                <Text
                  className={`"text-xs font-bold uppercase ${isDarkTheme ? "text-highlight" : "text-black"}"`}
                >
                  {t(detail.label)}
                </Text>

                {items.map((item, i) => {
                  const type = detectLinkType(item);
                  return type !== "text" ? (
                    <URLLink key={i} url={getURLLink(item)} label={item} />
                  ) : (
                    <Text
                      key={i}
                      className={`"text-base ${isDarkTheme ? "text-highlight" : "text-neutral-900"}"`}
                    >
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

import { DataSetDisplayData } from "@/types";
import { detectLinkType, getURLLink } from "@/utils/mapUtils";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { Text, View } from "react-native";
import URLLink from "./URLLink";

type DetailsBottomSheetProps = {
  selectedFeatureData?: DataSetDisplayData;
};
const DetailsBottomSheet = forwardRef<BottomSheet, DetailsBottomSheetProps>(
  ({ selectedFeatureData }, ref) => {
    const snapPoints = useMemo(() => ["25%", "50%"], []);

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
          <Text className="text-xl font-bold text-primaryDark">
            {selectedFeatureData?.title || ""}
          </Text>

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
                  {detail.label}
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

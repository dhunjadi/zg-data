import { DataSetDisplayData } from "@/types";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { Text, View } from "react-native";

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

          {selectedFeatureData?.details.map((detail) =>
            detail.value ? (
              <View key={detail.label} className="mt-3">
                <Text className="text-xs font-bold uppercase text-black">
                  {detail.label}
                </Text>
                <Text className="text-base text-neutral-900">
                  {detail.value}
                </Text>
              </View>
            ) : null,
          )}
        </BottomSheetScrollView>
      </BottomSheet>
    );
  },
);

DetailsBottomSheet.displayName = "DetailsBottomSheet";

export default DetailsBottomSheet;

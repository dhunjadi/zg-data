import DetailsBottomSheet from "@/components/DetailsBottomSheet";
import { DataSetItem } from "@/constants/categories";
import { Feature } from "@/types";
import { render, screen } from "@testing-library/react-native";
import { Map } from "lucide-react-native";

jest.mock("@gorhom/bottom-sheet", () => {
  const React = jest.requireActual("react");

  const MockBottomSheet = React.forwardRef(
    (
      props: { children?: import("react").ReactNode },
      _ref: import("react").Ref<unknown>,
    ) => React.createElement(React.Fragment, null, props.children),
  );

  MockBottomSheet.displayName = "MockBottomSheet";

  return {
    __esModule: true,
    default: MockBottomSheet,
    BottomSheetScrollView: (props: {
      children?: import("react").ReactNode;
    }) => React.createElement(React.Fragment, null, props.children),
  };
});

jest.mock("react-native-map-link", () => ({
  showLocation: jest.fn(),
}));

describe("DetailsBottomSheet", () => {
  const selectedFeature: Feature<Record<string, unknown>> = {
    id: 1,
    type: "Feature",
    properties: {
      naziv: "Test place",
      adresa: "Test address",
      nadlezan: "Test authority",
    },
    geometry: {
      type: "Point",
      coordinates: [15.9819, 45.815],
    },
  };

  const selectedDataSet: DataSetItem = {
    id: "test-data-set",
    label: "Test data set",
    description: "Test description",
    icon: Map,
    fetchUrl: "https://example.com/data.geojson",
    getDisplayData: () => ({
      title: "Test place title",
      details: [
        {
          label: "Address",
          value: "Test address value",
        },
        {
          label: "Working hours",
          value: "Monday to Friday",
        },
      ],
    }),
  };

  it("is rendering selected feature title and details", async () => {
    await render(
      <DetailsBottomSheet
        selectedFeature={selectedFeature}
        selectedDataSet={selectedDataSet}
      />,
    );

    expect(screen.getByText("Test place title")).toBeOnTheScreen();
    expect(screen.getByText("Address")).toBeOnTheScreen();
    expect(screen.getByText("Test address value")).toBeOnTheScreen();
    expect(screen.getByText("Working hours")).toBeOnTheScreen();
    expect(screen.getByText("Monday to Friday")).toBeOnTheScreen();
  });
});

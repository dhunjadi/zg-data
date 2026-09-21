import DataSetGroupScreen from "@/app/(tabs)/(home)/[id]";
import { CATEGORIES } from "@/constants/categories";
import { render, screen } from "@testing-library/react-native";
import { useLocalSearchParams } from "expo-router";

jest.mock("expo-router", () => ({
  useLocalSearchParams: jest.fn(),
}));

describe("DataSetGroupScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is rendering title and category description", async () => {
    const category = CATEGORIES[0];
    (useLocalSearchParams as jest.Mock).mockReturnValue({ id: category.id });

    await render(<DataSetGroupScreen />);

    expect(screen.getByText("screens.dataSetGroup.title")).toBeOnTheScreen();
    expect(
      screen.getByText(
        `screens.dataSetGroup.description (category:${category.label})`,
      ),
    ).toBeOnTheScreen();
  });

  it("renders datasets for the selected category", async () => {
    const category = CATEGORIES[0];
    (useLocalSearchParams as jest.Mock).mockReturnValue({ id: category.id });

    await render(<DataSetGroupScreen />);

    category.dataSets.slice(0, 10).forEach((dataSet) => {
      expect(screen.getByText(dataSet.label)).toBeOnTheScreen();
    });
  });
});

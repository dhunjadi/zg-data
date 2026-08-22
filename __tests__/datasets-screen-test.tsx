import DataSetsScreen from "@/app/dataSets";
import { CATEGORIES } from "@/constants/categories";
import { render, screen, userEvent } from "@testing-library/react-native";
jest.mock("@/components/DataSetItem", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Text } = require("react-native");

  return function MockDataSetItem({ label }: { label: string }) {
    return <Text testID="dataset-item">{label}</Text>;
  };
});

describe("DataSetsScreen", () => {
  const user = userEvent.setup();
  it("is rendering title and description", async () => {
    await render(<DataSetsScreen />);

    const title = screen.getByText("screens.dataSets.title");
    const description = screen.getByText("screens.dataSets.description");

    expect(title).toBeOnTheScreen();
    expect(description).toBeOnTheScreen();
  });

  it("has a working text input", async () => {
    await render(<DataSetsScreen />);

    const input = screen.getByPlaceholderText(
      "screens.dataSets.searchInputPlaceholder",
    );
    expect(input).toBeOnTheScreen();

    await user.type(input, "abc");

    expect(input).toHaveDisplayValue("abc");
  });

  it("renders the first 10 DataSetItems by default (FlatList virtualization)", async () => {
    const flatDataSets = CATEGORIES.flatMap((category) => category.dataSets);
    const firstTenItems = flatDataSets.slice(0, 10);

    await render(<DataSetsScreen />);

    firstTenItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeOnTheScreen();
    });

    // items beyond the FlatList's initial render window should not be on the screen
    if (flatDataSets.length > 10) {
      const beyondWindow = flatDataSets[10];
      expect(screen.queryByText(beyondWindow.label)).not.toBeOnTheScreen();
    }
  });
});

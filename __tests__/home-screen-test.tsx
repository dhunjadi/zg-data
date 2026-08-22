import HomeScreen from "@/app/(tabs)/(home)";
import { CATEGORIES } from "@/constants/categories";
import { render, userEvent } from "@testing-library/react-native";

describe("HomeScreen", () => {
  const user = userEvent.setup();
  it("is rendering title and description", async () => {
    const { getByText } = await render(<HomeScreen />);

    const title = getByText("screens.home.title");
    const description = getByText("screens.home.description");

    expect(title).toBeOnTheScreen();
    expect(description).toBeOnTheScreen();
  });

  it("has a working text input", async () => {
    const { getByPlaceholderText } = await render(<HomeScreen />);

    const input = getByPlaceholderText("screens.home.searchInputPlaceholder");
    expect(input).toBeOnTheScreen();

    await user.type(input, "abc");

    expect(input).toHaveDisplayValue("abc");
  });

  it("renders GroupCards for each category", async () => {
    const { getByText } = await render(<HomeScreen />);

    CATEGORIES.forEach((category) => {
      expect(getByText(category.label)).toBeOnTheScreen();
    });
  });

  it("only renders GroupCards whose labels contain the search text", async () => {
    const FILTERING_TEXT = "a";

    const { getByPlaceholderText, getByText, queryByText } = await render(
      <HomeScreen />,
    );

    const input = getByPlaceholderText("screens.home.searchInputPlaceholder");

    await user.type(input, FILTERING_TEXT);

    const matchingCategories = CATEGORIES.filter((item) =>
      item.label.toLowerCase().includes(FILTERING_TEXT),
    );

    const nonMatchingCategories = CATEGORIES.filter(
      (item) => !item.label.toLowerCase().includes(FILTERING_TEXT),
    );

    matchingCategories.forEach((item) => {
      expect(getByText(item.label)).toBeOnTheScreen();
    });

    nonMatchingCategories.forEach((item) => {
      expect(queryByText(item.label)).not.toBeOnTheScreen();
    });
  });
});

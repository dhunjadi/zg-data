import HomeScreen from "@/app/(tabs)/(home)";
import { CATEGORIES } from "@/constants/categories";
import { render, screen, userEvent } from "@testing-library/react-native";

describe("HomeScreen", () => {
  const user = userEvent.setup();
  it("is rendering title and description", async () => {
    await render(<HomeScreen />);

    const title = screen.getByText("screens.home.title");
    const description = screen.getByText("screens.home.description");

    expect(title).toBeOnTheScreen();
    expect(description).toBeOnTheScreen();
  });

  it("has a working text input", async () => {
    await render(<HomeScreen />);

    const input = screen.getByPlaceholderText(
      "screens.home.searchInputPlaceholder",
    );
    expect(input).toBeOnTheScreen();

    await user.type(input, "abc");

    expect(input).toHaveDisplayValue("abc");
  });

  it("renders GroupCards for each category", async () => {
    await render(<HomeScreen />);

    CATEGORIES.forEach((category) => {
      expect(screen.getByText(category.label)).toBeOnTheScreen();
    });
  });

  it("only renders GroupCards whose labels contain the search text", async () => {
    const FILTERING_TEXT = "a";

    await render(<HomeScreen />);

    const input = screen.getByPlaceholderText(
      "screens.home.searchInputPlaceholder",
    );

    await user.type(input, FILTERING_TEXT);

    const matchingCategories = CATEGORIES.filter((item) =>
      item.label.toLowerCase().includes(FILTERING_TEXT),
    );

    const nonMatchingCategories = CATEGORIES.filter(
      (item) => !item.label.toLowerCase().includes(FILTERING_TEXT),
    );

    matchingCategories.forEach((item) => {
      expect(screen.getByText(item.label)).toBeOnTheScreen();
    });

    nonMatchingCategories.forEach((item) => {
      expect(screen.queryByText(item.label)).not.toBeOnTheScreen();
    });
  });
});

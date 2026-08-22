import HomeScreen from "@/app/(tabs)/(home)";
import { render } from "@testing-library/react-native";

describe("HomeScreen", () => {
  test("rendering title", async () => {
    const { getByText } = await render(<HomeScreen />);

    expect(getByText("screens.home.title")).toBeTruthy();
  });
});

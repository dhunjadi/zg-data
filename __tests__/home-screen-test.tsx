import HomeScreen from "@/app/(tabs)/(home)";
import { render } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
  test("Text renders correctly on HomeScreen", async () => {
    const { getByText } = await render(<HomeScreen />);

    getByText("Welcome");
  });
});

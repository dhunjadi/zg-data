import DataSetItem from "@/components/DataSetItem";
import { render, screen, userEvent } from "@testing-library/react-native";
import { router } from "expo-router";
import { Road } from "lucide-react-native";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

describe("DataSetItem", () => {
  const user = userEvent.setup();

  it("is rendering given label and description", async () => {
    await render(
      <DataSetItem
        icon={Road}
        label="Test label"
        description="Test description"
      />,
    );

    expect(screen.getByText("Test label")).toBeOnTheScreen();
    expect(screen.getByText("Test description")).toBeOnTheScreen();
  });

  it("navigates to /map when id and fetchUrl exists", async () => {
    await render(
      <DataSetItem
        icon={Road}
        label="High Schools"
        description="High Schools in Zagreb"
        id="high-schools"
        fetchUrl="https://www.test-url.hr"
      />,
    );

    await user.press(screen.getByText("High Schools"));

    expect(router.push).toHaveBeenCalledWith({
      pathname: "/map",
      params: {
        datasetId: "high-schools",
        fetchUrl: "https://www.test-url.hr",
      },
    });
  });
});

import MapScreen from "@/app/map";
import { renderWithQueryClient } from "@/test-utils";
import { useQuery } from "@tanstack/react-query";
import { screen } from "@testing-library/react-native";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQuery: jest.fn(),
}));

describe("MapScreen", () => {
  it("shows spinner while fetching data", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isFetching: true,
      isLoading: true,
      error: null,
    });

    await renderWithQueryClient(<MapScreen />);

    expect(screen.getByTestId("loading-spinner")).toBeOnTheScreen();
  });

  /* it("hides spinner once data has loaded", async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      isFetching: false,
      isLoading: false,
      error: null,
    });

    await renderWithQueryClient(<MapScreen />);

    expect(screen.queryByTestId("loading-spinner")).not.toBeOnTheScreen();
  }); */
});

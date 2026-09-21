import SettingsScreen from "@/app/(tabs)/settings";
import {
  fireEvent,
  render,
  screen,
  userEvent,
} from "@testing-library/react-native";
import { Appearance } from "react-native";

const mockChangeLanguage = jest.fn();

describe("SettingsScreen", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockChangeLanguage.mockClear();
    jest
      .spyOn(jest.requireMock("react-i18next"), "useTranslation")
      .mockReturnValue({
        t: (key: string) => key,
        i18n: {
          changeLanguage: mockChangeLanguage,
          language: "en",
        },
      });
    jest.spyOn(Appearance, "setColorScheme").mockImplementation(jest.fn());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("is rendering language and theme sections", async () => {
    await render(<SettingsScreen />);

    expect(screen.getByText("screens.settings.language")).toBeOnTheScreen();
    expect(screen.getByText("screens.settings.theme")).toBeOnTheScreen();
    expect(screen.getByText("HR")).toBeOnTheScreen();
    expect(screen.getByText("EN")).toBeOnTheScreen();
  });

  it("changes language when a language option is pressed", async () => {
    await render(<SettingsScreen />);

    await user.press(screen.getByText("HR").parent);

    expect(mockChangeLanguage).toHaveBeenCalledWith("hr");
  });

  it("changes theme when a theme option is pressed", async () => {
    await render(<SettingsScreen />);

    fireEvent.press(screen.getByTestId("icon-Moon").parent);

    expect(Appearance.setColorScheme).toHaveBeenCalledWith("dark");
  });
});

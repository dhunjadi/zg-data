import Divider from "@/components/Divider";
import { render, screen } from "@testing-library/react-native";

describe("Divider", () => {
  it("is rendering given text", async () => {
    await render(<Divider text="Example text" />);

    expect(screen.getByText("Example text")).toBeOnTheScreen();
  });

  it("is rendering without text prop", async () => {
    await render(<Divider />);

    expect(screen.queryByText("Example text")).toBeNull();
  });
});

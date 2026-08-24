import GroupCard from "@/components/GroupCard";
import { render, screen } from "@testing-library/react-native";
import { Map } from "lucide-react-native";

describe("GroupCard", () => {
  it("is rendering given label and description", async () => {
    await render(
      <GroupCard
        label="Test label"
        description="Test description"
        icon={Map}
      />,
    );

    expect(screen.getByText("Test label")).toBeOnTheScreen();
    expect(screen.getByText("Test description")).toBeOnTheScreen();
  });
});

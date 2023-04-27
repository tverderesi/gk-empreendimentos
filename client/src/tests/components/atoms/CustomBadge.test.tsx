import { render, screen } from "@testing-library/react";
import { CustomBuildingBadge } from "../../../components/atoms/CustomBadge";
import "@testing-library/jest-dom/extend-expect";

test("renders with default props", () => {
  render(
    <CustomBuildingBadge>
      <p>Default Badge</p>
    </CustomBuildingBadge>
  );
  const badgeElement = screen.getByTestId("custom-badge");
  const badgeIcon = screen.getByTestId("badge-icon");

  expect(badgeElement).toBeInTheDocument();
  expect(badgeIcon).toHaveClass("indicator-item");
  expect(badgeIcon).toHaveClass("bg-slate-500");
  expect(badgeIcon.textContent).toEqual("question_mark");
  expect(screen.getByText("Default Badge")).toBeInTheDocument();
});

test("renders with custom props", () => {
  render(
    <CustomBuildingBadge className="test-class" icon="building" status="new">
      <p>New Building</p>
    </CustomBuildingBadge>
  );
  const badgeElement = screen.queryByTestId("custom-badge");
  const badgeIcon = screen.getByTestId("badge-icon");

  expect(badgeElement).toBeInTheDocument();
  expect(badgeIcon).toHaveClass("indicator-item");
  expect(badgeIcon).toHaveClass("bg-brown-sugar-500");
  expect(badgeIcon).toHaveClass("test-class");
  expect(badgeIcon.textContent).toEqual("building");
  expect(screen.getByText("New Building")).toBeInTheDocument();
});

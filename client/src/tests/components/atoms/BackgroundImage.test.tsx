import { render, screen } from "@testing-library/react";
import { BackgroundImage } from "../../../components/atoms/BackgroundImage";
import "@testing-library/jest-dom/extend-expect";

describe("BackgroundImage", () => {
  beforeAll(() => {
    process.env.PUBLIC_URL = "http://localhost:3000";
  });

  it("renders an image with the correct props", () => {
    render(<BackgroundImage />);

    const image = screen.getByAltText("Edifício Lumina") as HTMLImageElement;
    expect(image).toBeInTheDocument();

    expect(image.src).toBe(
      `${process.env.PUBLIC_URL}/media/lumina_overlay.png`
    );
    expect(image.className).toContain(
      "object-cover opacity-20 brightness-[30%] absolute bottom-0 h-[50vh] left-0 -z-10"
    );
  });
});

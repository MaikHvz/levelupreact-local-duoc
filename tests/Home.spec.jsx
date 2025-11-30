// tests/HeroSection.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "../src/components/HeroSection";

describe("Componente HeroSection", () => {

  it("renderiza el botón y permite hacer click (sin navegación)", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /Explorar Productos/i });
    expect(button).toBeInTheDocument();

    await user.click(button);

    // No esperamos navegación porque no existe en el componente
    expect(button).toBeEnabled();
  });

  it("renderiza correctamente el badge", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/¡Nuevos productos gaming!/i)
    ).toBeInTheDocument();
  });

  it("renderiza correctamente título y descripción", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(screen.getByText(/Level Up Your/i)).toBeInTheDocument();
    expect(screen.getByText(/Gaming Experience/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Descubre la mejor selección de productos gaming/i)
    ).toBeInTheDocument();
  });

  it("muestra las estadísticas correctamente", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    expect(screen.getByText(/4.9\/5 Rating/i)).toBeInTheDocument();
    expect(screen.getByText(/\+10,000 gamers satisfechos/i)).toBeInTheDocument();
  });

  it("muestra la imagen principal del hero", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const heroImage = screen.getByAltText(/Gaming Setup/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage.src).toContain(
      "gaming-setup-rgb-keyboard-mouse-headset.png"
    );
  });

  it("renderiza los íconos flotantes", () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );

    const floatingIcons = document.querySelectorAll(".floating-icon");
    expect(floatingIcons.length).toBe(2);
  });
});

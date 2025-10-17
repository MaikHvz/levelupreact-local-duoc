import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "../src/components/HeroSection";

describe("Componente HeroSection", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
  });

  it("renderiza el badge con el texto correcto", () => {
    expect(screen.getByText("¡Nuevos productos gaming!")).toBeInTheDocument();
  });

  it("renderiza el título con texto y estilo esperado", () => {
    const title = screen.getByRole("heading", {
      name: /Level Up Your Gaming Experience/i,
    });
    expect(title).toBeInTheDocument();
    expect(title.querySelector(".gradient-text")).toHaveTextContent("Gaming Experience");
  });

  it("renderiza la descripción correctamente", () => {
    expect(
      screen.getByText(
        /Descubre la mejor selección de productos gaming. Desde periféricos de alta gama hasta accesorios únicos/i
      )
    ).toBeInTheDocument();
  });

  it("renderiza el texto de gamers satisfechos", () => {
    expect(screen.getByText("+10,000 gamers satisfechos")).toBeInTheDocument();
  });

  it("renderiza el botón con el enlace correcto", () => {
    const link = screen.getByRole("link", { name: /Explorar Productos/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/Productos");
  });

  it("el botón es clickeable", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);
    // Como el botón solo tiene Link, no hay cambio visible, pero podemos asegurar que el botón existe y es clickeable.
    expect(button).toBeEnabled();
  });

  it("renderiza la imagen con alt correcto", () => {
    const img = screen.getByAltText("Gaming Setup");
    expect(img).toBeInTheDocument();
  });

  it("renderiza los íconos flotantes SVG", () => {
    // Como los SVG no tienen rol img, buscamos directamente por clase
    const icons = document.querySelectorAll(".floating-icon");
    expect(icons.length).toBe(2);
  });

  it("tiene la estructura principal con clases container-fluid y d-flex", () => {
    const main = screen.getByRole("main");
    expect(main).toHaveClass("container-fluid", "d-flex", "justify-content-center", "align-items-center");
  });
});

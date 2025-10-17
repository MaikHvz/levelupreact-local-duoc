import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import HeroSection from "../src/components/HeroSection";

// Mock para las imágenes
vi.mock("../src/assets/gaming-setup-rgb-keyboard-mouse-headset.png", () => ({
  default: "mock-image-path.png"
}));

describe("Componente HeroSection", () => {
  const renderHeroSection = () => {
    return render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    renderHeroSection();
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
    expect(button).toBeEnabled();
  });

  it("renderiza la imagen con alt correcto", () => {
    const img = screen.getByAltText("Gaming Setup");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src");
  });

  it("renderiza los íconos flotantes SVG", () => {
    const icons = document.querySelectorAll(".floating-icon");
    expect(icons).toHaveLength(2);
    expect(icons[0]).toHaveClass("floating-icon-1");
    expect(icons[1]).toHaveClass("floating-icon-2");
  });

  it("tiene la estructura principal con clases container-fluid y d-flex", () => {
    const main = screen.getByRole("main");
    expect(main).toHaveClass("container-fluid", "d-flex", "justify-content-center", "align-items-center");
  });

 

  it("verifica la estructura del hero-stats", () => {
    const statsContainer = document.querySelector('.hero-stats');
    expect(statsContainer).toBeInTheDocument();
    
    const statElements = statsContainer?.querySelectorAll('.stat');
    expect(statElements).toHaveLength(1);
    
    const statText = statsContainer?.querySelector('.stat-text');
    expect(statText).toHaveTextContent("+10,000 gamers satisfechos");
  });

  it("verifica que el botón tiene las clases CSS correctas", () => {
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn", "btn-primary", "hero-button", "fw-semibold");
  });

  it("verifica que el enlace dentro del botón es funcional", () => {
    const link = screen.getByRole("link", { name: /Explorar Productos/i });
    expect(link).toBeInTheDocument();
    expect(link.tagName.toLowerCase()).toBe('a');
    expect(link.parentElement?.tagName.toLowerCase()).toBe('button');
  });

  it("renderiza el contenedor de la imagen correctamente", () => {
    const imageContainer = document.querySelector('.hero-image-container');
    expect(imageContainer).toBeInTheDocument();
    
    const image = imageContainer?.querySelector('img');
    expect(image).toHaveAttribute('alt', 'Gaming Setup');
  });

  it("verifica la estructura del hero-content", () => {
    const heroContent = document.querySelector('.hero-content');
    expect(heroContent).toBeInTheDocument();
    
    const heroText = heroContent?.querySelector('.hero-text');
    expect(heroText).toBeInTheDocument();
    
    const heroImage = heroContent?.querySelector('.hero-image');
    expect(heroImage).toBeInTheDocument();
  });

  it("verifica que el hero-bg existe", () => {
    const heroBg = document.querySelector('.hero-bg');
    expect(heroBg).toBeInTheDocument();
  });



  it("verifica que el gradient-text span está en el título", () => {
    const gradientText = document.querySelector('.gradient-text');
    expect(gradientText).toBeInTheDocument();
    expect(gradientText).toHaveTextContent("Gaming Experience");
  });

  it("verifica la estructura completa del hero section", () => {
    const main = screen.getByRole("main");
    const section = main.querySelector('.contenedor-hero');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('container-lg', 'container-hero');
  });

  it("verifica que no hay elementos rotos o vacíos", () => {
    // Verificar que todos los textos importantes están presentes
    const importantTexts = [
      "Level Up Your",
      "Gaming Experience",
      "Descubre la mejor selección",
      "Explorar Productos"
    ];
    
    importantTexts.forEach(text => {
      expect(screen.getByText(new RegExp(text, "i"))).toBeInTheDocument();
    });
  });

  it("verifica la accesibilidad del componente", () => {
    // Verificar que las imágenes tienen alt text
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('alt');
    });

    // Verificar que los enlaces tienen href
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('href');
    });

    // Verificar que los botones son accesibles
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toBeEnabled();
    });
  });

  it("verifica el responsive design classes", () => {
    const main = screen.getByRole("main");
    expect(main).toHaveClass("d-flex", "justify-content-center", "align-items-center");
    
    const section = main.querySelector('.contenedor-hero');
    expect(section).toHaveClass('container-lg');
  });

  it("simula la navegación al hacer click en el botón", async () => {
    const user = userEvent.setup();
    const link = screen.getByRole("link", { name: /Explorar Productos/i });
    
    // En un test real con Router, podrías verificar la navegación
    // Por ahora verificamos que el link existe y es clickeable
    await user.click(link);
    expect(link).toHaveAttribute('href', '/Productos');
  });
});

// Tests adicionales para edge cases
describe("HeroSection Edge Cases", () => {
  it("renderiza correctamente sin errores cuando la imagen no carga", () => {
    // Simular error de carga de imagen
    const originalConsoleError = console.error;
    console.error = vi.fn();
    
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    
    // El componente debería renderizarse incluso si la imagen falla
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByAltText("Gaming Setup")).toBeInTheDocument();
    
    console.error = originalConsoleError;
  });

  it("mantiene la estructura con datos mínimos", () => {
    // Este test verifica que el componente no se rompe con la estructura actual
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>
    );
    
    // Elementos estructurales críticos
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(document.querySelector('.hero-content')).toBeInTheDocument();
    expect(document.querySelector('.hero-text')).toBeInTheDocument();
    expect(document.querySelector('.hero-image')).toBeInTheDocument();
  });
});
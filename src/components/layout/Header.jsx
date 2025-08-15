import { Button } from "../ui";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header
      className="py-3 sm:py-4 md:py-6 px-4 sm:px-6"
      style={{
        background: "linear-gradient(90deg, #f4f4f4, #fdfcf7, #f3efe4)",
      }}
      data-testid="header-navigation"
    >
      <div className="mx-auto" style={{ maxWidth: "1700px" }}>
        <nav
          className="rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex items-center justify-between"
          style={{
            background: "linear-gradient(90deg, #1b1a17, #24211b, #2f2b20)",
          }}
          data-testid="nav-container"
        >
          {/* Logo */}
          <div className="flex items-center" data-testid="logo-container">
            <img
              src="https://i.ibb.co/q3xKvCnh/Sparx-W-Dark-RGB-01.png"
              alt="SPARX Technologies Logo"
              className="h-8 sm:h-10 md:h-12"
              data-testid="img-logo"
            />
          </div>

          {/* Navigation Links */}
          <div
            className="hidden lg:flex items-center space-x-4 xl:space-x-8 gap-2 xl:gap-6"
            data-testid="nav-links"
          >
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
              data-testid="link-about"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
              data-testid="link-solutions-1"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
              data-testid="link-solutions-2"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
              data-testid="link-solutions-3"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition-colors"
              data-testid="link-solutions-4"
            >
              Solutions
            </a>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-sparx-primary text-white px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 rounded-full font-medium hover:bg-red-600 transition-colors text-xs sm:text-sm md:text-base"
            data-testid="button-explore-products"
          >
            <span className="hidden sm:inline">Explore Our Products</span>
            <span className="sm:hidden">Products</span>
            <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </nav>
      </div>
    </header>
  );
}

import { Button } from "../ui";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #f4f4f4, #fdfcf7, #f3efe4)",
      }}
      data-testid="section-hero"
    >
      <div className="mx-auto" style={{ maxWidth: "1700px" }}>
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Hero Content */}
          <div className="relative" data-testid="hero-content">
            {/* <div
              className="absolute -top-10 -left-10 w-8 h-16 bg-sparx-accent-yellow sparx-accent-shape opacity-80"
              data-testid="accent-shape-1"
            ></div> */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl xl:text-[5.2rem] font-normal mb-4 sm:mb-6"
              style={{
                lineHeight: "1.2",
                fontFamily: "Outfit, sans-serif",
              }}
              data-testid="text-hero-heading"
            >
              Empowering The Future With Smarter Digital{" "}
              <span
                className="bg-sparx-primary text-white px-2 sm:px-3 md:px-4 py-1 rounded-sm font-medium"
                data-testid="text-solutions-highlight"
              >
                Solutions
              </span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed font-medium"
              style={{ maxWidth: "615px", color: "#666665" }}
              data-testid="text-hero-description"
            >
              From intelligent insurance automation to real-time video analytics
              and secure data platforms—Sparx builds solutions that redefine
              industries.
            </p>
            <Button
              className="bg-sparx-primary text-white px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 rounded-full font-medium hover:bg-red-600 transition-colors text-sm sm:text-base"
              data-testid="button-talk-experts"
            >
              <span className="hidden sm:inline">Talk To Our Experts</span>
              <span className="sm:hidden">Talk To Experts</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Hero Image */}
          <div
            className="relative mt-8 lg:mt-0"
            data-testid="hero-image-container"
            style={{
              filter: `
                  drop-shadow(0 0 4px rgba(243, 212, 193, 0.8))
                  drop-shadow(0 0 12px rgba(243, 212, 193, 0.5))
                  drop-shadow(0 0 24px rgba(243, 212, 193, 0.3))
                `,
            }}
          >
            <div
              className="mx-auto relative overflow-hidden w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              style={{
                filter: `
                drop-shadow(0 0 4px rgba(243, 212, 193, 0.8))
                drop-shadow(0 0 12px rgba(243, 212, 193, 0.5))
                drop-shadow(0 0 24px rgba(243, 212, 193, 0.3))
              `,
              }}
            >
              <img
                src="https://i.ibb.co/9HPNc1Lp/Hero-Image.png"
                alt="Professional using SPARX technology tablet interface"
                className="w-full h-full object-cover"
                data-testid="img-hero-professional"
                style={{
                  filter: `
                  drop-shadow(0 0 4px rgba(243, 212, 193, 0.8))
                  drop-shadow(0 0 12px rgba(243, 212, 193, 0.5))
                  drop-shadow(0 0 24px rgba(243, 212, 193, 0.3))
                `,
                }}
              />
            </div>
            <div
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-4 h-8 sm:w-5 sm:h-10 md:w-6 md:h-12 bg-sparx-accent-yellow sparx-accent-shape-negative"
              data-testid="accent-shape-2"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

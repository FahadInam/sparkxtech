export default function WhyChooseSparxSection() {
  const features = [
    "Enterprise-Grade Security",
    "US Insurance Market Expertise",
    "Scalable Cloud Infrastructure",
    "Smart AI-Powered Monitoring",
    "99.99% Uptime & Support SLA",
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      data-testid="section-why-choose"
      style={{
        background: "linear-gradient(90deg, #f3e7e3, #f2eeec, #f3f3f3)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1700px" }}>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Features List */}
          <div data-testid="features-content">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-6 sm:mb-8 md:mb-12"
              data-testid="text-why-choose-heading"
              style={{ maxWidth: "200px" }}
            >
              Why Choose Sparx?
            </h2>
            <div
              className="space-y-4 sm:space-y-6 mt-8 sm:mt-12 md:mt-16"
              data-testid="features-list"
            >
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="bg-white px-4 sm:px-5 md:px-6 py-6 sm:py-6 md:py-9 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem]"
                  data-testid={`feature-${index}`}
                >
                  <h3
                    className="font-semibold text-base sm:text-lg md:text-xl lg:text-[1.7rem] ml-4 sm:ml-6 md:ml-8"
                    data-testid={`text-feature-${index}`}
                  >
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            data-testid="why-choose-image"
            className="lg:justify-self-end mt-8 lg:mt-0"
            style={{
              overflow: "hidden",
              borderRadius: "300px 300px 0 0",
              minWidth: "75%",
            }}
          >
            <img
              src="https://i.ibb.co/6cGPMx8d/Why-Choose-Sparx.jpg"
              alt="Professional woman working at desk in modern office with plants and natural lighting"
              className="shadow-xl w-full h-auto"
              data-testid="img-professional-office"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

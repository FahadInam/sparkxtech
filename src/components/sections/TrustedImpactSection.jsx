export default function TrustedImpactSection() {
  const statistics = [
    {
      value: "2M",
      description: "Recovered warranty and claim funds",
    },
    {
      value: "30-50%",
      description: "Reduction in billing errors and manual processing time",
    },
    {
      value: "99.9%",
      description: "Integrated audit history and compliance reporting",
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      data-testid="section-trusted-impact"
      style={{
        background: "linear-gradient(90deg, #f3f1f1, #f3ece9, #f2e4df)",
      }}
    >
      <div className="mx-auto " style={{ maxWidth: "1700px" }}>
        <div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          data-testid="impact-header"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black mb-8 sm:mb-12 md:mb-16 lg:mb-20"
            data-testid="text-impact-heading"
          >
            Trusted Impact
          </h2>

          {/* Statistics */}
          <div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mx-auto"
            style={{ maxWidth: "1315px" }}
            data-testid="statistics-grid"
          >
            {statistics.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 sm:p-8 md:p-10 lg:p-12 ${
                  index !== statistics.length - 1
                    ? "md:border-r-2 md:border-white"
                    : ""
                }`}
                data-testid={`statistic-${index}`}
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-3 sm:mb-4 md:mb-6"
                  data-testid={`text-stat-value-${index}`}
                >
                  {stat.value}
                </div>
                <p
                  className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
                  data-testid={`text-stat-desc-${index}`}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

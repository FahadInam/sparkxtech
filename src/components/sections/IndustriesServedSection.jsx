export default function IndustriesServedSection() {
  const industries = [
    {
      title: "Insurance Providers",
      image: "https://i.ibb.co/DH70xhDG/Insurance-Providers.png",
      alt: "Insurance professionals working in modern office with documents and computers",
      description: "",
    },
    {
      title: "Contractors & Field Ops",
      image: "https://i.ibb.co/vCScGt8Q/Contractors-Field-Ops.png",
      alt: "Construction worker with white hard hat and safety glasses on construction site",
      description:
        "Manage jobs and work orders with real-time task tracking, updates, and seamless coordination across teams.",
    },
    {
      title: "Property Managers",
      image: "https://i.ibb.co/YFJMSnPj/Property-Managers.png",
      alt: "Business professionals in meeting discussing property management strategies",
      description: "",
    },
  ];

  return (
    <section
      className="pb-12 sm:pb-16 md:pb-20 pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 lg:px-8"
      data-testid="section-industries"
      style={{
        background: "linear-gradient(90deg, #f3f1f1, #f3ece9, #f2e4df)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1700px" }}>
        <div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          data-testid="industries-header"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black"
            data-testid="text-industries-heading"
          >
            Industries Served
          </h2>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mx-auto"
          data-testid="industries-grid"
        >
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group cursor-pointer h-[400px] sm:h-[500px] md:h-[600px] lg:h-[760px]"
              data-testid={`industry-card-${index}`}
            >
              <div className="relative h-full">
                <img
                  src={industry.image}
                  alt={industry.alt}
                  className="w-full h-full object-cover"
                  data-testid={`img-industry-${index}`}
                />
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Card overlay with white background for text */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-white mx-3 sm:mx-4 md:mx-6 mb-7 px-4 py-6 sm:p-5 md:p-8 rounded-xl sm:rounded-2xl shadow-lg"
                  data-testid={`content-industry-${index}`}
                >
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-black  text-center"
                    data-testid={`text-industry-title-${index}`}
                  >
                    {industry.title}
                  </h3>
                  {industry.description && (
                    <>
                      <hr
                        className="border-t-2 my-2 sm:my-3 md:my-4"
                        style={{ borderColor: "#f1f1f1" }}
                      />

                      <p
                        className=" text-sm sm:text-base md:text-[1.25rem] font-normal leading-relaxed text-center mx-auto"
                        data-testid={`text-industry-desc-${index}`}
                        style={{ color: "#565656" }}
                      >
                        {industry.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ValuePropositionSection() {
  return (
    <section
      className="py-16 sm:py-24 md:py-32 lg:py-40 xl:py-64 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      data-testid="section-value-proposition"
      style={{ background: "#f4eee0" }}
    >
      <div className="max-w-6xl mx-auto text-center relative">
        {/* <div
          className="absolute top-0 left-16 w-12 h-20 bg-sparx-primary transform rotate-12"
          data-testid="accent-shape-left"
        ></div> */}

        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[4.5rem] font-normal leading-tight text-black mx-auto text-center lg:text-left lg:min-w-[86rem]"
          data-testid="text-value-proposition"
          style={{ lineHeight: "1.1" }}
        >
          Our software enables AI-augmented decisions across critical insurer
          and contractor workflows—from office operations to field execution.
        </h2>

        {/* <div
          className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 w-6 h-10 sm:w-8 sm:h-12 md:w-10 md:h-16 bg-sparx-primary transform rotate-45"
          data-testid="accent-shape-right"
        ></div> */}
      </div>
    </section>
  );
}

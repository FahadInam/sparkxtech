import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ClaimsCommandSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const features = [
    {
      id: "real-time-collaboration",
      title: "Real-Time Collaboration",
      description:
        "Coordinate inspections, approvals, and decisions instantly—empowering faster, smarter claim resolutions.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    },
    {
      id: "audit-compliance-dashboard",
      title: "Audit & Compliance Dashboard",
      description:
        "Automated compliance checks and comprehensive reporting ensure regulatory requirements are met efficiently.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    },
    {
      id: "rule-based-automation",
      title: "Rule-Based Automation",
      description:
        "AI-powered automation streamlines workflows and reduces manual processing time across all claim types.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    },
    {
      id: "api-integrations",
      title: "API Integrations",
      description:
        "Easily connect AllClaims with your existing systems for seamless data sharing, faster workflows, and enhanced efficiency.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    },
    {
      id: "document-image-management",
      title: "Document & Image Management",
      description:
        "Ensure every document and image is accessible, organized, and version-controlled. Empower your team with seamless sharing, real-time updates, and compliance-grade data protection—anytime, anywhere.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600",
    },
  ];

  const getPreviousIndex = (index) =>
    (index - 1 + features.length) % features.length;
  const getNextIndex = (index) => (index + 1) % features.length;

  // Auto-cycle animation
  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next tab
          setIsTransitioning(true);
          setActiveTab((current) => (current + 1) % features.length);
          return 0;
        }
        return prev + 1; // Progress speed (1% every 50ms = 5s total)
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isAnimating, features.length]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const currentFeature = features[activeTab];
  const prevFeature = features[getPreviousIndex(activeTab)];
  const nextFeature = features[getNextIndex(activeTab)];

  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      data-testid="section-claims-command"
      style={{
        background: "linear-gradient(90deg, #f3e7e3, #f2eeec, #f3f3f3)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1700px" }}>
        {/* Header Section */}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 md:mb-12 mx-auto"
          data-testid="claims-header"
          style={{ maxWidth: "1410px" }}
        >
          <div
            className="mb-6 lg:mb-0 pt-4 sm:pt-8 lg:pt-12"
            style={{ maxWidth: "45rem" }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-3 sm:mb-4"
              data-testid="text-claims-heading"
            >
              Claims Command Center
            </h2>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
              data-testid="text-claims-description"
            >
              ClaimCore brings together adjusters, vendors, and clients in a
              single secure environment. Designed for scale, built for speed.
            </p>
          </div>
          <Button
            className="bg-sparx-primary text-sm sm:text-base py-4 sm:py-6 lg:py-7 text-white px-6 sm:px-8 rounded-full font-normal hover:bg-red-600 transition-colors flex items-center gap-2 self-start lg:self-auto whitespace-nowrap"
            data-testid="button-see-platform"
          >
            <span className="hidden sm:inline">See The Platform In Action</span>
            <span className="sm:hidden">See Platform</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Feature Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2"
          data-testid="feature-tabs"
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-full font-medium transition-all text-xs sm:text-sm md:text-base lg:text-base overflow-hidden cursor-pointer ${
                activeTab === index
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-600 bg-white"
              }`}
              data-testid={`tab-${feature.id}`}
              onClick={() => {
                setActiveTab(index);
                setProgress(0);
                setIsTransitioning(true);
              }}
            >
              {/* Progress bar background */}
              {activeTab === index && (
                <div className="absolute inset-0 bg-white rounded-full">
                  <div
                    className="h-full rounded-full transition-all duration-75 ease-linear"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: "#c6c6c6",
                    }}
                  />
                </div>
              )}

              {/* Tab text */}
              <span className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl font-normal text-center">
                {feature.title}
              </span>
            </div>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto" data-testid="claims-carousel">
          <div
            className="relative flex items-center justify-center h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[640px] overflow-hidden"
            data-testid="carousel-container"
          >
            {/* Previous Image (Partial) */}
            <div
              className="absolute left-0 z-10 hidden md:block"
              style={{
                height: "90%",
                width: "clamp(8rem, 12vw, 16rem)",
              }}
              data-testid="prev-image-container"
            >
              <img
                src={prevFeature.image}
                alt={prevFeature.title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                data-testid="img-carousel-prev"
                style={{
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "12px",
                }}
              />
            </div>

            {/* Main Image */}
            <div
              className="relative w-full sm:w-4/5 md:w-2/3 lg:w-3/5 xl:w-6xl h-full z-20 mx-auto"
              data-testid="main-image-container"
            >
              <img
                src={currentFeature.image}
                alt={currentFeature.title}
                className="w-full h-full object-cover rounded-xl md:rounded-2xl transition-all duration-700 ease-in-out"
                data-testid="img-carousel-current"
              />

              {/* Text Overlay Card */}
              <div
                className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-4 md:right-4 lg:bottom-8 lg:left-8 lg:right-8 bg-black/75 backdrop-blur-sm text-white p-3 sm:p-4 lg:p-6 rounded-lg md:rounded-xl transition-all duration-700 ease-in-out"
                data-testid="feature-content"
              >
                <h3
                  className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2 lg:mb-3 transition-all duration-500 ease-in-out ${
                    isTransitioning
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                  data-testid="text-feature-title"
                >
                  {currentFeature.title}
                </h3>
                <p
                  className={`text-gray-200 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed transition-all duration-500 ease-in-out delay-100 ${
                    isTransitioning
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                  data-testid="text-feature-description"
                >
                  {currentFeature.description}
                </p>
              </div>
            </div>

            {/* Next Image (Partial) */}
            <div
              className="absolute right-0 h-full z-10 hidden md:block"
              data-testid="next-image-container"
              style={{
                height: "90%",
                width: "clamp(8rem, 12vw, 16rem)",
              }}
            >
              <img
                src={nextFeature.image}
                alt={nextFeature.title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                data-testid="img-carousel-next"
                style={{
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

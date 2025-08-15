
import { Triangle, Shield, Video } from "lucide-react";
import { useState } from "react";

export default function CoreProductsSection() {
  const [activeProduct, setActiveProduct] = useState("AccuraCore");

  const products = [
    {
      id: "AccuraCore",
      title: "AccuraCore",
      description:
        "A Robust, Secure, And Scalable Cloud-Native Infrastructure Platform Powering Enterprise-Level Digital Solutions",
      icon: Triangle,
      image: "https://i.ibb.co/JRs1TsYK/Our-Core-Products-Accuracore.png",
      alt: "Professional woman using AccuraCore dashboard on laptop",
      iconColor: "bg-sparx-primary",
    },
    {
      id: "ClaimCore",
      title: "ClaimCore",
      description:
        "An End-To-End Claim Management Platform Tailored For US Insurance Companies—Automate FNOL, Documents, Approvals, And Compliance.",
      icon: Shield,
      image: "https://i.ibb.co/ycCJYXFQ/Our-Core-Products-Claimcore.png",
      alt: "ClaimCore claim management interface and workflow dashboard",
      iconColor: "bg-red-500",
    },
    {
      id: "AccuraCam",
      title: "AccuraCam",
      description:
        "AI-Powered Video Intelligence For Fleet Monitoring, Smart Campuses, And Real-Time Emergency Alerts With Edge Computing.",
      icon: Video,
      image: "https://i.ibb.co/xtDN08HX/Our-Core-Products-Claimcam.png",
      alt: "AccuraCam video intelligence monitoring system with multiple camera feeds",
      iconColor: "bg-orange-500",
    },
  ];

  const activeProductData =
    products.find((p) => p.id === activeProduct) || products[0];

  return (
    <section
      className="pb-16 sm:pb-20 md:pb-28 lg:pb-36 pt-17 sm:pt-20 md:pt-28 lg:pt-36 px-4 sm:px-6 lg:px-8"
      data-testid="section-core-products"
      style={{ background: "#f3f0e5" }}
    >
      <div className="mx-auto" style={{ maxWidth: "1700px" }}>
        <div className="grid lg:grid-flow-col lg:place-content-between lg:items-start gap-8 sm:gap-12 md:gap-16 lg:gap-32">
          {/* Left Side - Title, Description, and Image */}
          <div data-testid="products-left-content" className="lg:min-w-96">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 sm:mb-6 text-gray-900"
                data-testid="text-products-heading"
              >
                Our
                <br />
                Core Products
              </h2>
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium"
                data-testid="text-products-description"
                style={{ color: "#575654" }}
              >
                Innovative solutions designed to empower businesses across
                claims management, workforce operations, and AI-driven video
                intelligence.
              </p>
            </div>

            {/* Product Image */}
            <div className="relative" data-testid="products-image-container">
              <img
                src={activeProductData.image}
                alt={activeProductData.alt}
                className="w-full rounded-2xl  transition-all duration-300"
                data-testid="img-product-display"
              />
            </div>
          </div>

          {/* Right Side - Product Cards */}
          <div
            className="space-y-4 sm:space-y-6 lg:max-w-2xl"
            data-testid="products-cards-container"
          >
            {products.map((product) => {
              const IconComponent = product.icon;
              const isActive = activeProduct === product.id;

              return (
                <div
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm border cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    isActive
                      ? "border-sparx-primary shadow-lg"
                      : "border-gray-100"
                  }`}
                  data-testid={`card-${product.id.toLowerCase()}`}
                >
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6">
                    <div
                      className={`inline-flex p-2 sm:p-3 md:p-[1.6rem] rounded-lg sm:rounded-xl ${product.iconColor}`}
                    >
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4"
                      data-testid={`text-${product.id.toLowerCase()}-title`}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base md:text-lg lg:text-[1.6rem] leading-relaxed"
                      data-testid={`text-${product.id.toLowerCase()}-desc`}
                      style={{ color: "#808080", lineHeight: "1.3" }}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

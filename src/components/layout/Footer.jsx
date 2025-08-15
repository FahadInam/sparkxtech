import { Button } from "../ui";

export default function Footer() {
  const socialIcons = [
    { url: "https://i.ibb.co/fGSkwzpy/Facebook.png", alt: "Facebook" },
    { url: "https://i.ibb.co/MWKBTqj/Twitter.png", alt: "Twitter" },
    { url: "https://i.ibb.co/LdcBZndm/Linkdin.png", alt: "LinkedIn" },
    { url: "https://i.ibb.co/Q7v916h7/Instagram.png", alt: "Instagram" },
  ];
  return (
    <footer
      className="px-4 sm:px-6 md:px-8 lg:px-10 pb-4 sm:pb-6 md:pb-8 lg:pb-10"
      data-testid="footer-main"
      style={{
        background: "linear-gradient(90deg, #f3f1f1, #f3ece9, #f2e4df)",
      }}
    >
      <div
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-28 rounded-2xl sm:rounded-3xl"
        style={{ background: "#191817" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1700px" }}>
          {/* Main Footer Content */}
          <div
            className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start mb-8 sm:mb-10 md:mb-12"
            data-testid="footer-cta-section"
          >
            {/* Left Side - CTA */}
            <div data-testid="footer-cta-content">
              <h2
                className="text-white font-light tracking-tight whitespace-normal
               leading-[1.05] mb-4 sm:mb-6
               text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8.5rem]"
                data-testid="text-footer-heading"
              >
                <span className="block">Let&apos;s Work</span>
                <span className="block ml-[8rem]">Together</span>
              </h2>
            </div>

            {/* Right Side - Description and Contact Button */}
            <div className="lg:pt-8 lg:ml-auto" data-testid="footer-cta-right">
              <p
                className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-[1.4rem] mb-6 sm:mb-8 leading-relaxed max-w-xl"
                data-testid="text-footer-description"
              >
                AllClaims blends technology and process design to transform
                claims into faster, smarter, and more seamless experiences.
              </p>
              <Button
                className="bg-white text-gray-900 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-7 text-sm sm:text-base md:text-lg rounded-full font-medium hover:bg-gray-100 transition-colors"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div
            className="border-t border-gray-600 mb-8 sm:mb-10 md:mb-12"
            data-testid="footer-divider"
          ></div>

          {/* Footer Links */}
          <div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-32 py-6 sm:py-8 md:py-10"
            data-testid="footer-links-section"
          >
            {/* Logo & Social */}
            <div
              data-testid="footer-logo-social"
              className="sm:col-span-2 md:col-span-1"
            >
              <h3
                className="text-white font-normal mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl"
                data-testid="text-footer-logo-heading"
              >
                Logo
              </h3>
              <div
                className="flex space-x-2 sm:space-x-3"
                data-testid="social-icons"
              >
                {socialIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
                    data-testid={`social-${icon.alt.toLowerCase()}`}
                  >
                    <img
                      src={icon.url}
                      alt={icon.alt}
                      className="h-5 w-5 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div data-testid="footer-address">
              <h3
                className="text-white font-normal mb-6 text-3xl"
                data-testid="text-footer-address-heading"
              >
                Address
              </h3>
              <div className="text-gray-300 space-y-1">
                <p
                  data-testid="text-footer-address-line1 "
                  style={{
                    fontSize: "1.3rem",
                    color: "#858585",
                    whiteSpace: "nowrap",
                  }}
                >
                  356, road - 3, New York,
                </p>
                <p
                  data-testid="text-footer-address-line2"
                  style={{ fontSize: "1.3rem", color: "#858585" }}
                >
                  United State
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div data-testid="footer-contact">
              <h3
                className="text-white font-normal mb-6 text-3xl"
                data-testid="text-footer-contact-heading"
              >
                Contact Us
              </h3>
              <div className="text-gray-300 space-y-3">
                <p
                  data-testid="text-footer-phone1 text-xl"
                  style={{ fontSize: "1.3rem", color: "#858585" }}
                >
                  +0123 57896857
                </p>
                <p
                  data-testid="text-footer-phone2"
                  style={{ fontSize: "1.3rem", color: "#858585" }}
                >
                  +0123 57896857
                </p>
                <p
                  data-testid="text-footer-email"
                  style={{ fontSize: "1.3rem", color: "#858585" }}
                >
                  xyzfreebook@gmail.com
                </p>
              </div>
            </div>

            {/* Our Policies */}
            <div data-testid="footer-policies">
              <h3
                className="text-white font-normal mb-6 text-3xl"
                data-testid="text-footer-policies-heading"
              >
                Our Policies
              </h3>
              <div className="text-gray-300 space-y-3">
                <p
                  className="hover:text-white transition-colors cursor-pointer"
                  data-testid="link-privacy-policies"
                  style={{ fontSize: "1.3rem", color: "#858585" }}
                >
                  Privacy Policies
                </p>
                <p
                  className="hover:text-white transition-colors cursor-pointer"
                  data-testid="link-terms-of-use"
                  style={{ fontSize: "1.3rem", color: "#858585" }}
                >
                  Terms of use
                </p>
                <p
                  className="hover:text-white transition-colors cursor-pointer"
                  data-testid="link-refund-policy"
                  style={{ fontSize: "1.3rem", color: "#858585" }}
                >
                  Refund Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

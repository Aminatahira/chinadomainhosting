import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-text">ARZ Host</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                className="text-text hover:text-primary font-medium"
              >
                Chinese Domain Hosting
              </a>
              <a
                href="https://arzhost.com/region-based-vps/"
                className="text-text hover:text-primary font-medium"
              >
                VPS Region
              </a>
              <a
                href="https://arzhost.com/lifetime-web-hosting/"
                className="text-text hover:text-primary font-medium"
              >
                Lifetime Web Hosting
              </a>
              <a
                href="https://www.arzhost.com/about-us/"
                className="text-text hover:text-primary font-medium"
              >
                About Us
              </a>
              <a
                href="https://www.arzhost.com/contact-us/"
                className="text-text hover:text-primary font-medium"
              >
                Contact
              </a>
            </nav>
            <div className="md:hidden">
              <button className="text-text hover:text-primary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Chinese Domain Hosting
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Host Local. Load Fast. Stay Compliant.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto">
            Reach your Chinese audience with domain hosting that delivers speed,
            reliability, and full legal compliance. Ideal for businesses with or
            targeting .cn domains—our service ensures your site is fast, secure,
            and properly registered in China.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-8">
            <span className="bg-white/20 px-4 py-2 rounded-full">
              ✓ China-Optimized Hosting
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              ✓ Full ICP License Support
            </span>
            <span className="bg-white/20 px-4 py-2 rounded-full">
              ✓ Fast Local Access
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-primary hover:bg-secondary text-lg px-8 py-3"
            >
              <a href="https://arzhost.com/domain/">Choose a Plan</a>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Speak with a Hosting Advisor
            </Button>
          </div>
        </div>
      </section>

      {/* What Is Chinese Domain Hosting Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
              What Is Chinese Domain Hosting?
            </h2>
            <p className="text-lg text-text leading-relaxed mb-4">
              Chinese domain hosting means hosting your .cn domain on servers
              located inside Mainland China. This setup ensures faster loading
              speeds for local users and complies with all relevant Chinese
              regulations.
            </p>
            <p className="text-lg text-text leading-relaxed">
              In short: you get a legally sound, high-performing site built for
              the Chinese market.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Chinese Domain Hosting Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
            Why Choose Our Chinese Domain Hosting?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                Lightning-Fast Local Loading
              </h3>
              <p className="text-text">
                By placing your domain inside China, visitor experience improves
                thanks to reduced latency and faster page loads. No lag from
                international routing means site visitors stay engaged and
                conversions rise.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                Higher Search Engine Visibility
              </h3>
              <p className="text-text">
                Hosting within China boosts your rankings on Baidu and other
                local search platforms. Gain an advantage with improved indexing
                and stronger visibility in front of your target audience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                Full Regulatory Compliance
              </h3>
              <p className="text-text">
                We support you through ICP and domain registration rules,
                reducing legal risk from day one. Stay focused on growth—let us
                handle the approval processes and documentation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                Boosted Trust, Lower Bounce Rates
              </h3>
              <p className="text-text">
                Local hosting builds confidence among Chinese users and keeps
                them on your site longer. A fast-loading, compliant website
                increases credibility and sales potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert ICP Licensing Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
              Expert ICP Licensing Support
            </h2>
            <p className="text-lg text-text leading-relaxed mb-4">
              Don't know if you need a license? We'll handle the details and
              guide you step by step.
            </p>
            <p className="text-lg text-text leading-relaxed">
              Choose one of our pre-approved hosted domains if you want to skip
              the process entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-8">
              Complete Guide to Chinese Domain Hosting
            </h2>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/YlBHWBiMS64"
                title="Chinese Domain Hosting and ICP License Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Hosting Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
            Powerful Hosting Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-secondary rounded-lg p-6">
              <h3 className="text-xl font-bold text-text mb-3">
                Mainland China Server Hosting
              </h3>
              <p className="text-text">
                All domains are hosted locally for optimal connection speeds and
                compliance.
              </p>
            </div>
            <div className="border border-secondary rounded-lg p-6">
              <h3 className="text-xl font-bold text-text mb-3">
                SSL Certificates Included
              </h3>
              <p className="text-text">
                Secure your site and visitors' data with encrypted connections
                as standard.
              </p>
            </div>
            <div className="border border-secondary rounded-lg p-6">
              <h3 className="text-xl font-bold text-text mb-3">
                Free ICP Consultation & Support
              </h3>
              <p className="text-text">
                We help you determine licensing needs and assist with all
                paperwork.
              </p>
            </div>
            <div className="border border-secondary rounded-lg p-6">
              <h3 className="text-xl font-bold text-text mb-3">
                Optional Email Hosting Integration
              </h3>
              <p className="text-text">
                Want branded emails like you@yourdomain.cn? Add fast, compliant
                email services to your plan.
              </p>
            </div>
            <div className="border border-secondary rounded-lg p-6">
              <h3 className="text-xl font-bold text-text mb-3">
                Daily Backups & Live Monitoring
              </h3>
              <p className="text-text">
                Protect your data with automatic backups and constant server
                monitoring.
              </p>
            </div>
            <div className="border border-secondary rounded-lg p-6">
              <h3 className="text-xl font-bold text-text mb-3">
                Around-the-Clock Bilingual Support
              </h3>
              <p className="text-text">
                Our team is ready in both English and Chinese to help with any
                technical or procedural questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
            Who Should Use Chinese Domain Hosting?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-text mb-3">
                Established Chinese Firms (.cn owners)
              </h3>
              <p className="text-text">
                Maintain fast, legal, and stable hosting that's optimized for
                local audiences.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text mb-3">
                International Companies Targeting China
              </h3>
              <p className="text-text">
                Host your Chinese site locally to improve speed, governance, and
                customer trust.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text mb-3">
                E-commerce & Online Publishers
              </h3>
              <p className="text-text">
                Speed and reliability are essential—don't let slow loading
                affect your sales or readership.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text mb-3">
                Educational Institutions & NGOs
              </h3>
              <p className="text-text">
                Ensure secure handling of user data and compliance with domestic
                regulations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-text mb-3">
                Anyone Facing Slow Offshore Hosting
              </h3>
              <p className="text-text">
                If current international hosting performs poorly in China, our
                service is your solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-8">
            Hosting Plans to Suit Every Need
          </h2>
          <p className="text-lg text-text text-center mb-12 max-w-3xl mx-auto">
            Choose the plan that fits your budget and goals. All our plans are
            competitively priced and designed for the Chinese market.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="border border-secondary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-text mb-4">Basic Plan</h3>
              <p className="text-text mb-6">
                Ideal for small sites, personal blogs, and entry-level
                businesses. Includes local hosting, SSL, ICP help, daily
                backups, and bilingual support.
              </p>
              <Button asChild className="w-full">
                <a href="https://arzhost.com/domain/">Choose Basic Plan</a>
              </Button>
            </div>
            <div className="border-2 border-primary rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">
                Business Plan
              </h3>
              <p className="text-text mb-6">
                A step up for growing ventures. Adds more storage,
                professional-grade email, advanced DNS tools, and priority
                technical support.
              </p>
              <Button asChild className="w-full">
                <a href="https://arzhost.com/domain/">Choose Business Plan</a>
              </Button>
            </div>
            <div className="border border-secondary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-text mb-4">
                Enterprise Plan
              </h3>
              <p className="text-text mb-6">
                For large businesses or high-traffic platforms. Offers dedicated
                servers, guaranteed uptime SLA, CDN options, and a personal
                account manager.
              </p>
              <Button asChild className="w-full">
                <a href="https://arzhost.com/domain/">Choose Enterprise Plan</a>
              </Button>
            </div>
          </div>
          <div className="mt-12 bg-secondary rounded-lg p-8">
            <h3 className="text-2xl font-bold text-text text-center mb-6">
              Every Plan Includes:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-accent mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text">China-Optimized Hosting</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-accent mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text">GDPR + PIPL Compliance</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-accent mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text">SSL for Secure Browsing</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-accent mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text">Daily Backups & Monitoring</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-accent mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text">Full ICP Licensing Support</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-accent mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text">
                  Bilingual Technical Assistance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Host in China?
          </h2>
          <p className="text-xl mb-8">
            Make your .cn domain fast, legal, and trusted in Mainland China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-primary hover:bg-secondary text-lg px-8 py-3"
            >
              <a href="https://arzhost.com/domain/">Choose a Plan</a>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Speak with a Hosting Advisor
            </Button>
          </div>
          <div className="mt-8">
            <p className="text-lg">
              Looking for{" "}
              <a
                href="https://arzhost.com/domain/"
                className="underline hover:text-secondary"
              >
                VPS hosting Hong Kong
              </a>
              ? Visit our main site at{" "}
              <a
                href="https://arzhost.com/domain/"
                className="underline hover:text-secondary"
              >
                ARZ Host
              </a>{" "}
              for more options.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ARZ Host</h3>
              <p className="text-gray-300 mb-4">
                Professional hosting services with a focus on performance,
                security, and compliance.
              </p>
              <p className="text-gray-300">
                "We believe in providing hosting solutions that help businesses
                succeed in the global marketplace."
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://arzhost.com/hosting/china-based-vps-server-hosting/"
                    className="text-gray-300 hover:text-white"
                  >
                    Chinese Domain Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/region-based-vps/"
                    className="text-gray-300 hover:text-white"
                  >
                    VPS Region
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/lifetime-web-hosting/"
                    className="text-gray-300 hover:text-white"
                  >
                    Lifetime Web Hosting
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com/"
                    className="text-gray-300 hover:text-white"
                  >
                    Our Hosting Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.arzhost.com/about-us/"
                    className="text-gray-300 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/contact-us/"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/terms-conditions/"
                    className="text-gray-300 hover:text-white"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/privacy-policy/"
                    className="text-gray-300 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.arzhost.com/disclaimer/"
                    className="text-gray-300 hover:text-white"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  Website:{" "}
                  <a href="https://arzhost.com/" className="hover:text-white">
                    arzhost.com
                  </a>
                </li>
                <li>Phone: +1 (631) 594-8060</li>
                <li>Email: info@arzhost.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>
              &copy; 2024 ARZ Host. All rights reserved. Professional Chinese
              domain hosting services.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

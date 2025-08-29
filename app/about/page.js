import TeamSection from "./TeamSection";

export const metadata = {
  title: "About Us - HGenix Solutions | Leading IT Company in Jodhpur",
  description:
    "Learn about HGenix Solutions, a trusted IT company in Jodhpur, Rajasthan with 5+ years of experience and 45+ successful projects in web development, mobile apps, and cybersecurity.",
  keywords:
    "about HGenix Solutions, IT company Jodhpur, web development company Rajasthan, mobile app developers India, cybersecurity experts",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                About HGenix Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A leading IT company in Jodhpur, Rajasthan, dedicated to
              empowering businesses with secure and innovative technology
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Import the client-side animated section */}
      <TeamSection />
    </main>
  );
}

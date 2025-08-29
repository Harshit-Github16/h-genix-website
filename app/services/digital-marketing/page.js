export const metadata = {
  title: 'Digital Marketing Services | HGenix Solutions Jodhpur',
  description: 'Professional digital marketing services in Jodhpur, Rajasthan. SEO, social media marketing, PPC campaigns, content marketing. Increase online sales by 70%.',
  keywords: 'digital marketing Jodhpur, SEO services Rajasthan, social media marketing India, PPC campaigns, content marketing, online marketing Jodhpur',
};

export default function DigitalMarketing() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                Digital Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing strategies that drive traffic, generate leads, and boost your online presence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Growth-Driven Marketing</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our proven digital marketing strategies have helped clients increase their online sales by up to 70%. 
                We combine data-driven insights with creative campaigns to deliver measurable results.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Search Engine Optimization</h3>
                    <p className="text-gray-600">Improve your Google rankings and organic traffic</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Social Media Marketing</h3>
                    <p className="text-gray-600">Engage audiences across all major social platforms</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">PPC Campaigns</h3>
                    <p className="text-gray-600">Targeted advertising with maximum ROI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Marketing Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Google Analytics', 'Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'Email Marketing', 'Content Strategy', 'SEO Tools'].map((tool, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg text-center font-medium">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
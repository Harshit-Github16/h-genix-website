export const metadata = {
  title: 'IT Consulting Services | HGenix Solutions Jodhpur',
  description: 'Strategic IT consulting services in Jodhpur, Rajasthan. Technology strategy, digital transformation, infrastructure optimization, and IT advisory services.',
  keywords: 'IT consulting Jodhpur, technology strategy Rajasthan, digital transformation India, IT advisory services, infrastructure consulting, technology planning',
};

export default function ITConsulting() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                IT Consulting
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic IT consulting to optimize your technology infrastructure and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Technology Planning</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our IT consulting services help businesses make informed technology decisions, optimize existing 
                systems, and plan for future growth with scalable and secure solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technology Assessment</h3>
                    <p className="text-gray-600">Comprehensive evaluation of your current IT infrastructure</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Digital Transformation</h3>
                    <p className="text-gray-600">Roadmap for modernizing your business processes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cost Optimization</h3>
                    <p className="text-gray-600">Reduce IT costs while improving efficiency</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Consulting Areas</h3>
              <div className="space-y-4">
                {['Technology Strategy', 'Digital Transformation', 'Infrastructure Planning', 'Security Assessment', 'Process Optimization', 'Vendor Selection', 'Risk Management', 'IT Governance'].map((area, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg font-medium">
                    {area}
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
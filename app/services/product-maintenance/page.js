export const metadata = {
  title: 'Product Maintenance Services | HGenix Solutions Jodhpur',
  description: 'Professional product maintenance and support services in Jodhpur, Rajasthan. 24/7 technical support, updates, bug fixes, and performance optimization.',
  keywords: 'product maintenance Jodhpur, software support Rajasthan, 24/7 technical support India, bug fixes, performance optimization, website maintenance',
};

export default function ProductMaintenance() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                Product Maintenance
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maintenance and support services to keep your digital products running smoothly and securely.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">24/7 Support & Maintenance</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated maintenance team ensures your applications and websites are always up-to-date, 
                secure, and performing at their best. We provide proactive monitoring and quick issue resolution.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Regular Updates</h3>
                    <p className="text-gray-600">Security patches and feature updates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Performance Monitoring</h3>
                    <p className="text-gray-600">Continuous monitoring and optimization</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bug Fixes</h3>
                    <p className="text-gray-600">Quick resolution of issues and bugs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Maintenance Services</h3>
              <div className="space-y-4">
                {['Security Updates', 'Performance Optimization', 'Database Maintenance', 'Backup Management', 'Server Monitoring', 'Content Updates', 'Bug Fixes', 'Technical Support'].map((service, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg font-medium">
                    {service}
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
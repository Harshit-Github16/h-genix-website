export const metadata = {
  title: 'Cloud Solutions & Services | HGenix Solutions Jodhpur',
  description: 'Professional cloud computing services in Jodhpur, Rajasthan. AWS, Azure, Google Cloud migration, infrastructure management, and cloud security solutions.',
  keywords: 'cloud solutions Jodhpur, cloud migration Rajasthan, AWS services India, Azure consulting, Google Cloud Platform, cloud security, infrastructure management',
};

export default function CloudSolutions() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                Cloud Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable cloud infrastructure solutions that grow with your business and provide enterprise-grade reliability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise Cloud Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Transform your IT infrastructure with our comprehensive cloud solutions. We help businesses 
                migrate, optimize, and manage their cloud environments for maximum efficiency and cost savings.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cloud Migration</h3>
                    <p className="text-gray-600">Seamless transition from on-premise to cloud</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Auto Scaling</h3>
                    <p className="text-gray-600">Dynamic resource allocation based on demand</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Security & Compliance</h3>
                    <p className="text-gray-600">Industry-standard security and compliance measures</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Cloud Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {['AWS', 'Microsoft Azure', 'Google Cloud', 'DigitalOcean', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'].map((tech, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg text-center font-medium">
                    {tech}
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
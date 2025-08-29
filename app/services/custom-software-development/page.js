export const metadata = {
  title: 'Custom Software Development | HGenix Solutions Jodhpur',
  description: 'Custom software development services in Jodhpur, Rajasthan. Tailored business solutions, enterprise applications, API development with modern technologies.',
  keywords: 'custom software development Jodhpur, bespoke software Rajasthan, enterprise applications India, API development, business software solutions, custom programming',
};

export default function CustomSoftwareDevelopment() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                Custom Software Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored software solutions designed specifically for your business needs and processes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Bespoke Business Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                We develop custom software applications that perfectly align with your business processes, 
                workflows, and objectives. Our solutions are built to scale and evolve with your growing business needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Requirements Analysis</h3>
                    <p className="text-gray-600">Deep understanding of your business processes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Scalable Architecture</h3>
                    <p className="text-gray-600">Built to handle growth and increasing demands</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Integration Ready</h3>
                    <p className="text-gray-600">Seamless integration with existing systems</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Development Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Python', 'Java', 'C#/.NET', 'Node.js', 'React', 'Angular', 'PostgreSQL', 'MongoDB'].map((tech, index) => (
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
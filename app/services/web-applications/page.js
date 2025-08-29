export const metadata = {
  title: 'Web Applications Development | HGenix Solutions Jodhpur',
  description: 'Professional web application development services in Jodhpur, Rajasthan. Custom web apps, responsive design, modern frameworks. 5+ years experience with secure, scalable solutions.',
  keywords: 'web application development Jodhpur, custom web apps Rajasthan, responsive web design India, React Angular Vue development, progressive web apps PWA',
};

export default function WebApplications() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                Web Applications Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build powerful, responsive web applications that deliver exceptional user experiences and drive business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Modern Web Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our web application development services combine cutting-edge technologies with proven methodologies 
                to create scalable, secure, and high-performance web applications tailored to your business needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Responsive Design</h3>
                    <p className="text-gray-600">Optimized for all devices and screen sizes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Modern Frameworks</h3>
                    <p className="text-gray-600">React, Angular, Vue.js, and Next.js expertise</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Security First</h3>
                    <p className="text-gray-600">Built-in security measures and best practices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-cyan-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React.js', 'Next.js', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'].map((tech, index) => (
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
export const metadata = {
  title: 'Product Design & UI/UX Services | HGenix Solutions Jodhpur',
  description: 'Professional product design and UI/UX services in Jodhpur, Rajasthan. User-centered design, wireframing, prototyping, and interface design for web and mobile apps.',
  keywords: 'product design Jodhpur, UI UX design Rajasthan, user experience design India, wireframing prototyping, interface design, mobile app design',
};

export default function ProductDesign() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                Product Design
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              User-centered design solutions that create intuitive, engaging, and conversion-focused digital experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">User-Centered Design</h2>
              <p className="text-lg text-gray-600 mb-8">
                We create designs that not only look beautiful but also provide exceptional user experiences. 
                Our design process focuses on understanding your users and creating solutions that meet their needs effectively.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">User Research</h3>
                    <p className="text-gray-600">Understanding your audience and their needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Wireframing & Prototyping</h3>
                    <p className="text-gray-600">Interactive prototypes for better visualization</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Responsive Design</h3>
                    <p className="text-gray-600">Designs that work perfectly on all devices</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Design Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Figma', 'Adobe XD', 'Sketch', 'Adobe Creative Suite', 'Principle', 'InVision', 'Zeplin', 'Framer'].map((tool, index) => (
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
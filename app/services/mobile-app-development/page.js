export const metadata = {
  title: 'Mobile App Development | HGenix Solutions Jodhpur',
  description: 'Expert mobile app development services in Jodhpur, Rajasthan. iOS, Android & cross-platform apps. React Native, Flutter development with 5+ years experience.',
  keywords: 'mobile app development Jodhpur, iOS app development Rajasthan, Android app development India, React Native Flutter developers, cross-platform mobile apps',
};

export default function MobileAppDevelopment() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                Mobile App Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create innovative mobile applications for iOS and Android platforms with cutting-edge technology and user-centric design.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cross-Platform Excellence</h2>
              <p className="text-lg text-gray-600 mb-8">
                We develop high-performance mobile applications using React Native and Flutter, 
                ensuring your app works seamlessly across both iOS and Android platforms while 
                maintaining native performance and user experience.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Native Performance</h3>
                    <p className="text-gray-600">Optimized for speed and smooth user interactions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">App Store Optimization</h3>
                    <p className="text-gray-600">Ready for Apple App Store and Google Play Store</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Push Notifications</h3>
                    <p className="text-gray-600">Real-time engagement features</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Development Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin', 'Firebase', 'Node.js', 'MongoDB', 'AWS'].map((tech, index) => (
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
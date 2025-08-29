export const metadata = {
  title: 'Cyber Security Solutions | HGenix Solutions Jodhpur',
  description: 'Professional cybersecurity services in Jodhpur, Rajasthan. Security audits, penetration testing, vulnerability assessment, data protection, and security consulting.',
  keywords: 'cybersecurity solutions Jodhpur, security audit Rajasthan, penetration testing India, data protection, vulnerability assessment, security consulting, cyber threats',
};

export default function CyberSecuritySolutions() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                Cyber Security Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cybersecurity services to protect your digital assets and ensure business continuity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Enterprise Security</h2>
              <p className="text-lg text-gray-600 mb-8">
                Protect your business from cyber threats with our comprehensive security solutions. 
                We provide end-to-end security services from assessment to implementation and ongoing monitoring.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Security Audits</h3>
                    <p className="text-gray-600">Comprehensive evaluation of your security posture</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Penetration Testing</h3>
                    <p className="text-gray-600">Identify vulnerabilities before attackers do</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Data Protection</h3>
                    <p className="text-gray-600">Advanced encryption and data security measures</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Security Services</h3>
              <div className="space-y-4">
                {['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Data Encryption', 'Network Security', 'Compliance Consulting', 'Incident Response', 'Security Training'].map((service, index) => (
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
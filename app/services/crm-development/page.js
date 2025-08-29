export const metadata = {
  title: 'CRM Development Services | HGenix Solutions Jodhpur',
  description: 'Custom CRM development services in Jodhpur, Rajasthan. Customer relationship management systems, sales automation, lead management, and CRM integration.',
  keywords: 'CRM development Jodhpur, customer relationship management Rajasthan, CRM software India, sales automation, lead management system, custom CRM solutions',
};

export default function CRMDevelopment() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                CRM Development
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom CRM systems to streamline customer relationships and boost sales productivity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Smart Customer Management</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our custom CRM solutions help businesses manage customer relationships effectively, 
                automate sales processes, and gain valuable insights through analytics and reporting.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Lead Management</h3>
                    <p className="text-gray-600">Track and nurture leads through the sales funnel</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Sales Automation</h3>
                    <p className="text-gray-600">Automate repetitive tasks and workflows</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Analytics & Reports</h3>
                    <p className="text-gray-600">Detailed insights and performance metrics</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">CRM Features</h3>
              <div className="space-y-4">
                {['Contact Management', 'Lead Tracking', 'Sales Pipeline', 'Email Integration', 'Task Management', 'Reporting Dashboard', 'Mobile Access', 'Third-party Integration'].map((feature, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg font-medium">
                    {feature}
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
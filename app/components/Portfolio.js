'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const stats = [
  {
    icon: Award,
    number: '45+',
    label: 'Projects Completed',
    description: 'Successful projects delivered across various industries'
  },
  {
    icon: Users,
    number: '30+',
    label: 'Happy Clients',
    description: 'Satisfied clients who trust our expertise'
  },
  {
    icon: TrendingUp,
    number: '5+',
    label: 'Years Experience',
    description: 'Years of excellence in IT solutions'
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Support Available',
    description: 'Round-the-clock technical assistance'
  }
];

const industries = [
  'E-commerce & Retail',
  'Healthcare & Medical',
  'Education & Training',
  'Finance & Banking',
  'Real Estate',
  'Manufacturing',
  'Travel & Tourism',
  'Food & Restaurant'
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-400 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven results and satisfied clients across multiple industries in India and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="glass-card p-8 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:animate-glow">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-cyan-400 font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-300 text-sm">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Industries We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white font-medium text-sm">{industry}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
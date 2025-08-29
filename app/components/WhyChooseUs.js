'use client';

import { motion } from 'framer-motion';
import { Shield, Lightbulb, TrendingUp, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security measures implemented in every solution we deliver.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Cutting-edge technologies and innovative approaches to solve complex challenges.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Solutions designed to grow with your business and adapt to future needs.',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock technical support to ensure your systems run smoothly.',
    gradient: 'from-purple-500 to-indigo-500'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
              Why Choose HGenix?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with business understanding to deliver solutions that drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300 blur-xl`}></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
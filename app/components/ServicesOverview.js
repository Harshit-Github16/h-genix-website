'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  TrendingUp, 
  Settings, 
  Palette, 
  Users, 
  Code, 
  Shield, 
  Database,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Responsive, scalable web applications built with modern frameworks and technologies.',
    href: '/services/web-applications',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    href: '/services/mobile-app-development',
    gradient: 'from-cyan-500 to-purple-500'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    href: '/services/cloud-solutions',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Complete digital marketing strategies to grow your online presence.',
    href: '/services/digital-marketing',
    gradient: 'from-pink-500 to-red-500'
  },
  {
    icon: Settings,
    title: 'Product Maintenance',
    description: 'Ongoing support and maintenance for your digital products and applications.',
    href: '/services/product-maintenance',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: Palette,
    title: 'Product Design',
    description: 'User-centered design and UX/UI development for digital products.',
    href: '/services/product-design',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic IT consulting to optimize your technology infrastructure.',
    href: '/services/it-consulting',
    gradient: 'from-green-500 to-blue-500'
  },
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    href: '/services/custom-software-development',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Shield,
    title: 'Cyber Security Solutions',
    description: 'Comprehensive cybersecurity services to protect your digital assets.',
    href: '/services/cyber-security-solutions',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Database,
    title: 'CRM Development',
    description: 'Custom CRM systems to streamline your customer relationship management.',
    href: '/services/crm-development',
    gradient: 'from-purple-500 to-cyan-500'
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business with cutting-edge technology and security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-white/70 backdrop-blur-lg rounded-xl p-6 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-primary-600 font-medium group-hover:text-cyan-500 transition-colors">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
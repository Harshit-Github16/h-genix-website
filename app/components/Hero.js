'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent hero-text-glow">
                Empowering Ideas
              </span>
              <br />
              <span className="text-gray-800">with Secure Technology</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Leading IT company in Jodhpur with 5+ years of experience and 45+ successful projects. 
              We deliver cutting-edge technology solutions with enterprise-grade security.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 text-white font-semibold rounded-full hover:from-primary-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-600 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                  45+
                </div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -5 }}
              >
                <Shield className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Secure Solutions</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade security for all your digital assets</p>
              </motion.div>
              <motion.div 
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 mt-8"
                whileHover={{ y: -5 }}
              >
                <Zap className="h-12 w-12 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">Quick turnaround with quality assurance</p>
              </motion.div>
              <motion.div 
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 -mt-4"
                whileHover={{ y: -5 }}
              >
                <Globe className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Standards</h3>
                <p className="text-gray-600 text-sm">International quality and best practices</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
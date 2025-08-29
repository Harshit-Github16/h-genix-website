'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: "HGenix transformed our business with their mobile app. Excellent support and timely delivery!",
    author: "Rajesh Sharma",
    location: "Jaipur",
    rating: 5
  },
  {
    text: "Very professional team. They built a scalable cloud solution for us. Highly recommended.",
    author: "Priya Mehta", 
    location: "Mumbai",
    rating: 5
  },
  {
    text: "From design to deployment, HGenix handled everything smoothly. Great experience.",
    author: "Ankit Verma",
    location: "Delhi",
    rating: 5
  },
  {
    text: "Their digital marketing strategies increased our online sales by 70%. Truly amazing!",
    author: "Neha Gupta",
    location: "Bangalore",
    rating: 5
  },
  {
    text: "We needed a secure CRM and HGenix delivered beyond expectations.",
    author: "Arvind Kumar",
    location: "Pune",
    rating: 5
  },
  {
    text: "A reliable IT partner – quick support and futuristic solutions.",
    author: "Sneha Kapoor",
    location: "Ahmedabad", 
    rating: 5
  }
];

export default function TestimonialsCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="py-20"></div>;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses across India for delivering exceptional IT solutions.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 h-full relative"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-cyan-400 opacity-50" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-200 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
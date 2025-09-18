"use client";

import React, { useEffect, useState } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img from "@/assets/images/mobile-cover.png";

const TeamSection: React.FC = () => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    let interval: any;
    if (inView) {
      let start = 0;
      interval = setInterval(() => {
        start++;
        setCount(start);
        if (start >= 30) clearInterval(interval);
      }, 30);
    } else {
      setCount(0);
    }
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="section-padding bg-gradient-to-br from-black to-tech-indigo overflow-hidden relative"
    >
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 mt-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Our Creative Team
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            The brilliant minds behind our success
          </p>
        </motion.div>

        {/* Team Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group w-full"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-tech-blue/40 to-tech-purple/40 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Main Image */}
          <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-white/10 group-hover:border-white/20 transition-all duration-500 mb-10 w-full">
            <motion.img
              src={img}
              alt="Our team working together"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay Message */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Meet The Team
                </h3>
                <p className="text-gray-300 md:text-lg">
                  A diverse group of professionals dedicated to excellence
                </p>
              </div>
            </div>

            {/* Hover Message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 backdrop-blur-sm"
            >
              <div className="text-center p-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Collaboration & Innovation
                </h3>
                <p className="text-gray-300 mb-5 max-w-md mx-auto md:text-lg">
                  Together we create solutions that make a difference
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Twitter className="h-5 w-5 md:h-6 md:w-6" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="h-5 w-5 md:h-6 md:w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-5 right-8 bg-gradient-to-r from-tech-blue to-tech-purple text-white px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-lg"
          >
            {count}+ Professionals
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

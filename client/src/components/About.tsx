import React from "react";
import { motion } from "framer-motion";
import aiImage from "../assets/images/about.png"; // your image path

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const SolutionsSection: React.FC = () => {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20 font-sans relative overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full -z-10"></div>

      {/* Heading Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:grid md:grid-cols-2 md:items-start md:gap-10 text-center md:text-left mb-12"
      >
        {/* Badge + Title */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center md:items-start"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-block border border-purple-500 text-white font-semibold text-sm px-4 py-1 rounded bg-transparent mb-4 md:mb-6 tracking-wide"
          >
            Built by Founders, for Founders
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[#ff4e50] via-[#ed5fc9] to-[#9b51e0] bg-clip-text text-transparent"
          >
            Our Vision, Our Mission
          </motion.h2>
        </motion.div>

        {/* Right Paragraph */}
        <motion.p
          variants={fadeInUp}
          className="text-sm md:text-base text-gray-300 leading-relaxed mt-8 md:mt-0"
        >
          A powerful and privacy-first platform, crafted for founders, startups,
          and growing businesses. From customer relationships to operations,
          billing, and productivity — Founders Club powers your journey with
          tools that just work.
        </motion.p>
      </motion.div>

      {/* Image + Text Section */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#0C0D1A] rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 overflow-hidden shadow-lg shadow-purple-900/20"
      >
        {/* Left Image */}
        <motion.div
          variants={fadeInUp}
          className="w-full md:w-1/2 overflow-hidden"
        >
          <motion.img
            src={aiImage}
            alt="AI Creative"
            className="object-cover w-full h-96 max-h-[300px] md:max-h-none rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={staggerContainer}
          className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#ff4e50] via-[#ed5fc9] to-[#9b51e0] bg-clip-text text-transparent"
          >
            We're not just another Software Company
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-gray-300 leading-relaxed text-justify"
          >
            We're builders, dreamers, and doers—just like you. Founders Club was
            born from real challenges, real late nights, and the relentless
            pursuit to simplify business. We've felt the chaos of juggling too
            many tools, the frustration of broken workflows, and the pressure of
            scaling with limited resources. That's why we created a platform
            that works the way founders think—fast, flexible, and focused on
            what really matters.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SolutionsSection;

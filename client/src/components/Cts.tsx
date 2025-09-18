"use client";

import { Img } from "react-image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/assets/images/Empol/Rahul.jpg"
import img2 from "@/assets/images/Empol/Chetan.jpg"
import img3 from "@/assets/images/Empol/11 (1).png"
import img4 from "@/assets/images/Empol/11 (14).jpg"
import img5 from "@/assets/images/Empol/11 (6).png"
import img6 from "@/assets/images/Empol/11 (3).png"
import img7 from "@/assets/images/Empol/11 (16).jpg"
import img8 from "@/assets/images/Empol/11 (8).png"
import img9 from "@/assets/images/Empol/11 (9).png"
import img10 from "@/assets/images/Empol/11 (5).png"
import img11 from "@/assets/images/Empol/11 (18).jpg"
import img12 from "@/assets/images/Empol/11 (13).jpg"


type EmpolMember = {
  id: number;
  name: string;
  position: string;
  imageSrc: string;
  instagram: string;
  category: string;
  specialCard?: boolean;
  hiring?: boolean;
};

export default function EmpolSection() {
  const EmpolMembers: EmpolMember[] = [
    { id: 1, name: "Chetan Pawar", position: "Capital Partner", imageSrc: img2 , instagram: "https://www.instagram.com/cp.0009", category: "directors" },


    { id: 2, name: "Rahul Pawar", position: "Founder", imageSrc: img1, instagram: "https://www.linkedin.com/in/rahul-pawar", category: "directors" },

    // Manager Section
    { id: 3, name: "Swapnil Gunake", position: "Project Manager", imageSrc: img3, instagram: "https://www.linkedin.com/in/swapnil-gunake", category: "manager", specialCard: true },

    { id: 13, name: "We're Hiring!", position: "Assistant Project Manager", imageSrc: img4, instagram: "#", category: "manager", hiring: true },

    // Web Development
    { id: 4, name: "Faizan Sheikh", position: "Web Development Team Lead", imageSrc: img5, instagram: "https://www.linkedin.com/in/faizan-ashpak-sheikh", category: "web" },

    { id: 5, name: "Samina Begum", position: "Web Development Manager", imageSrc: img12, instagram: "#", category: "web" },

    // Software
    { id: 6, name: "Dhanashree Parale", position: "Software Development", imageSrc: img6, instagram: "http://linkedin.com/in/dhanashree-parale", category: "software" },

    { id: 7, name: "Tushar Goswami", position: "Software Dev Team Leader", imageSrc:img7, instagram: "https://www.linkedin.com/in/rayhan-shaikh", category: "software" },

    // AI
    { id: 8, name: "Pranav Mete", position: "AI Research Team", imageSrc: img8, instagram: "https://www.linkedin.com/in/pranavmete123/", category: "ai" },

    { id: 9, name: "Pranav Gaikwad", position: "AI Research Team", imageSrc: img9, instagram: "https://www.linkedin.com/in/pranav-gaikwad", category: "ai" },

    // Marketing
    { id: 10, name: "Kunal Pawar", position: "Digital Marketing", imageSrc: img10, instagram: "https://www.linkedin.com/in/kunal-pawar", category: "marketing", specialCard: true },
    { id: 14, name: "Krip Shah", position: "Digital Marketer", imageSrc: img11, instagram: "", category: "marketing" },

    // Sales Team
    // { id: 11, name: "Siddhant Gaikwad", position: "Senior Sales Manager", imageSrc: "/image/Empol/11 (11).png", instagram: "https://www.linkedin.com/in/siddhant-gaikwad", category: "sales" },
    // { id: 12, name: "Aditya Sabnis", position: "IT Sales Consultant", imageSrc: "/image/Empol/11 (19).jpg", instagram: "https://www.linkedin.com/in/krishna-suthar", category: "sales" },

    // ✅ New Hiring Cards in Sales Team
    { id: 15, name: "We're Hiring!", position: "Business Development Executive", imageSrc: "/image/Empol/11 (20).jpg", instagram: "#", category: "sales", hiring: true },
    { id: 16, name: "We're Hiring!", position: "Sales Intern", imageSrc: "/image/Empol/11 (21).jpg", instagram: "#", category: "sales", hiring: true },
  ];

  const categories = [
    { id: "directors", name: "Directors" },
    { id: "manager", name: "Manager" },
    { id: "sales", name: "Sales Team" },
    { id: "web", name: "Web Development" },
    { id: "software", name: "Software Developers" },
    { id: "ai", name: "AI Solutions" },
    { id: "marketing", name: "Digital Marketing" },
  ];

  const [activeCategory, setActiveCategory] = useState("directors");
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval: any;
    if (inView || isMobile) {
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
  }, [inView, isMobile]);

  const filteredMembers = EmpolMembers.filter(
    (member) => member.category === activeCategory
  );

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -15, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    exit: { opacity: 0, y: -60, scale: 0.85, transition: { duration: 0.3 } },
  };

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 sm:mb-16">
          {/* Left Heading */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#ED5FC9] via-[#A855F7] to-[#6366F1]">
              Our Employee
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ED5FC9] via-[#A855F7] to-[#6366F1]">
                PTS
              </span>{" "}
              Network experts: uniting talent for intelligent solutions
            </h1>
            <div className="mt-4 sm:mt-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ED5FC9] via-[#A855F7] to-[#6366F1]">
                {count}+
              </div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                Awesome Employee members
              </p>
            </div>
          </div>

          {/* Category Tabs + Members */}
          <div className="space-y-5">
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-[#ED5FC9] via-[#A855F7] to-[#6366F1] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Cards (Always 2x2 grid) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {filteredMembers.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    whileHover={{
                      rotateX: 5,
                      rotateY: -5,
                      scale: 1.05,
                      boxShadow: "0px 12px 25px rgba(59, 130, 246, 0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 12 }}
                    className={`bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden group ${
                      member.specialCard ? "md:w-[90%] lg:w-[80%] mx-auto" : ""
                    } ${
                      member.hiring ? "border-2 border-dashed border-red-500" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative ${
                        member.specialCard ? "h-60 sm:h-64" : "h-64 sm:h-72"
                      } w-full overflow-hidden`}
                    >
                      <Img
                        src={member.imageSrc}
                        alt={member.name}
                        className={`object-cover w-full h-full rounded-t-xl sm:rounded-t-2xl transition-transform duration-700 group-hover:scale-110 ${
                          member.hiring ? "opacity-80" : ""
                        }`}
                      />
                      {member.hiring && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <div className="text-center p-4">
                            <span className="inline-block bg-red-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full mb-2 animate-pulse">
                              JOIN OUR TEAM
                            </span>
                            <h3 className="text-white text-xl sm:text-2xl font-bold">
                              We're Hiring!
                            </h3>
                          </div>
                        </div>
                      )}
                      {/* Overlay */}
                      <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center pb-5"
                      >
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black hover:bg-black hover:text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 transform hover:scale-110 shadow"
                        >
                          in
                        </a>
                      </motion.div>
                    </div>
                    {/* Info */}
                    <div
                      className={`p-3 sm:p-4 text-center ${
                        member.hiring
                          ? "bg-gradient-to-r from-red-50 to-gray-100"
                          : "bg-gradient-to-r from-gray-50 to-white"
                      }`}
                    >
                      <h3 className="text-base sm:text-lg font-bold text-gray-800">
                        {member.name}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-1 ${
                          member.hiring
                            ? "text-red-600 font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {member.position}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

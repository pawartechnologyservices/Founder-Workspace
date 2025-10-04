"use client";

import { Img } from 'react-image';
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

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
    {
      id: 1,
      name: "Chetan Pawar",
      position: "Capital Partner",
      imageSrc: "/image/Empol/Chetan.jpg",
      instagram: "https://www.instagram.com/cp.0009?igsh=Y25qMjY5cnJ2eHI0",
      category: "directors",
    },
    {
      id: 2,
      name: "Rahul Pawar",
      position: "Founder",
      imageSrc: "/image/Empol/Rahul.jpg",
      instagram:"https://www.linkedin.com/in/rahul-pawar-18b1ba1bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      category: "directors",
    },
    {
      id: 3,
      name: "Swapnil Gunake",
      position: "Project Manager",
      imageSrc: "/image/Empol/11 (1).png",
      instagram: "https://www.linkedin.com/in/swapnil-gunake-857485292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      category: "manager",
      specialCard: true,
    },
    {
      id: 13,
      name: "We're Hiring!",
      position: "Assistant Project Manager",
      imageSrc: "/image/Empol/11 (14).jpg",
      instagram: "#",
      category: "manager",
      hiring: true,
    },
    {
      id: 4,
      name: "Faizan Sheikh",
      position: "Web Development Team Lead",
      imageSrc: "/image/Empol/11 (6).png",
      instagram: "https://www.linkedin.com/in/faizan-ashpak-sheikh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      category: "web",
    },
    {
      id: 5,
      name: "Samina Begum",
      position: "Web Development Manager",
      imageSrc: "/image/Empol/11 (13).jpg",
      instagram: "#",
      category: "web",
    },
    {
      id: 6,
      name: "Dhanashree Parale",
      position: "Software Development ",
      imageSrc: "/image/Empol/11 (3).png",
      instagram: "http://linkedin.com/in/dhanashree-parale-0ba446295",
      category: "software",
    },
    {
      id: 7,
      name: "Tushar Goswami",
      position: "Software Development Team Leader",
      imageSrc: "/image/Empol/11 (16).jpg",
      instagram: "https://www.linkedin.com/in/rayhan-shaikh-170125221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      category: "software",
    },
    {
      id: 8,
      name: "Pranav Mete",
      position: "AI Research Team",
      imageSrc: "/image/Empol/11 (8).png",
      instagram: "https://www.linkedin.com/in/pranavmete123/",
      category: "ai",
    },
    {
      id: 9,
      name: "Pranav Gaikwad",
      position: "AI Research Team",
      imageSrc: "/image/Empol/11 (9).png",
      instagram: "https://www.linkedin.com/in/pranav-gaikwad-64107875?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      category: "ai",
    },
    {
      id: 10,
      name: "Kunal Pawar",
      position: "Digital Marketing",
      imageSrc: "/image/Empol/11 (5).png",
      instagram: "https://www.linkedin.com/in/kunal-pawar-8b0068333/",
      category: "marketing",
      specialCard: true,
    },
    {
      id: 14,
      name: "Krip Shah",
      position: "Digital Marketer",
      imageSrc: "/image/Empol/11 (18).jpg",
      instagram: "",
      category: "marketing",
    },
    {
      id: 11,
      name: "Siddhant Gaikwad",
      position: "Senior Sales Manager",
      imageSrc: "/image/Empol/11 (11).png",
      instagram: "https://www.linkedin.com/in/siddhant-gaikwad-039758167/",
      category: "sales",
    },
    {
      id: 12,
      name: "Aditya Sabnis",
      position: "IT Sales Consultant",
      imageSrc: "/image/Empol/11 (19).jpg",
      instagram: "https://www.linkedin.com/in/krishna-suthar-4b321a193/",
      category: "sales",
    },
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
  const [isAnimating, setIsAnimating] = useState(false);
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

  const handleCategoryChange = (category: string) => {
    setIsAnimating(true);
    setActiveCategory(category);
    setTimeout(() => setIsAnimating(false), 500);
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
            <h3 className="text-lg sm:text-xl font-bold text-red-500 uppercase tracking-widest">
              Our Employee
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              The <span className="text-red-500">PTS</span> Network experts:
              uniting talent for intelligent solutions
            </h1>
            <div className="mt-4 sm:mt-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-red-400 to-indigo-600 text-transparent bg-clip-text">
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
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div
              className={`grid ${
                filteredMembers.length === 1
                  ? "grid-cols-1"
                  : filteredMembers.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              } gap-4 sm:gap-6 transition-all duration-500 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className={`bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 ${
                    member.specialCard ? "md:w-[90%] lg:w-[80%] mx-auto" : ""
                  } ${
                    member.hiring ? "border-2 border-dashed border-red-500" : ""
                  }`}
                >
                  <div
                    className={`relative ${
                      member.specialCard ? "h-60 sm:h-64" : "h-64 sm:h-72"
                    } w-full overflow-hidden`}
                  >
                    <Img
                      src={member.imageSrc}
                      alt={member.name}
                      fill
                      className={`object-cover rounded-t-xl sm:rounded-t-2xl transition-transform duration-700 group-hover:scale-105 ${
                        member.hiring ? "opacity-80" : ""
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={member.category === "directors"}
                    />
                    {member.hiring && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="text-center p-4">
                          <span className="inline-block bg-red-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full mb-2 animate-pulse">
                            JOIN OUR Employee
                          </span>
                          <h3 className="text-white text-xl sm:text-2xl font-bold">
                            We're Hiring!
                          </h3>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center transition-all duration-500 pb-4 sm:pb-6">
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black hover:bg-black hover:text-white w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold transition-all duration-300 transform hover:scale-110 shadow"
                      >
                        in
                      </a>
                    </div>
                  </div>
                  <div
                    className={`p-3 sm:p-4 text-center bg-gradient-to-r from-gray-50 to-white ${
                      member.hiring
                        ? "bg-gradient-to-r from-red-50 to-gray-100"
                        : ""
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
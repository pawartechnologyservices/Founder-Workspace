import { useEffect } from "react";

// Import local images
import client1 from "../assets/images/brand/1.jpg";
import client2 from "../assets/images/brand/2.jpg";
import client3 from "../assets/images/brand/3.jpg";
import client4 from "../assets/images/brand/4.jpg";
import client5 from "../assets/images/brand/5.jpg";
import client6 from "../assets/images/brand/6.jpg";
import client7 from "../assets/images/brand/7.jpg";
import client8 from "../assets/images/brand/8.jpg";
import client9 from "../assets/images/brand/9.jpg";
import client10 from "../assets/images/brand/10.jpg";


const ClientsSection = () => {
  useEffect(() => {
    // Animation observers for fade-in effects
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, observerOptions);

    const slideUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => fadeInObserver.observe(el));
    document.querySelectorAll('.slide-up').forEach(el => slideUpObserver.observe(el));

    return () => {
      fadeInObserver.disconnect();
      slideUpObserver.disconnect();
    };
  }, []);

  // Array of imported images
  const brandImages = [
    client1, client2, client3, client4, client5, client6, client7, client8,
    client9, client10,];

  return (
    <div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
          background: black;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
          padding: 0 2rem;
        }

        .marquee-item img {
          height: 10rem;
          width: 13rem;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.9;
          transition: all 0.3s;
        }

        .marquee-item img:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
          opacity: 0;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(50px);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gradient-text {
          background: linear-gradient(45deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .clients-section {
          padding: 5rem 0;
          background: black;
          color: white;
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .divider {
          width: 6rem;
          height: 0.25rem;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          margin: 0 auto 2rem auto;
        }
        
        .fallback-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 10rem;
          width: 13rem;
          background: #1a1a1a;
          color: white;
          font-weight: bold;
          border-radius: 4px;
        }
      `}</style>

      {/* Our Clients Section */}
      <section className="clients-section fade-in">
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div className="text-center slide-up">
            <h2 className="section-title">
  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
    Our Clients
  </span>
</h2>

            <div className="divider"></div>
            <p className="section-subtitle">
             Over 30+ companies, both big and small, are growing their business with PTS.
            </p>
          </div>

          {/* Marquee Slider */}
          <div className="marquee-wrapper" style={{ padding: '2rem 0' }}>
            <div className="marquee-track">
              {brandImages.map((logo, index) => (
                <div key={index} className="marquee-item">
                  <img 
                    src={logo} 
                    alt={`Client ${index + 1}`}
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-logo';
                      fallback.textContent = `Client ${index + 1}`;
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                </div>
              ))}
              {brandImages.map((logo, index) => (
                <div key={`dup-${index}`} className="marquee-item">
                  <img 
                    src={logo} 
                    alt={`Client ${index + 1}`}
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'fallback-logo';
                      fallback.textContent = `Client ${index + 1}`;
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsSection;
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white font-raleway"
      style={{
        backgroundImage: "url('/src/images/hh2.jpg')", // ✅ Update to your image path
      }}
    >
      {/* ===== Navbar ===== */}
      <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          {/* Logo */}
          <h2 className="text-xl md:text-3xl font-bold text-[wheat] drop-shadow-[0_0_8px_rgba(255,222,173,0.4)]">
            WanderLust Haven
          </h2>

          {/* Hamburger */}
          <div
            className="flex flex-col justify-center items-center space-y-1 cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-7 h-[3px] bg-white rounded transition-all ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-[3px] bg-white rounded transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-7 h-[3px] bg-white rounded transition-all ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </div>

          {/* Navbar Links */}
          <nav
            className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-black/90 md:bg-transparent transition-all duration-300 overflow-hidden md:overflow-visible ${
              isOpen ? "max-h-64" : "max-h-0 md:max-h-none"
            }`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-6 py-4 md:py-0">
              {["About Us", "Gallery", "Contact", "Residentials", "Admin"].map(
                (item, idx) => (
                  <li key={idx}>
                    <Link
                      to="#"
                      className="relative font-semibold text-white hover:text-[wheat] transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[wheat] hover:after:w-full after:transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-32 bg-black/50 backdrop-blur-sm min-h-[80vh]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[wheat] drop-shadow-lg">
          WanderLust Haven
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mt-4 mb-6">
          Discover Your Adventure
        </h2>
        <p className="max-w-3xl text-lg md:text-xl text-gray-200 leading-relaxed">
          Welcome to <span className="font-bold text-[wheat]">Wanderlust Haven</span> —
          your gateway to adventure and comfort! Nestled in Kochi, our hostel
          isn’t just a stay — it’s an experience. Connect, explore, and create
          unforgettable memories in a space designed for travelers like you.
        </p>

        <div className="mt-10">
          <Link
            to="/login"
            className="bg-[wheat] text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition-transform hover:scale-105"
          >
            BOOK YOUR ROOM NOW
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

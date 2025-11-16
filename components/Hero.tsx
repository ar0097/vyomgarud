import React from "react";
function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/hero.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-b from-[#141414] via-[#14141400] to-[#141414]"></div>

      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
          VyomGarud
        </h1>
        <p className="text-xl md:text-2xl text-[#999999] mb-8 max-w-2xl mx-auto">
          Autonomous, resilient UAVs delivering connectivity, and situational
          awareness
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#capabilties"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium ring-offset-[#141414] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b00] bg-[#ff7b00] text-[#fafafa] hover:bg-[#ff7b00e6] hover-glow h-11 px-8"
          >
            Explore Capabilities
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b00] border border-[#ff7b00] text-[#ff7b00] hover:bg-[#ff7b001a] h-11 px-8"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

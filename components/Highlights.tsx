import React from "react";
import { FiCheckCircle } from "react-icons/fi";

function Highlights() {
  return (
    <div className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Why Choose <span className="text-[#ff7b00]">VyomGarud</span>
        </h2>
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-start gap-4 bg-[#1f1f1f] border border-[#333333] rounded-lg p-6 hover:border-[#ff7b0080] transition-all hover-glow animate-slide-in">
            <FiCheckCircle className="w-6 h-6 text-[#ff7b00] shrink-0 mt-1" />
            <p className="text-lg text-[#fafafa]">
              Military-grade precision with 99.9% operational reliability
            </p>
          </div>
          <div className="flex items-start gap-4 bg-[#1f1f1f] border border-[#333333] rounded-lg p-6 hover:border-[#ff7b0080] transition-all hover-glow animate-slide-in">
            <FiCheckCircle className="w-6 h-6 text-[#ff7b00] shrink-0 mt-1" />
            <p className="text-lg text-[#fafafa]">
              AI-powered threat detection and autonomous response systems
            </p>
          </div>
          <div className="flex items-start gap-4 bg-[#1f1f1f] border border-[#333333] rounded-lg p-6 hover:border-[#ff7b0080] transition-all hover-glow animate-slide-in">
            <FiCheckCircle className="w-6 h-6 text-[#ff7b00] shrink-0 mt-1" />
            <p className="text-lg text-[#fafafa]">
              Certified by defense authorities with proven field performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;

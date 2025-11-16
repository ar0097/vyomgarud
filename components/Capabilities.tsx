import React from "react";
import { LuEye, LuRadar, LuZap } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";

function Capabilities() {
  return (
    <div id="capabilties" className="py-24 px-6 bg-[#2e2e2e4d]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Our <span className="text-[#ff7b00]">Capabilities</span>
        </h2>
        <p className="text-[#999999] text-center mb-12 max-w-2xl mx-auto">
          Comprehensive defense solutions powered by cutting-edge technology
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          <div className="rounded-lg border text-[#fafafa] shadow-sm bg-[#1f1f1f] border-[#333333] hover:border-[#ff7b0080] transition-all hover-glow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-12 h-12 bg-[#ff7b001a] rounded-lg flex items-center justify-center mb-4">
                <MdOutlineShield className="w-6 h-6 text-[#ff7b00]" />
              </div>
              <h3 className="font-semibold tracking-tight text-xl">
                Tactical UAV Systems
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-[#999999]">
                Advanced unmanned aerial vehicles with autonomous navigation and
                real-time intelligence gathering capabilities.
              </p>
            </div>
          </div>
          <div className="rounded-lg border text-[#fafafa] shadow-sm bg-[#1f1f1f] border-[#333333] hover:border-[#ff7b0080] transition-all hover-glow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-12 h-12 bg-[#ff7b001a] rounded-lg flex items-center justify-center mb-4">
                <LuRadar className="w-6 h-6 text-[#ff7b00]" />
              </div>
              <h3 className="font-semibold tracking-tight text-xl">
                Surveillance Solutions
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-[#999999]">
                Multi-spectrum surveillance systems providing 24/7 monitoring
                with AI-powered threat detection.
              </p>
            </div>
          </div>
          <div className="rounded-lg border text-[#fafafa] shadow-sm bg-[#1f1f1f] border-[#333333] hover:border-[#ff7b0080] transition-all hover-glow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-12 h-12 bg-[#ff7b001a] rounded-lg flex items-center justify-center mb-4">
                <LuZap className="w-6 h-6 text-[#ff7b00]" />
              </div>
              <h3 className="font-semibold tracking-tight text-xl">
                Rapid Deployment
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-[#999999]">
                Quick-response systems designed for immediate tactical
                deployment in critical scenarios.
              </p>
            </div>
          </div>
          <div className="rounded-lg border text-[#fafafa] shadow-sm bg-[#1f1f1f] border-[#333333] hover:border-[#ff7b0080] transition-all hover-glow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-12 h-12 bg-[#ff7b001a] rounded-lg flex items-center justify-center mb-4">
                <LuEye className="w-6 h-6 text-[#ff7b00]" />
              </div>
              <h3 className="font-semibold tracking-tight text-xl">
                Intelligence Analytics
              </h3>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-[#999999]">
                Advanced data processing and analysis for actionable
                intelligence in real-time operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;

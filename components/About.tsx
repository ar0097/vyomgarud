import React from "react";

function About() {
  return (
    <div className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          About <span className="text-[#ff7b00]">VyomGarud</span>
        </h2>
        <div className="bg-[#1f1f1f] border- border-[#333333] rounded-lg p-8 hover-glow animate-fade-in">
          <p className="text-lg text-[#999999] leading-relaxed">
            We specialize in limitless-range UAVs powered by cellular and
            LoRa-based hybrid communication, enabling seamless command, control,
            and multi-drone coordination even in challenging environments. Built
            with military-grade precision, VyomGarud systems combine
            cutting-edge avionics, AI-driven telemetry, and secure cloud
            infrastructure to deliver unmatched situational awareness and
            mission endurance. At VyomGarud, we believe the future of aerial
            operations lies in autonomy, resilience, and connectivity and we are
            engineering that future today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

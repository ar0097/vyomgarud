import React from "react";
import { LuMapPin, LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <div className="py-24 px-6 bg-[#2e2e2e4d]" id="contact">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-[#ff7b00]">Touch</span>
        </h2>
        <p className="text-[#999999] text-center mb-12">
          Ready to discuss your defense requirements? Contact our team today.
        </p>
        <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff7b001a] rounded-lg flex items-center justify-center shrink-0">
                <MdOutlineMail className="w-6 h-6 text-[#ff7b00]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-[#999999]">contact@vyomgarud.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff7b001a] rounded-lg flex items-center justify-center shrink-0">
                <LuPhone className="w-6 h-6 text-[#ff7b00]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-[#999999]">+91 (XXX) XXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#ff7b001a] rounded-lg flex items-center justify-center shrink-0">
                <LuMapPin className="w-6 h-6 text-[#ff7b00]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-[#999999]">India</p>
              </div>
            </div>
          </div>
          <form
            action=""
            className="space-y-4 bg-[#1f1f1f] border border-[#333333] rounded-lg p-6 hover-glow"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-[#141414] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#fafafa] placeholder:text-[#999999] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b00] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#141414] border-[#333333]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-[#141414] file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#fafafa] placeholder:text-[#999999] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b00] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-[#141414] border-[#333333]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="flex min-h-20 w-full rounded-md border px-3 py-2 text-sm ring-offset-[#141414] placeholder:text-[#999999] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b00] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[#141414] border-[#333333]"
            />
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-[#141414] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7b00] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-[#fafafa] h-11 rounded-md px-8 w-full bg-[#ff7b00] hover:bg-[#ff7b00e6] hover-glow">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

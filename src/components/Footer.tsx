import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { TwitterIcon, InstagramIcon, LinkedinIcon } from "@/lib/icons";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link href="/">
            <Logo />
          </Link>
          <p className="text-white/60 leading-relaxed font-inter">
            Premium creative agency delivering digital experiences that scale and grow businesses globally. We specialize in high-performance websites and strategic branding.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-cyan hover:border-accent-cyan transition-all">
              <TwitterIcon size={18} />
            </Link>
            <Link href="https://www.instagram.com/avoix.team?igsh=YjJrMXVmb3J5YmYy" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-cyan hover:border-accent-cyan transition-all">
              <InstagramIcon size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent-cyan hover:border-accent-cyan transition-all">
              <LinkedinIcon size={18} />
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 font-plus-jakarta">Services</h4>
          <ul className="flex flex-col gap-4 text-white/60 font-inter">
            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">Web Design & Development</Link></li>
            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">Strategic Branding</Link></li>
            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">SEO & Growth Marketing</Link></li>
            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">Mobile App Development</Link></li>
            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">Consultation</Link></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-6 font-plus-jakarta">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-white/60 font-inter">
            <li><Link href="/portfolio" className="hover:text-accent-cyan transition-colors">Our Portfolio</Link></li>
            <li><Link href="/about" className="hover:text-accent-cyan transition-colors">About the Team</Link></li>
            <li><Link href="/contact" className="hover:text-accent-cyan transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold text-white mb-2 font-plus-jakarta">Get in Touch</h4>
          <div className="flex items-start gap-4 text-white/60 font-inter">
            <Mail className="text-accent-cyan mt-1" size={20} />
            <div>
              <p className="text-white font-medium">Email Us</p>
              <p className="text-sm">hello@avoix.co</p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-white/60 font-inter">
            <Phone className="text-accent-cyan mt-1" size={20} />
            <div>
              <p className="text-white font-medium">Call Us</p>
              <p className="text-sm">+91-XXX-XXX-XXXX</p>
            </div>
          </div>
          <div className="flex items-start gap-4 text-white/60 font-inter">
            <MapPin className="text-accent-cyan mt-1" size={20} />
            <div>
              <p className="text-white font-medium">Office</p>
              <p className="text-sm">Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 border-t border-white/5 mt-16 pt-8 text-center text-white/40 text-sm font-inter">
        <p>© {new Date().getFullYear()} AVOIX Creative Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

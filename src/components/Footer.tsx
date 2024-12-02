import React from 'react';
import { Linkedin, Twitter, Instagram, Users, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-2">
              Event Union
            </h3>
            <p className="text-gray-400">
              Connecting Global Minds to a Single Place
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:eventunion.co@gmail.com" className="hover:text-white transition-colors">
                  eventunion.co@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/company/eventunionglobal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/EVENTUNION_CO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/eventunion.co/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://chat.whatsapp.com/GpRcsFdMKXgCQxhxNj0Oin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Community Link"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Users className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Event Union. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
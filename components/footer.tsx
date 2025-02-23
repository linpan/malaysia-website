'use client';
import * as React from 'react';
import { MapPin, Mail } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { Social } from '@/components/layout/sections/social';

export function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-slate-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="mb-4 text-xl font-bold">TalentPioneer</h3>
              <p className="lowercase text-slate-300">
                YOUR TALENT, OUR MISSION
              </p>
              <Social />
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="mb-4 text-xl font-bold">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services/construction"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Construction Services
                  </a>
                </li>
                <li>
                  <a
                    href="/services/renovation"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Renovation Works
                  </a>
                </li>
                <li>
                  <a
                    href="/services/maintenance"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Building Maintenance
                  </a>
                </li>
                <li>
                  <a
                    href="/services/design"
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    Design & Build
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin
                    className="translate-y-1.5 text-slate-300"
                    size={20}
                  />
                  <span className="text-slate-300">
                    Construction Street, Kuala Lumpur, Malaysia
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-slate-300" size={20} />
                  <span className="text-slate-300">
                    katie.wang@talent-pioneer.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-slate-300" size={20} />
                  <span className="text-slate-300">
                    katie.wang@talent-pioneer.com
                  </span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
              <div className="space-y-2 text-slate-300">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
                <p>Saturday</p>
                <p>9:00 AM - 1:00 PM</p>
                <p>Sunday & Public Holidays</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <Separator className="bg-slate-700" />
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between text-sm text-slate-300 md:flex-row">
            <p>
              &copy; {currentYear} TalentPioneer. All rights reserved. developed{' '}
              <a href="https://www.toadd.cn" target="_blank" rel="noopener">
                PromptTech
              </a>
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

'use client';
import * as React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Social } from '@/components/layout/sections/social';
import Link from 'next/link';

export function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-slate-900 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold sm:mb-4 sm:text-xl">TalentPioneer</h3>
              <p className="lowercase text-slate-300">
                YOUR TALENT, OUR MISSION
              </p>
              <Social />
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold sm:mb-4 sm:text-xl">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services/construction"
                    className="text-sm text-slate-300 transition-colors hover:text-white sm:text-base"
                  >
                    Executive Search
                  </a>
                </li>
                <li>
                  <a
                    href="/services/renovation"
                    className="text-sm text-slate-300 transition-colors hover:text-white sm:text-base"
                  >
                    Entry & Mid Level Mass Recruitment
                  </a>
                </li>
                <li>
                  <a
                    href="/services/maintenance"
                    className="text-sm text-slate-300 transition-colors hover:text-white sm:text-base"
                  >
                    Diversity and Inclusion Initiatives
                  </a>
                </li>
                <li>
                  <a
                    href="/services/design"
                    className="text-sm text-slate-300 transition-colors hover:text-white sm:text-base"
                  >
                    Industry-Specific Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info - 在小屏幕上使用更紧凑的布局 */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold sm:mb-4 sm:text-xl">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 sm:space-x-3">
                  <MapPin
                    className="mt-1 flex-shrink-0 text-slate-300"
                    size={18}
                  />
                  <span className="text-sm text-slate-300 sm:text-base">
                    Suite 1122, Level 11, Menara Dungun, No. 46,
                    <br /> Jalan Dungun, Bukit Damansara, 50490, Kuala Lumpur
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:space-x-3">
                  <Mail className="flex-shrink-0 text-slate-300" size={18} />
                  <span className="text-sm text-slate-300 sm:text-base break-all">
                    HR@talent-pioneer.com
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:space-x-3">
                  <Mail className="flex-shrink-0 text-slate-300" size={18} />
                  <span className="text-sm text-slate-300 sm:text-base break-all">
                    katie.wang@talent-pioneer.com
                  </span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold sm:mb-4 sm:text-xl">Business Hours</h3>
              <div className="space-y-1 text-sm text-slate-300 sm:space-y-2 sm:text-base">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
                <p className="mt-2">Sunday & Public Holidays</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <Separator className="bg-slate-700" />
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div
            className="flex flex-col items-center justify-between space-y-2 text-center text-xs text-slate-400 sm:flex-row sm:space-y-0 sm:text-sm">
            <p>&copy; {currentYear} TalentPioneer. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
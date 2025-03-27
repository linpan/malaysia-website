'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="h-[600px] w-full overflow-hidden bg-purple-900">
      <div className="container mx-auto h-full px-16 py-20">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Text Content - First Grid Column - 垂直居中 */}
          <div className="flex flex-col justify-center space-y-6 text-white">
            <h1 className="font-hero text-2xl font-bold leading-tight md:whitespace-nowrap md:text-5xl lg:text-6xl">
              Your Talent, Our Mission
            </h1>
            <h2 className="font-hero text-[22px] font-bold leading-tight md:whitespace-nowrap md:text-4xl lg:text-5xl">
              Building Futures, Together
            </h2>
            <p className="max-w-lg font-hero text-lg opacity-90">
              Join our team and discover how your skills can make a difference.
              We&apos;re committed to helping you grow your career while making
              an impact.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="tracking-4 overflow-hidden whitespace-nowrap bg-white font-hero text-base font-bold text-purple-900 hover:bg-gray-100 md:px-4 md:py-3.5"
                asChild
              >
                <Link href="/submit-resume">Deposit Resume</Link>
              </Button>
            </div>
          </div>

          {/* Image - Second Grid Column */}
          <div className="hidden h-full items-end justify-end lg:flex">
            <Image
              src="/team/hero-person.png"
              alt="Professional smiling woman"
              className="h-auto w-auto object-contain"
              priority
              width={427.5}
              height={640}
              style={{
                maxHeight: '600px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

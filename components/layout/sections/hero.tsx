import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="h-[600px] w-full bg-purple-900">
      <div className="container mx-auto flex h-full flex-col items-center justify-between px-16 py-20 lg:flex-row">
        {/* Text Content - Takes full width on small screens, partial on large */}
        <div className="mb-8 h-full flex-1 space-y-6 text-white lg:mb-0 lg:pr-4">
          <h1 className="whitespace-nowrap font-hero text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Your Talent, Our Mission
          </h1>
          <h2 className="whitespace-nowrap font-hero text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Building Futures, Together
          </h2>
          <p className="max-w-lg font-hero text-lg opacity-90">
            Join our team and discover how your skills can make a difference.
            We&apos;re committed to helping you grow your career while making an
            impact.
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

        {/* Image - Hidden on small screens, visible on lg and up */}
        <div className="flex h-full flex-1 justify-center lg:justify-end">
          <Image
            src="/team/hero-person.png"
            alt="Professional smiling woman holding clipboard"
            className="object-cover"
            priority
            width={330}
            height={0}
            style={{
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative w-full bg-purple-900 md:h-[500px] lg:h-[600px]">
      {/* 主容器 */}
      <div className="relative mx-auto grid h-full max-w-screen-sm grid-cols-1 px-4 md:grid-cols-12 md:px-8 lg:max-w-screen-2xl lg:px-16">
        {/* 左侧内容区域 */}
        <div className="col-span-full space-y-4 py-8 md:col-span-9 md:space-y-5 md:py-16 lg:space-y-6 lg:py-24">
          <div className="space-y-4 text-white md:space-y-5 lg:space-y-6">
            <h1 className="font-hero text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
              Your Talent, Our Mission
            </h1>
            <h2 className="font-hero text-2xl font-bold leading-tight md:text-3xl lg:text-4xl xl:text-5xl">
              Building Futures, Together
            </h2>
            <p className="max-w-lg font-hero text-base opacity-90 md:text-lg">
              <span className="whitespace-nowrap">
                Join our team and discover how your skills can make a
                difference.
              </span>{' '}
              We&apos;re committed to helping you grow your career while making
              an impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 md:pt-4">
              <Button
                size="lg"
                className="whitespace-nowrap bg-white font-hero text-sm font-bold text-purple-900 hover:bg-gray-100 md:text-base md:tracking-wide lg:px-6 lg:py-4"
                asChild
              >
                <Link href="/submit-resume">Deposit Resume</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* 右侧图片区域 */}
        <div className="relative col-span-full md:col-span-3 md:h-full">
          <div className="absolute bottom-0 right-0 w-full md:h-[400px] lg:h-[500px]">
            <Image
              src="/team/hero-person.png"
              alt="Professional person"
              className="object-contain object-bottom"
              fill
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1024px) 33vw,
                     25vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

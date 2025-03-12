'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="mx-auto py-8 px-4 sm:py-16 md:py-24 lg:py-32 lg:max-w-screen-xl">
      <div className="wrapper mx-auto max-w-screen-xl px-2 sm:px-4 md:px-6 md:flex md:gap-8 lg:gap-12">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <span className="text-xs text-gray-500 sm:text-sm md:text-base">ABOUT</span>
          <h2
            className="text-2xl font-semibold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl md:leading-relaxed">
            About <span className="uppercase text-brandSecondary">Us</span>
          </h2>
          <p className="mb-6 mt-3 sm:mt-4 text-sm sm:text-base text-black lg:text-lg">
            Welcome to TalentPioneer, where innovation meets opportunity in the
            heart of Southeast Asia. At TalentPioneer we're not just a
            recruiting agency; we're your strategic partner in navigating the
            dynamic Malaysian job market.Our mission is to connect exceptional
            talent with leading companies through expert recruitment, career
            coaching, and targeted training. With our deep understanding of
            local industry trends and a commitment to personalized service,
            we're here to help you find the right fit and unlock new career and
            business growth opportunities.
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-bold text-brandSecondary">
            Discover how TalentPioneer can transform your hiring process and
            propel your career to new heights. Let's shape the future of work
            together.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center md:w-1/2">
          <Image
            src="/team/about-team.webp"
            alt="About"
            width={625}
            height={350}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
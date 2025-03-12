'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto px-4 py-8 sm:py-16 md:py-24 lg:max-w-screen-xl lg:py-32"
    >
      <div className="wrapper mx-auto max-w-screen-xl px-2 sm:px-4 md:flex md:gap-8 md:px-6 lg:gap-12">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <span className="text-xs text-gray-500 sm:text-sm md:text-base">
            ABOUT
          </span>
          <h2
            className="text-2xl font-semibold leading-tight text-black sm:text-3xl md:text-4xl md:leading-relaxed lg:text-5xl">
            About <span className="uppercase text-brandSecondary">Us</span>
          </h2>
          <p className="mb-6 mt-3 text-sm text-black sm:mt-4 sm:text-base lg:text-lg">
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
          <p className="text-sm font-bold text-brandSecondary sm:text-base lg:text-lg">
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
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

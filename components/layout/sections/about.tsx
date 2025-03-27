'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="mx-auto md:py-10 lg:max-w-screen-xl">
      <div className="wrapper mx-auto max-w-screen-xl px-4 md:flex">
        <div className="md:w-1/2">

          <h2 className="text-2xl font-semibold leading-tight text-black md:text-5xl md:leading-relaxed">
            About <span className="uppercase text-brandSecondary">Us</span>
          </h2>
          <p className="mb-8 mt-4 text-base text-black">
            Welcome to TalentPioneer, where innovation meets opportunity in the heart of Southeast Asia. At TalentPioneer we’re not just a recruiting agency; we’re your strategic partner in navigating the dynamic Malaysian job market.

          </p>
          <p className="mb-8 mt-4 text-base text-black">
            Our mission is to connect exceptional talent with leading companies through expert recruitment, career coaching, and targeted training.
          </p>
          <p className="text-base font-bold text-brandSecondary">
            With our deep understanding of local industry trends and a commitment to personalized service, we’re here to help you find the right fit and unlock new career and business growth opportunities.

          </p>
        </div>
        <div className="relative mt-auto flex flex-col items-center justify-center md:flex md:w-1/2">
          <Image
            src="/team/about-team.webp"
            alt="About"
            width={625}
            height={350}
            blurDataURL="blur.webp"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

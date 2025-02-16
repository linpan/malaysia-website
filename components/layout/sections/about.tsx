'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="mx-auto md:py-10 lg:max-w-screen-xl">
      <div className="wrapper mx-auto max-w-screen-xl px-4 md:flex">
        <div className="md:w-1/2">
          <span className="text-xs text-gray-500 md:text-sm">ABOUT</span>
          <h2 className="text-2xl font-semibold leading-tight text-black md:text-5xl md:leading-relaxed">
            About <span className="text-[#3C50C2]">Us</span>
          </h2>
          <p className="mb-8 mt-4 text-base text-black">
            Great Pyramid is a leading one-stop HR service provider in Malaysia,
            focused on providing individuals and organisations with innovative
            solutions to manage complex end-to-end HR processes. With more than
            15 years of experience, Great Pyramid provides high value added
            services to assist our clients in expanding their business
            operations on a local and global basis. Our solutions assist to
            reduce cost, focus on your core business and gain valuable market
            knowledge.
          </p>
          <p className="text-base font-bold text-[#3C50C2]">
            We specialise in all HR and immigration matters; from executive
            search recruitment to work pass solutions that are imperative to
            every successful company’s growth.
          </p>
        </div>
        <div className="relative mt-auto flex flex-col items-center justify-center md:flex md:w-1/2">
          <Image
            src="/greeting.png"
            alt="About"
            width={625}
            height={350}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Choose = () => {
  return (
    <>
      <section className="container mx-auto overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/team/why-us-885.webp"
                      alt="Descriptive alt text"
                      className="w-full rounded-2xl"
                      loading="lazy"
                      width={500}
                      height={500}
                      placeholder="blur"
                      blurDataURL="blur.webp"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/team/why-us-886.webp"
                      alt="Descriptive alt text"
                      className="w-full rounded-2xl"
                      loading="lazy"
                      width={500}
                      height={500}
                      placeholder="blur"
                      blurDataURL="blur.webp"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/team/why-us-887.webp"
                      alt="image"
                      className="w-full rounded-2xl bg-gray-200"
                      width={500}
                      height={500}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="blur.webp"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 gap-0.5 lg:mt-0">
                <span className="mb-4 block text-lg font-semibold text-brandSecondary">
                  Why Choose Us
                </span>
                <h2 className="text-dark mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                  Expert Talent Solutions That Drive Results
                </h2>
                <p className="text-body-color mb-5 text-base">
                  • We transform your workforce through targeted talent
                  assessment and development.
                  <br />• Our data-driven approach delivers measurable
                  improvements in team performance and organizational growth.
                </p>
                <p className="text-body-color mb-8 text-base">
                  Join leading companies who trust us to build their next
                  generation of leaders. Start your talent transformation
                  journey today.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-brandSecondary px-7 py-3 text-center text-base font-medium text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;

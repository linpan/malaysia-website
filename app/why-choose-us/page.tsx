import DotCorner from '@/components/svg/dot';
import React from 'react';

import Image from 'next/image';

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
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt="Descriptive alt text"
                      className="w-full rounded-2xl"
                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt="Descriptive alt text"
                      className="w-full rounded-2xl"
                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt="image"
                      className="w-full rounded-2xl bg-gray-200"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                    <span className="absolute -bottom-7 -right-7 z-[-1]">
                      <DotCorner />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="mb-4 block text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="text-dark mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="text-body-color mb-5 text-base">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="text-body-color mb-8 text-base">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;

'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="bg-gray-100">
      <div className="relative isolate overflow-hidden">
        <Image
          alt=""
          src="/hero1.jpg"
          fill
          style={{
            objectFit: 'cover',
          }}
          className="absolute inset-0 -z-10 object-cover opacity-85"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1155/678 bg-linear-to-tr relative left-[calc(50%-11rem)] w-[36.125rem] -translate-x-1/2 rotate-[30deg] from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-8 sm:py-20 lg:py-24">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Explore Jobs .{' '}
                <Link
                  href="/career-opportunities"
                  className="font-semibold text-white"
                >
                  <span aria-hidden="true" className="absolute inset-0" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="w-full text-balance text-5xl font-semibold tracking-tight text-white sm:text-5xl">
                <div>Your Talent, Our Mission.</div>
                <div>Building Futures, Together.</div>
              </h1>
              <p className="mt-5 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                We empower both individuals and organizations to achieve their
                highest potential and drive mutual growth.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="shadow-xs rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Deposit Resume
                </a>
                <Link
                  href="/about-us"
                  className="text-sm/6 font-semibold text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

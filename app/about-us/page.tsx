'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
];

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-7xl bg-white lg:max-w-screen-xl'>
      {/* Hero Section */}
      <section className='relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20'>
        <div
          aria-hidden='true'
          className='absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96'
        />
        <div className='mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8'>
            <h1 className='text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
              Crafting the future of ecommerce
            </h1>
            <p className='mt-6 text-lg text-gray-500'>
              We are a passionate team empowering growth through innovation.
              Building tools to shape the future of ecommerce for businesses
              worldwide.
            </p>
            <Image
              alt='Ecommerce Team'
              src='https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80'
              width={1280}
              height={720}
              className='mt-10 rounded-2xl object-cover sm:mt-16 lg:mt-0'
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='mx-auto mt-28 max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-16 lg:grid-cols-2'>
          <div>
            <h2 className='text-4xl font-semibold text-gray-900'>Our Story</h2>
            <p className='mt-6 text-gray-600'>
              Founded with the mission to innovate and empower, we have
              consistently pushed boundaries to deliver cutting-edge solutions.
              Our journey has been fueled by passion, dedication, and a
              commitment to excellence.
            </p>
          </div>
          <Image
            alt='Our Story'
            src='https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'
            width={1152}
            height={768}
            className='rounded-2xl object-cover'
          />
        </div>
      </section>

      {/* Team Section */}
      <section className='mb-24 mt-28 overflow-hidden md:mt-32'>
        <div className='mx-auto max-w-7xl px-6 lg:flex lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
            <div>
              <h2 className='text-4xl font-semibold text-gray-900'>Our Team</h2>
              <p className='mt-6 text-gray-600'>
                Our diverse team of experts brings passion, innovation, and
                expertise to every challenge. Together, we are redefining
                possibilities and helping businesses thrive.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                alt='Team Member 1'
                src='https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80'
                width={768}
                height={512}
                className='rounded-2xl object-cover'
              />
              <Image
                alt='Team Member 2'
                src='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80'
                width={768}
                height={512}
                className='rounded-2xl object-cover'
              />
              <Image
                alt='Team Member 3'
                src='https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80'
                width={768}
                height={512}
                className='rounded-2xl object-cover'
              />
              <Image
                alt='Team Member 4'
                src='https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80'
                width={768}
                height={512}
                className='rounded-2xl object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type React from 'react';

const AboutPage: React.FC = () => {
  const leftAccordionData = [
    {
      value: 'item-1',
      question: '1. How does TalentPioneer help me find a job?',
      answer:
        'TalentPioneer assists you in finding a job by connecting you with top employers actively looking for candidates with your skills. As a headhunter, we provide personalized support throughout your job search, including resume optimization, interview coaching, and access to exclusive job openings. Our goal is to match you with opportunities that align with your career aspirations and help you stand out in the hiring process.',
    },
    {
      value: 'item-2',
      question: '2. How can I receive job notifications from TalentPioneer?',
      answer:
        'You can receive job notifications from TalentPioneer by signing up on our website and creating a profile. Once your profile is set up, you can customize your job preferences, and we\'ll send you email alerts for job openings that match your criteria.',
    },
    {
      value: 'item-3',
      question: "3. Do I need to pay for TalentPioneer's job-seeking services?",
      answer:
        "No, you do not need to pay for TalentPioneer's job-seeking services. Our services are completely free for candidates, as our goal is to help you find the right job without any cost to you.",
    },
    {
      value: 'item-4',
      question: '4. How does TalentPioneer protect my personal data?',
      answer:
        'TalentPioneer takes your privacy seriously and implements strict measures to protect your personal data. We use secure systems to store your information and ensure that it is only accessible to authorized personnel. Additionally, we comply with data protection regulations and do not share your information with third parties without your consent. Your trust is important to us, and we are committed to keeping your data safe.',
    },
  ];
  return (
    <div className="relative flex items-center justify-center bg-white bg-gradient-to-b md:py-16 lg:py-24">
      {/* SVG背景 - 已移除椭圆 */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0, 0, 0, 0.05)"
                strokeWidth="1"
              />
            </pattern>
            <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1" fill="rgba(0, 0, 0, 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#dots-pattern)" opacity="0.4" />
          {/* 移除了两个彩色圆圈 */}
        </svg>
      </div>

      <div
        className="faq relative z-10 mx-auto mt-24 max-w-5xl gap-6 px-4 text-black sm:px-6 sm:text-lg lg:mt-20 lg:px-8">
        <div className="lg:text-center">
          <p
            className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-gray-600 leading-relaxed">
            Have a different question and can't find the answer you're looking
            for? Reach out to our support team by{' '}
            <a
              href="#"
              className="rounded-sm font-semibold text-base sm:text-lg text-brandSecondary underline-offset-2 transition-colors duration-300 hover:text-brandSecondary/80 hover:underline focus:outline-none focus:ring-2 focus:ring-brandSecondary/30 focus:ring-offset-1"
            >
              sending us an email
            </a>{' '}
            and we'll get back to you as soon as we can.
          </p>
        </div>
        <div className="faq-section mx-auto mb-12 mt-10 max-w-3xl flex-col gap-6">
          <Accordion type="single" collapsible className="border rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
            {leftAccordionData.map(({ question, answer, value }) => (
              <AccordionItem key={value} value={value} className="border-b last:border-b-0">
                <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-bold py-4 px-5">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg leading-relaxed px-5 pb-5">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
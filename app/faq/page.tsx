// app/about-us/page.tsx

'use client';

import Grid from '@/components/svg/grid';
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
        'You can receive job notifications from TalentPioneer by signing up on our website and creating a profile. Once your profile is set up, you can customize your job preferences, and we’ll send you email alerts for job openings that match your criteria.',
    },
    {
      value: 'item-3',
      question: '3. Do I need to pay for TalentPioneer\'s job-seeking services?',
      answer:
        'No, you do not need to pay for TalentPioneer\'s job-seeking services. Our services are completely free for candidates, as our goal is to help you find the right job without any cost to you.',
    },
    {
      value: 'item-4',
      question: '4. How does TalentPioneer protect my personal data?',
      answer:
        'TalentPioneer takes your privacy seriously and implements strict measures to protect your personal data. We use secure systems to store your information and ensure that it is only accessible to authorized personnel. Additionally, we comply with data protection regulations and do not share your information with third parties without your consent. Your trust is important to us, and we are committed to keeping your data safe.',
    },
  ];
  return (
    <div className="relative flex items-center justify-center md:py-16 lg:py-24">
      <div className="absolute inset-0 mt-24">
        <Grid className={'opacity-30'} />
      </div>
      <div className="faq relative z-10 mx-auto mt-24 max-w-5xl gap-6 px-4 text-black sm:px-6 lg:mt-20 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
            FAQ
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base/7 text-gray-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{' '}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="faq-section mx-auto mb-12 mt-6 max-w-3xl flex-col gap-6">
          <Accordion type="single" collapsible>
            {leftAccordionData.map(({ question, answer, value }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className="text-left text-base font-bold">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

type ServiceCard = {
  title: string;
  description: string;
  link: string;
};


const services: ServiceCard[] = [
  {
    title: 'Malaysian job market insights',
    description:
      'Extensive expertise across various sectors with industry-specific knowledge including tech recruitment and data-driven agile hiring.',
    link: '/en-savoir-plus',
  },
  {
    title: 'Proven track record of success',
    description:
      'Expertise in sourcing strategies, talent assessment, interviewing and selection, onboarding and integration, as well as talent management.',

    link: '/en-savoir-plus',
  },
  {
    title: 'Diversity and Inclusion',
    description:
      'Strong focus on promoting diverse and inclusive hiring practices tailored to modern organizational needs.',
    link: '/en-savoir-plus',
  },
];

export default function Services() {
  return (
    <section className="mx-auto px-4  sm:px-6  py-20 md:py-28 lg:py-32 md:max-w-7xl">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl md:text-4xl">
            Why Choose TalentPioneer?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block">
              <Card
                className="group h-full border-none bg-blue-100/50 transition-shadow duration-200 hover:bg-blue-100 hover:shadow-lg"
              >
                <CardHeader className="flex items-center pb-2 pt-6">
                  <CardTitle className="text-center text-lg font-semibold text-brandSecondary sm:text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 sm:text-base">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
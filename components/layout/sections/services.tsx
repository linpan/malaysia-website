'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, LineChart, Users } from 'lucide-react';
import Link from 'next/link';

type ServiceCard = {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
};

const services: ServiceCard[] = [
  {
    title: 'Malaysian job market insights',
    description:
      'Extensive expertise across various sectors with industry-specific knowledge including tech recruitment and data-driven agile hiring.',
    link: '/en-savoir-plus',
    icon: <LineChart className="h-6 w-6 text-blue-600" />,
  },
  {
    title: 'Proven track record of success',
    description:
      'Expertise in sourcing strategies, talent assessment, interviewing and selection, onboarding and integration, as well as talent management.',
    link: '/en-savoir-plus',
    icon: <Award className="h-6 w-6 text-blue-600" />,
  },
  {
    title: 'Diversity and Inclusion',
    description:
      'Strong focus on promoting diverse and inclusive hiring practices tailored to modern organizational needs.',
    link: '/en-savoir-plus',
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50/50 to-blue-100/70 py-20 md:py-28 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 md:max-w-7xl">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl md:text-4xl">
              Why Choose <span className="text-blue-600 relative">
                TalentPioneer?
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded-full"></span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((service, index) => (
              <Link href={service.link} key={index}
                    className="block group transition duration-300 transform hover:-translate-y-1">
                <Card
                  className="h-full border border-blue-100 bg-white/80 transition-all duration-300
                  hover:shadow-xl hover:shadow-blue-100/50 overflow-hidden backdrop-blur-sm"
                >
                  <CardHeader className="flex flex-row items-center gap-3 pb-2 pt-6 border-b border-blue-100/30">
                    <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <CardTitle
                      className="text-lg font-semibold text-blue-800 sm:text-xl group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-gray-600 sm:text-base">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
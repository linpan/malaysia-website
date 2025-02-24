'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Users,
  GraduationCap,
  Target,
  UserCheck,
  BookOpen,
  LineChart,
  Search,
  FileText,
} from 'lucide-react';
import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  subServices?: string[];
}

const employerServices: Service[] = [
  {
    id: 'es1',
    title: 'Talent Recruitment Services',
    description: 'Comprehensive recruitment solutions for enterprises',
    icon: <Search className="h-8 w-8 text-blue-600" />,
    subServices: [
      'Executive headhunting services',
      'Junior and mid-level bulk recruitment',
      'Diversity and inclusion hiring programs',
    ],
  },
  {
    id: 'es2',
    title: 'Training and Development',
    description: 'Enhance enterprise human resource management capabilities',
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    subServices: [
      'HR development and performance management',
      'Industry-specific solutions and best practices',
      'Cross-cultural leadership training',
    ],
  },
];

const jobSeekerServices: Service[] = [
  {
    id: 'js1',
    title: 'Career Consultation',
    description: 'Professional career development guidance services',
    icon: <UserCheck className="h-8 w-8 text-blue-600" />,
    subServices: [
      'Resume writing guidance',
      'Interview skills training',
      'Career development planning',
    ],
  },
  {
    id: 'js2',
    title: 'Career Assessment',
    description: 'Discover personal potential and match ideal careers',
    icon: <Target className="h-8 w-8 text-blue-600" />,
    subServices: [
      'Personalized competency assessment',
      'Career interest exploration',
      'Career fit analysis',
    ],
  },
];

const ServiceCard: React.FC<Service> = ({
  title,
  description,
  icon,
  subServices,
}) => {
  return (
    <Card className="h-full transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 inline-block rounded-xl bg-blue-50 p-3">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        {subServices && (
          <ul className="space-y-2">
            {subServices.map((service, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                {service}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We focus on providing comprehensive HR and recruitment solutions,
            aiming to drive mutual growth for enterprises and individuals.
          </p>
        </div>

        {/* Employer Services */}
        <div className="mb-16">
          <div className="mb-8 flex items-center">
            <Users className="mr-3 h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Employer Services
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {employerServices.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>

        {/* Job Seeker Services */}
        <div>
          <div className="mb-8 flex items-center">
            <GraduationCap className="mr-3 h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Job Seeker Services
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {jobSeekerServices.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-xl bg-blue-50 p-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Need more information?
            </h3>
            <p className="mb-6 text-gray-600">
              Our team of professional consultants is always ready to provide
              help and advice.
            </p>
            <a
              href="mailto:katie.wang@talent-pioneer.com"
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

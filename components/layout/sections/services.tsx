// types.ts
import Image from 'next/image';

type ServiceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
};

// LawyerServices.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services: ServiceCard[] = [
  {
    title: 'Malaysian job market insights',
    description:
      'Extensive expertise across various sectors with industry-specific knowledge including tech recruitment and data-driven agile hiring.',
    icon: 'five.svg',
    link: '/en-savoir-plus',
  },
  {
    title: 'Proven track record of success',
    description:
      'Expertise in sourcing strategies, talent assessment, interviewing and selection, onboarding and integration, as well as talent management.',
    icon: 'five.svg',
    link: '/en-savoir-plus',
  },
  {
    title: 'Diversity and Inclusion',
    description:
      'Strong focus on promoting diverse and inclusive hiring practices tailored to modern organizational needs.',
    icon: 'five.svg',
    link: '/en-savoir-plus',
  },
];

export default function Services() {
  return (
    <section className="mx-auto px-4 md:max-w-7xl md:py-24 lg:py-32">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900">
            Why Choose TalentPioneer?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border-none bg-blue-100/50 transition-shadow duration-200 hover:bg-blue-100 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mx-auto mb-4 text-blue-900">
                  <Image
                    src={`/${service.icon}`}
                    width={200}
                    height={200}
                    alt="five"
                  />
                </div>
                <CardTitle className="mx-auto text-xl font-semibold text-blue-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

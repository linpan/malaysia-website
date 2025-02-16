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

import { UserCircle, Users, Building2 } from 'lucide-react';

const services: ServiceCard[] = [
  {
    title: 'Avocat indépendant',
    description:
      "Une présentation claire de vous-même ainsi que votre ou vos domaines d'expertises.",
    icon: <UserCircle className="h-12 w-12" />,
    link: '/en-savoir-plus',
  },
  {
    title: 'Avocats associés',
    description:
      "Vos domaines d'expertises et la présentation de votre cabinet ainsi que les différents membres.",
    icon: <Users className="h-12 w-12" />,
    link: '/en-savoir-plus',
  },
  {
    title: "Cabinet d'avocats international",
    description:
      'Tous vos cabinets et vos équipes, votre actualité, vos parutions, en français ou en plusieurs langues.',
    icon: <Building2 className="h-12 w-12" />,
    link: '/en-savoir-plus',
  },
];

export default function Services() {
  return (
    <section className="mx-auto px-4 md:max-w-7xl">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900">
            为何选择TalentPioneer
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
                    src={'/five.svg'}
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

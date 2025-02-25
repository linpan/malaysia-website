import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
// career.tsx
import type React from 'react';

interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  url: string;
}

const positions: JobPosition[] = [
  {
    id: '1',
    title: 'Front-end Developer',
    location: 'Remote/NY',
    type: 'Full-time',
    url: '#',
  },
  {
    id: '2',
    title: 'Digital Marketer',
    location: 'Remote/NY',
    type: 'Full-time',
    url: '#',
  },
  {
    id: '3',
    title: 'Junior JS Developer',
    location: 'Remote/NY',
    type: 'Full-time',
    url: '#',
  },
  {
    id: '4',
    title: 'Product Designer',
    location: 'Remote/NY',
    type: 'Full-time',
    url: '#',
  },
  {
    id: '5',
    title: 'Senior Software Developer',
    location: 'Remote/NY',
    type: 'Full-time',
    url: '#',
  },
];

const JobCard: React.FC<JobPosition> = ({ title, location, type, url }) => {
  return (
    <Card className="mb-4 transition-shadow hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-500">
                <MapPin className="mr-2 h-4 w-4" />
                <span className="text-sm">{location}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <Clock className="mr-2 h-4 w-4" />
                <span className="text-sm">{type}</span>
              </div>
            </div>
          </div>
          <Link
            href={url}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            See Details
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const CareerPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <h1 className="mx-auto mb-8 text-center text-3xl font-bold text-gray-900">
        Open Positions
      </h1>
      <div className="space-y-2">
        {positions.map(position => (
          <JobCard key={position.id} {...position} />
        ))}
      </div>
    </div>
  );
};

export default CareerPage;

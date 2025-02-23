// components/ServicesSection.tsx
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Briefcase as BriefcaseIcon,
  GraduationCap as AcademicCapIcon,
  Users as UserGroupIcon,
  BarChart as ChartBarIcon,
} from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="bg-brandSecondary/30 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Our Services
        </h2>

        {/* Tabs */}
        <Tabs defaultValue="employers" className="mx-auto md:max-w-6xl">
          <TabsList className="mx-auto mb-8 grid h-12 w-full max-w-md grid-cols-2">
            <TabsTrigger
              value="employers"
              className="text-lg font-semibold text-gray-700 data-[state=active]:bg-brandSecondary/60 data-[state=active]:text-white"
            >
              To Employers
            </TabsTrigger>
            <TabsTrigger
              value="job-seekers"
              className="text-lg font-semibold text-gray-700 data-[state=active]:bg-brandSecondary/60 data-[state=active]:text-white"
            >
              To Job Seekers
            </TabsTrigger>
          </TabsList>
          {/* Employers Tab Content */}
          <TabsContent value="employers">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Recruitment Placement */}
              <Card className="h-[190px] shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                    <BriefcaseIcon className="mr-2 h-6 w-6 text-gray-600" />
                    Recruitment Placement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-gray-600">
                    <li>Executive Search</li>
                    <li>Entry & Mid Level Mass Recruitment</li>
                    <li>Diversity and Inclusion Initiatives</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Training & Development */}
              <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                    <AcademicCapIcon className="mr-2 h-6 w-6 text-gray-600" />
                    Training & Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-gray-600">
                    <li>
                      HR development, performance management, industry-specific
                      solutions and best practices
                    </li>
                    <li>Cross-cultural and leadership training</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Job Seekers Tab Content */}
          <TabsContent value="job-seekers">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Career Consultation */}
              <Card className="h-[190px] shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                    <UserGroupIcon className="mr-2 h-6 w-6 text-gray-600" />
                    Career Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-gray-600">
                    <li>
                      Career counseling: Career coaching and guidance services -
                      e.g., resume writing, interview preparation, career path
                      planning, etc.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Career Assessment */}
              <Card className="shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-800">
                    <ChartBarIcon className="mr-2 h-6 w-6 text-gray-600" />
                    Career Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-gray-600">
                    <li>
                      Discover your unique talents, personality type, and career
                      interests to make informed career decisions and greater
                      job satisfaction.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;

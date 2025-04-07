'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { jobsData } from '@/data/jobs';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function JobList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-6 pb-12 lg:pb-16">
      {jobsData.map((job) => (
        <Link href={`/jobs/${job.id}`} key={job.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.01 }}
            onMouseEnter={() => setHoveredId(job.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card
              className={`border-l-4 ${hoveredId === job.id ? 'border-l-brandSecondary shadow-md' : 'border-l-transparent'} transition-all duration-200 bg-white border border-gray-100`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                      <Badge
                        variant="outline"
                        className="ml-3 bg-blue-50 text-brandSecondary border-blue-200"
                      >
                        {job.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{job.location}</span>
                      </div>

                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{job.summary}</p>

                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-500 mr-1">Language Requirements:</span>
                      {job.languages.map((language) => (
                        <Badge
                          key={language}
                          variant="secondary"
                          className="bg-gray-50 text-gray-700 border border-gray-200"
                        >
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-4 flex items-center">
                    <Button
                      variant={hoveredId === job.id ? 'default' : 'outline'}
                      size="sm"
                      className={cn(
                        'whitespace-nowrap rounded-full transition-colors duration-200',
                        hoveredId === job.id
                          ? 'bg-brandSecondary hover:bg-brandSecondary/90 text-white'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50',
                      )}
                    >
                      See Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
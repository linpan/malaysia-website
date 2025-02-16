'use client';

import { Card, CardContent } from '@/components/ui/card';
import { LayoutGrid, MessageSquare, Paintbrush, Smile } from 'lucide-react';
import React from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: '1',
    title: '注册账户',
    description: '快速完成账户注册，开启您的人才招聘之旅',
    icon: <Smile className='h-8 w-8 text-blue-600' />,
  },
  {
    id: '2',
    title: '发布职位',
    description: '轻松发布职位需求，定制招聘方案',
    icon: <Paintbrush className='h-8 w-8 text-blue-600' />,
  },
  {
    id: '3',
    title: '人才匹配',
    description: 'AI智能匹配最适合的人才，提高招聘效率',
    icon: <LayoutGrid className='h-8 w-8 text-blue-600' />,
  },
  {
    id: '4',
    title: '续约服务',
    description: '灵活的续约选项，持续提供优质服务支持',
    icon: <MessageSquare className='h-8 w-8 text-blue-600' />,
  },
];

const DashedLine = () => (
  <div className='relative top-8 mx-4 flex-1 border-t-2 border-dashed border-blue-300'>
    <div className='absolute -top-2 right-0 h-4 w-4 rotate-45 border-r-2 border-t-2 border-blue-300'></div>
  </div>
);

const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <Card className='relative z-10 mb-4 h-20 w-20 rounded-2xl border-2 border-blue-600 bg-white'>
        <CardContent className='flex h-full items-center justify-center p-0'>
          <div className='text-blue-600'>{icon}</div>
        </CardContent>
      </Card>
      <h3 className='mb-2 text-xl font-semibold text-gray-900'>{title}</h3>
      <p className='max-w-[200px] text-sm text-gray-500'>{description}</p>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  return (
    <div className='container mx-auto max-w-6xl px-4 py-16'>
      <div className='mb-16 text-center'>
        <h2 className='mb-2 font-medium text-blue-600'>使用流程</h2>
        <h1 className='mb-4 text-4xl font-bold text-gray-900'>
          四步轻松开启招聘
        </h1>
        <p className='mx-auto max-w-2xl text-gray-500'>
          简单便捷的操作流程，让您的招聘之旅更加顺畅
        </p>
      </div>

      <div className='flex items-start justify-between px-4'>
        {features.map((feature, index) => (
          <React.Fragment key={feature.id}>
            <div className='flex-1'>
              <FeatureCard {...feature} />
            </div>
            {index < features.length - 1 && <DashedLine />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;

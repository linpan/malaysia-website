import Image from 'next/image';
import { JobList } from '@/components/job/job-list';

export default function CareerOpportunities() {
  return (
    <div className="min-h-screen bg-white"> {/* 将背景改为白色 */}
      {/* Hero Section */}
      <HeroSection />
      {/* Job Categories */}
      <div className="container mx-auto  px-4 max-w-5xl">
        <div
          className="flex justify-between items-center mb-8 opacity-0 animate-fadeIn animate-delay-400"
          style={{ animationFillMode: 'forwards' }}
        >
          <h2 className="text-2xl font-bold text-linear-text">Open Positions</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-linear-text-tertiary">Sort by:</span>
            <select
              className="text-sm border rounded-md px-3 py-1.5 bg-linear-hover border-linear-border text-linear-text-secondary focus:border-linear-accent focus:outline-none">
              <option>Newest</option>
              <option>Relevance</option>
              <option>Job Title</option>
            </select>
          </div>
        </div>
        <JobList />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30"> {/* 降低背景图片的不透明度 */}
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        className="container mx-auto py-24 px-4 relative z-10 max-w-5xl"> {/* 移除 text-black，让文字颜色由 HeroContent 组件决定 */}
        <HeroContent />
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="max-w-3xl fade-in-animation text-gray-800"> {/* 修改文字颜色为深灰色 */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600"> {/* 修改标题颜色为蓝色 */}
        Join Our Team
      </h1>
      <p className="text-xl mb-8 text-gray-700 slide-up-animation"> {/* 修改副标题颜色为灰色 */}
        Build your career with a company that values your unique skills and
        perspectives
      </p>
    </div>
  );
}
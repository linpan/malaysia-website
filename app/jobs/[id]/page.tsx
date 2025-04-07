import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { jobsData } from '@/data/jobs';
import { ArrowLeft, Briefcase, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 生成静态参数，用于构建静态路由
export function generateStaticParams() {
  return jobsData.map((job) => ({
    id: job.id,
  }));
}

// 定义页面组件的 props 类型
type JobDetailPageProps = {
  params: Promise<{ id: string }>; // params 是一个 Promise
};

// 默认导出的页面组件，标记为异步
export default async function JobDetailPage({ params }: JobDetailPageProps) {
  // 等待 params 解析
  const resolvedParams = await params;
  const job = jobsData.find((job) => job.id === resolvedParams.id);

  // 如果没有找到 job，触发 404
  if (!job) {
    notFound();
  }
  return (
    <div className="container mx-auto  px-4 py-8">
      <Link href="/jobs" className="flex items-center text-linear-text-secondary hover:text-linear-text mb-6">
        <ArrowLeft className="mr-2 h-5 w-5" />
        <span>Back to all positions</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-linear-card rounded-xl shadow-sm border border-linear-border p-8 mb-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-linear-text mb-3">{job.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-linear-text-tertiary mb-4">
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{job.postedDate}</span>
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-2 mb-6">
                <span className="font-medium text-linear-text">Language Requirements:</span>
                {job.languages.map((language) => (
                  <Badge key={language} className="bg-linear-accent/10 text-linear-accent border-linear-accent/20">
                    {language}
                  </Badge>
                ))}
                <Badge
                  variant="outline"
                  className="ml-2 bg-linear-accent/10 text-linear-accent border-linear-accent/20"
                >
                  {job.type}
                </Badge>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold text-linear-text mb-3">Job Summary</h2>
              <p className="text-linear-text-secondary mb-6">{job.summary}</p>

              <h2 className="text-xl font-semibold text-linear-text mb-3">Key Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-linear-text-secondary">
                    {responsibility}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-linear-text mb-3">Qualifications</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {job.qualifications.map((qualification, index) => (
                  <li key={index} className="text-linear-text-secondary">
                    {qualification}
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold text-linear-text mb-3">Preferred Qualifications</h2>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {job.preferredQualifications.map((qualification, index) => (
                  <li key={index} className="text-linear-text-secondary">
                    {qualification}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-linear-card rounded-xl shadow-sm border border-linear-border p-8">
            <h2 className="text-xl font-semibold text-linear-text mb-6">About Our Company</h2>
            <p className="text-linear-text-secondary mb-4">
              We are a global company dedicated to connecting businesses with their customers through exceptional
              multilingual support. Our team of language experts helps companies expand into new markets and provide
              outstanding customer experiences across different cultures and regions.
            </p>
            <p className="text-linear-text-secondary mb-4">
              With offices in major cities around the world, we offer a diverse and inclusive workplace where your
              language skills and cultural knowledge are highly valued. Join our team and be part of a company that's
              making global business more accessible and personal.
            </p>
            <p className="text-linear-text-secondary">
              We offer competitive salaries, comprehensive benefits, and numerous opportunities for career advancement.
              We believe in work-life balance and creating an environment where you can thrive both professionally and
              personally.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Card className="mb-6 border-linear-border shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for this position</h3>
                <p className="text-gray-600 mb-6">
                  Take the next step in your career journey and join our global team of language professionals.
                </p>
                <Button asChild
                        className="w-full bg-brandSecondary hover:bg-brandSecondary text-white font-bold text-base">
                  <Link href="/submit-resume">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-linear-border shadow-sm bg-linear-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-linear-text mb-4">Job Details</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-linear-text-tertiary">Job Type</h4>
                    <p className="text-linear-text">{job.type}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-linear-text-tertiary">Department</h4>
                    <p className="text-linear-text">{job.department}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-linear-text-tertiary">Location</h4>
                    <p className="text-linear-text">{job.location}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-linear-text-tertiary">Language Requirements</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {job.languages.map((language) => (
                        <Badge
                          key={language}
                          variant="outline"
                          className="border-linear-border text-linear-text-secondary"
                        >
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-linear-text-tertiary">Posted Date</h4>
                    <p className="text-linear-text">{job.postedDate.replace('Posted ', '')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
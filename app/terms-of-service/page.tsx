// app/terms-of-service/page.tsx
'use client';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type React from 'react';

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
    <div className="space-y-4 text-gray-600">{children}</div>
  </section>
);

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-4 text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="p-6 md:p-8">
          <div className="space-y-8">
            <TermsSection title="1. Introduction">
              <p>
                Welcome to TalentPioneer. By accessing our website and using our
                services, you agree to these terms of service. Please read them
                carefully.
              </p>
            </TermsSection>

            <Separator className="my-6" />

            <TermsSection title="2. Service Description">
              <p>
                TalentPioneer provides recruitment and talent acquisition
                services, connecting job seekers with potential employers. Our
                services include:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2">
                <li>Job posting and application processing</li>
                <li>Resume database management</li>
                <li>Recruitment consulting services</li>
                <li>Career guidance and coaching</li>
              </ul>
            </TermsSection>

            <Separator className="my-6" />

            <TermsSection title="3. User Obligations">
              <p>As a user of our services, you agree to:</p>
              <ul className="ml-6 mt-2 list-disc space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Not misuse or abuse our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </TermsSection>

            <Separator className="my-6" />

            <TermsSection title="4. Professional Services">
              <p>
                Our professional services are provided on an &quot;as is&quot;
                basis. We strive to:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2">
                <li>Maintain high quality recruitment standards</li>
                <li>Provide accurate and timely job market information</li>
                <li>Protect both employer and candidate interests</li>
                <li>Ensure fair and transparent recruitment processes</li>
              </ul>
            </TermsSection>

            <Separator className="my-6" />

            <TermsSection title="5. Data Protection">
              <p>
                We are committed to protecting your personal data and complying
                with applicable data protection laws. Our data protection
                measures include:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2">
                <li>Secure data storage and processing</li>
                <li>Restricted access to personal information</li>
                <li>Regular security audits and updates</li>
                <li>Transparent data handling practices</li>
              </ul>
            </TermsSection>

            <Separator className="my-6" />

            <TermsSection title="6. Intellectual Property">
              <p>
                All content, features, and functionality of our website are
                owned by TalentPioneer and are protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
            </TermsSection>

            <Separator className="my-6" />

            <TermsSection title="7. Modifications">
              <p>
                We reserve the right to modify these terms at any time.
                Continued use of our services after such modifications
                constitutes acceptance of the new terms.
              </p>
            </TermsSection>

            <Separator className="my-6" />

            <TermsSection title="8. Contact Information">
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:{' '}
                <a
                  href="mailto:katie.wang@talent-pioneer.com"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  katie.wang@talent-pioneer.com
                </a>
              </p>
            </TermsSection>
          </div>
        </Card>

        <footer className="mt-8 pb-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} TalentPioneer. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;

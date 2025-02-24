// app/terms-of-service/page.tsx
'use client';

import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="mb-4 text-2xl font-semibold text-gray-800 border-b pb-2">{title}</h2>
    {children}
  </section>
);

const ListSection: React.FC<SectionProps> = ({ title, children }) => (
  <Section title={title}>
    <ul className="space-y-2 ml-6 list-disc text-gray-600">
      {children}
    </ul>
  </Section>
);

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms of service carefully before using TalentPioneer's
            website and services. By accessing or using our services, you agree to be
            bound by these terms.
          </p>
        </header>

        <div className="space-y-8 bg-white rounded-lg shadow-sm p-8">
          <Section title="1. Service Agreement">
            <p className="text-gray-600">
              TalentPioneer provides recruitment and talent acquisition services. By
              using our services, you acknowledge and agree to these terms and any
              additional terms and conditions that may apply.
            </p>
          </Section>

          <ListSection title="2. User Responsibilities">
            <li>Provide accurate and up-to-date information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Use the services in a professional and ethical manner</li>
          </ListSection>

          <ListSection title="3. Our Services">
            <li>Job posting and candidate matching</li>
            <li>Resume and profile management</li>
            <li>Career consultation and guidance</li>
            <li>Recruitment process facilitation</li>
          </ListSection>

          <Section title="4. Intellectual Property">
            <p className="text-gray-600">
              All content, features, and functionality of the TalentPioneer platform
              are owned by TalentPioneer and are protected by international copyright,
              trademark, and intellectual property laws.
            </p>
          </Section>

          <ListSection title="5. Prohibited Activities">
            <li>Unauthorized access or use of our systems</li>
            <li>Submission of false or misleading information</li>
            <li>Interference with other users or service operation</li>
            <li>Distribution of harmful content or malware</li>
          </ListSection>

          <Section title="6. Limitation of Liability">
            <p className="text-gray-600">
              TalentPioneer provides its services on an "as is" and "as available"
              basis. We do not guarantee continuous, uninterrupted access to our
              services. We shall not be liable for any indirect, incidental, special,
              or consequential damages.
            </p>
          </Section>

          <ListSection title="7. Data Usage and Privacy">
            <li>Collection and processing of personal information</li>
            <li>Use of data for service improvement</li>
            <li>Protection of user privacy and confidentiality</li>
            <li>Compliance with data protection regulations</li>
          </ListSection>

          <Section title="8. Termination">
            <p className="text-gray-600">
              We reserve the right to terminate or suspend access to our services,
              without prior notice, for conduct that we believe violates these terms
              or is harmful to other users, us, or third parties, or for any other
              reason at our discretion.
            </p>
          </Section>

          <Section title="9. Contact Information">
            <p className="text-gray-600">
              If you have any questions about these Terms of Service, please contact
              us at{' '}
              <a
                href="mailto:katie.wang@talent-pioneer.com"
                className="text-blue-600 hover:text-blue-800 underline transition-colors"
              >
                katie.wang@talent-pioneer.com
              </a>
            </p>
          </Section>

          <footer className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Last updated: {new Date().toLocaleDateString()}
              <br />
              These terms of service are subject to change. Please review periodically
              for updates.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
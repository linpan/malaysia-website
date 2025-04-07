export type Job = {
  id: string;
  title: string;
  type: string;
  department: string;
  location: string;
  postedDate: string;
  languages: string[];
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  preferredQualifications: string[];
};

export const jobsData: Job[] = [
  {
    id: 'customer-service-mandarin',
    title: 'Customer Service',
    type: 'Full-time',
    department: 'Customer Support',
    location: 'Remote / Onsite',
    postedDate: 'Posted 2 days ago',
    languages: ['Mandarin', 'English'],
    summary: 'As a Customer Service Advisor, you will be responsible for providing exceptional customer service and support to our clients\' customers in Mandarin. You will be the first point of contact for inquiries, concerns, and requests, ensuring a positive and efficient resolution. This role requires excellent communication skills, problem-solving abilities, and a commitment to delivering outstanding customer experiences.',
    responsibilities: [
      'Respond to customer inquiries via phone, email, and/or chat in a timely and professional manner',
      'Provide accurate and helpful information about products, services, and policies',
      'Troubleshoot customer issues and resolve complaints effectively',
      'Process orders, returns, and exchanges accurately',
      'Escalate complex issues to appropriate team members for resolution',
      'Maintain a thorough understanding of client products, services, and procedures',
      'Document all customer interactions in a clear and concise manner',
      'Meet or exceed performance metrics related to call handling, resolution time, and customer satisfaction',
      'Adhere to company policies and procedures',
      'Participate in training and development programs to enhance skills and knowledge',
      'Maintain a positive and professional attitude',
      'Perform other duties as assigned',
    ],
    qualifications: [
      'High school diploma or equivalent',
      'Excellent verbal and written communication skills in Mandarin (Native or near-native fluency required)',
      'Excellent English communication skills (both verbal and written)',
      'Strong customer service skills and a passion for helping people',
      'Ability to multi-task, prioritize, and manage time effectively',
      'Proficiency in using computer applications and software',
      'Ability to work in a fast-paced environment',
      'Ability to work independently and as part of a team',
      'Willingness to work a flexible schedule, including evenings, weekends, and holidays',
      'Must be amenable to work onsite',
    ],
    preferredQualifications: [
      'Previous experience in customer service or a related field',
      'Experience with CRM systems (e.g., Salesforce, Zendesk)',
      'Knowledge of specific client products or services',
    ],
  },
  {
    id: 'sales-japanese',
    title: 'Sales Support/Sales Development',
    type: 'Full-time',
    department: 'Sales',
    location: 'Remote / Onsite',
    postedDate: 'Posted 3 days ago',
    languages: ['Japanese', 'English'],
    summary: 'As a Sales Support/Sales Development representative, you will play a crucial role in supporting the sales team and driving business growth. You will be responsible for generating leads, qualifying prospects, providing pre-sales support, managing customer relationships, and contributing to the overall success of the sales organization. Your proficiency in Japanese will be essential for communicating with clients and partners in these markets.',
    responsibilities: [
      'Identify and qualify potential leads through various channels',
      'Conduct outbound calls and emails to engage prospects',
      'Provide pre-sales technical assistance and product information',
      'Assist with preparing quotes, proposals, and presentations',
      'Respond to customer inquiries and resolve issues promptly',
      'Maintain accurate records in CRM system',
      'Build and maintain strong customer relationships',
      'Conduct market research and competitor analysis',
      'Track and report on key performance indicators',
      'Support the sales team with administrative tasks',
    ],
    qualifications: [
      'Bachelor\'s degree preferred (or equivalent work experience)',
      'Fluency in Japanese required (both written and spoken)',
      'Excellent English communication skills',
      'Strong communication and presentation skills',
      'Proficiency in using CRM systems',
      'Strong organizational and time management skills',
      'Results-oriented with proven track record',
      'Technical aptitude and ability to learn quickly',
    ],
    preferredQualifications: [
      'Previous experience in sales or customer service',
      'Knowledge of the technology industry',
      'Experience with lead generation tools',
    ],
  },
  {
    id: 'account-management-korean',
    title: 'Account Management/Partner Success',
    type: 'Full-time',
    department: 'Account Management',
    location: 'Remote / Onsite',
    postedDate: 'Posted 5 days ago',
    languages: ['Korean', 'English'],
    summary: 'As an Account Manager/Partner Success Specialist, you will be responsible for building and maintaining strong relationships with key clients or partners, ensuring their satisfaction and driving growth. You will serve as a trusted advisor, understanding their business needs, providing strategic guidance, and ensuring they achieve their goals. Your fluency in Korean will be essential for effective communication and collaboration in those markets.',
    responsibilities: [
      'Develop and maintain strong client/partner relationships',
      'Act as primary point of contact for accounts',
      'Conduct regular business reviews',
      'Identify upselling and cross-selling opportunities',
      'Develop and execute account growth plans',
      'Monitor KPIs and track progress',
      'Prepare performance reports and analysis',
      'Collaborate with internal teams',
      'Manage partner onboarding and training',
      'Stay current with industry trends',
    ],
    qualifications: [
      'Bachelor\'s degree or equivalent work experience',
      'Fluency in Korean required (both written and spoken)',
      'Excellent English communication skills',
      'Proven account management experience',
      'Strong relationship management skills',
      'Excellent presentation and negotiation skills',
      'Strong analytical and problem-solving abilities',
      'Proficiency in CRM systems',
    ],
    preferredQualifications: [
      'Experience in BPO industry',
      'Industry-specific knowledge',
      'Project management experience',
    ],
  },
];

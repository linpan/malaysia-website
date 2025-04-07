import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

export interface JobCardProps {
  title: string;
  languages: string[];
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  preferredQualifications: string[];
}

export function JobCard({
                          title,
                          languages,
                          summary,
                          responsibilities,
                          qualifications,
                          preferredQualifications,
                        }: JobCardProps) {
  return (
    <Card className="mb-6 border-gray-200 shadow-sm">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="mt-2">
              {languages.map((language) => (
                <Badge key={language} variant="outline" className="mr-2 mb-2">
                  {language}
                </Badge>
              ))}
            </CardDescription>
          </div>
          <Button className="w-full md:w-auto">Apply Now</Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{summary}</p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="responsibilities">
            <AccordionTrigger className="text-lg font-medium">Responsibilities</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-700">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="qualifications">
            <AccordionTrigger className="text-lg font-medium">Qualifications</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="text-gray-700">
                    {qualification}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="preferred">
            <AccordionTrigger className="text-lg font-medium">Preferred Qualifications</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                {preferredQualifications.map((qualification, index) => (
                  <li key={index} className="text-gray-700">
                    {qualification}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-end border-t pt-4">
        <Button variant="outline" className="mr-2">
          Share
        </Button>
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  );
}


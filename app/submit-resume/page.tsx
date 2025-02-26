'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const MAX_FILE_SIZE = 55 * 1024 * 1024; // 5MB

const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  file: z
    .custom<FileList>()
    .refine(files => files?.[0]?.size <= MAX_FILE_SIZE, {
      message: `文件大小不能超过 5MB`,
    })
    .refine(files => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), {
      message: '只支持 PDF、JPEG、JPG 或 PNG 格式',
    })
    .optional(),
  message: z.string().max(50).optional(),
});

export default function ContactPage() {
  const [content, setContent] = React.useState<string | null>(null);
  const [filename, setFilename] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      file: undefined,
      message: '',
    },
  });
  const onAddFileAction = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      const base64Content = await new Promise<string>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file); // Converts file content to Base64
      });
      setContent(base64Content);
      setFilename(file.name);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await fetch('/api/resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filename: filename, // usestate
          attachment: content, // usestate
          name: values.firstName + values.lastName,
          email: values.email,
          comment: values.message,
        }),
      });
      if (response.ok) {
        setIsLoading(false);
        form.reset();
        setContent(null);
        setFilename('');
      }
    } catch (e) {
      console.error('Error sending request:', e);
      alert(
        'Failed to send request, please try again later, or send email to katie.wang@talent-pioneer.com',
      );
    }
  }

  return (
    <div className="md:py-18 flex flex-col items-center justify-between py-12 lg:py-20">
      {/*  title*/}
      <div className="flex w-full items-center justify-center gap-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                We&apos;re here to help with your talent acquisition needs.
                Reach out to our team.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  submit-resume*/}
      <div
        className={'submit-resume mx-auto w-full max-w-3xl px-4 py-16 lg:py-20'}
      >
        <Card className="w-3xl bg-muted/60 dark:bg-card">
          <CardHeader className="text-2xl text-primary"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col gap-6 md:!flex-row">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          First Name{' '}
                          <span className="px-0.5 text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Leopoldo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>
                          Last Name{' '}
                          <span className="px-0.5 text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Miranda" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email<span className="px-0.5 text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="leomirandadev@gmail.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* add file upload*/}
                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="file"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload CV File</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept={ACCEPTED_FILE_TYPES.join(',')}
                            onChange={onAddFileAction}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message（Optional）</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Your message (max 50 characters)..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  className="mt-4 bg-brandPrimary text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}

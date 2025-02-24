'use client';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Building2, Clock, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Textarea } from '@/components/ui/textarea';
import { uploadToGoogleDrive } from '@/lib/goolge_api';

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

export const ContactSection = () => {
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section id="contact" className="container py-8 md:py-8 lg:max-w-screen-xl">
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4">
            <h2 className="mb-2 text-lg tracking-wider text-primary">
              Contact
            </h2>

            <h2 className="text-3xl font-bold md:text-4xl">Connect With Us</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Contact us today and experience our exceptional services firsthand.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-1 flex gap-2">
                <Building2 color={'#60a5fa'} className="size-6">
                  {' '}
                </Building2>
                <div className="font-bold">Find us</div>
              </div>

              <div>
                {' '}
                Suite 1122, Level 11, Menara Dungun, No. 46,
                <br /> Jalan Dungun Bukit, Damansara, 50490, Kuala Lumpur
              </div>
            </div>

            {/*<div>*/}
            {/*  <div className="mb-1 flex gap-2">*/}
            {/*    <Phone color={'#60a5fa'} className="size-6" />*/}
            {/*    <div className="font-bold">Call us</div>*/}
            {/*  </div>*/}

            {/*  <div>+1 (619) 123-4567</div>*/}
            {/*</div>*/}

            <div>
              <div className="mb-1 flex gap-2">
                <Mail color={'#60a5fa'} className="size-6" />
                <div className="font-bold">Mail US</div>
              </div>

              <div> katie.wang@talent-pioneer.com</div>
            </div>

            <div>
              <div className="flex gap-2">
                <Clock color={'#60a5fa'} className="size-6" />
                <div className="font-bold">Visit us</div>
              </div>

              <div>
                <div>Monday - Friday</div>
                <div>10AM - 4PM</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-2xl text-primary"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col gap-8 md:!flex-row">
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
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Upload File</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept={ACCEPTED_FILE_TYPES.join(',')}
                            onChange={e => {
                              // 确保只选择一个文件
                              const file = e.target.files?.[0];
                              field.onChange(file ? [file] : undefined); // 更新字段值
                            }}
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
                        <FormLabel>Message</FormLabel>
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

                <Button className="mt-4 bg-brandPrimary text-base">
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};

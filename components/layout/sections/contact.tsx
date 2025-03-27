'use client';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Building2, Clock, Loader2, Mail, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

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
          filename: filename,
          attachment: content,
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
      alert('Failed to send request');
    }
  }

  return (
    <section
      id="contact"
      className="container px-4 py-8 sm:px-6 md:py-12 lg:max-w-screen-xl"
    >
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* 联系信息部分 */}
        <div className="order-2 lg:order-1">
          <div className="mb-6">
            <h2 className="mb-2 text-lg tracking-wider text-primary">
              Contact
            </h2>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Connect With Us
            </h2>
          </div>

          <p className="mb-8 text-muted-foreground">
            Contact us today and experience our exceptional services firsthand.
          </p>

          <div className="flex flex-col gap-6">
            {/* 地址信息 */}
            <div className="rounded-lg bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Building2 color={'#60a5fa'} className="size-5 sm:size-6" />
                <div className="font-bold">Find us</div>
              </div>
              <div className="pl-7 text-sm sm:text-base">
                Suite 1122, Level 11, Menara Dungun,
                <br /> No. 46, Jalan Dungun, Bukit Damansara,
                <br /> 50490, Kuala Lumpur
              </div>
            </div>

            {/* 邮箱信息 */}
            <div className="rounded-lg bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Mail color={'#60a5fa'} className="size-5 sm:size-6" />
                <div className="font-bold">Email Us</div>
              </div>
              <div className="pl-7 text-sm sm:text-base">
                katie.wang@talent-pioneer.com
              </div>
            </div>

            {/* 上班时间 */}
            <div className="rounded-lg bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Clock color={'#60a5fa'} className="size-5 sm:size-6" />
                <div className="font-bold">Visit us</div>
              </div>
              <div className="pl-7 text-sm sm:text-base">
                <div>Monday - Friday</div>
                <div>9AM - 6PM</div>
              </div>
            </div>

            {/* 电话信息 */}
            <div className="rounded-lg bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Phone color={'#60a5fa'} className="size-5 sm:size-6" />
                <div className="font-bold">Call us</div>
              </div>
              <div className="pl-7 text-sm sm:text-base">
                (+60) 03-4812 8919
              </div>
            </div>
          </div>
        </div>

        {/* 表单部分 */}
        <Card className="order-1 border bg-muted/60 shadow-md lg:order-2">
          <CardHeader className="pb-2 pt-6">
            <h3 className="text-xl font-semibold text-primary">
              Send us a message
            </h3>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                {/* 姓名字段 */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          First Name <span className="text-red-500">*</span>
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
                      <FormItem>
                        <FormLabel>
                          Last Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Miranda" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* 邮箱字段 */}
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
                          placeholder="your.email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 文件上传 */}
                <FormField
                  control={form.control}
                  name="file"
                  render={() => (
                    <FormItem>
                      <FormLabel>Upload File</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept={ACCEPTED_FILE_TYPES.join(',')}
                          onChange={onAddFileAction}
                          className="file:mr-4 file:rounded file:border-0 file:bg-primary file:px-3 file:py-1 file:text-white hover:file:bg-primary/90 flex items-center"
                        />
                      </FormControl>
                      <p className="text-xs text-muted-foreground">
                        Supported formats: PDF, JPEG, JPG, PNG, DOC, DOCX, XLS,
                        XLSX (Max: 5MB)
                      </p>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 消息字段 */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Your message (max 50 characters)..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 提交按钮 */}
                <Button
                  className="mt-2 flex h-11 items-center justify-center space-x-2 rounded-md bg-brandSecondary text-base font-medium text-white transition-all duration-200 ease-in-out hover:bg-brandSecondary/90 focus:outline-none focus:ring-2 focus:ring-brandSecondary/50 focus:ring-offset-2 active:bg-brandSecondary/80 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={isLoading}
                  aria-busy={isLoading}
                  type="submit"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    'Submit'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="px-6 py-4 text-xs text-muted-foreground">
            We'll respond to your inquiry as soon as possible.
          </CardFooter>
        </Card>
      </section>
    </section>
  );
};

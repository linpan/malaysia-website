// see: https://github.com/resend/resend-examples/blob/main/with-attachments-content/src/pages/index.tsx
import { resend } from '@/lib/resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { content, filename } = req.body;

  switch (method) {
    case 'POST': {
      const { data } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Receipt for your payment',
        html: '<p>Thanks for the payment</p>',
        attachments: [
          {
            content,
            filename,
          },
        ],
      });

      // @ts-ignore
      return res.status(200).send({ data: data.id });
    }
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;
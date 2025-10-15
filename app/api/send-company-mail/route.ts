/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
import dotenv from 'dotenv';
import fs from 'fs';
import { mailTemplate, MailTemplateData } from '../../_server/lib/utils/mailTemplate';
import { getNodeRequest } from '../../_server/lib/utils/getNodeRequest';
import { formatCamelCaseName } from '@/lib/utils/general';
import { ALL_FIELDS_DEFAULT } from '@/lib/constants/forms';
import { ENVIRONMENT } from '@/app/_server/lib/config/environment';
// import { logMailToFile } from './logMailToFile';

dotenv.config();

export const config = {
  api: { bodyParser: false }, // So formidable can function properly
};

export async function POST(req: NextRequest) {
  try {
    const nodeReq = await getNodeRequest(req);
    const form = formidable({ multiples: true, keepExtensions: true });
    const formData = await new Promise<{ fields: any; files: any }>((resolve, reject) => {
      form.parse(nodeReq as any, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });
    const { fields, files } = formData;

    if (!fields.formName) {
      return NextResponse.json(
        {
          success: false,
          message: 'Mail sending failed',
          error: 'Please include a subject for the mail',
        },
        { status: 400 }
      );
    }

    const invalidFields: string[] = [];

    for (const key in fields) {
      if (Array.isArray(fields[key]) && fields[key].length < 2) {
        fields[key] = fields[key][0] ?? '';
      }

      if (!allowedFields.has(key)) {
        invalidFields.push(key);
      }
    }

    for (const key in files) {
      if (!allowedFields.has(key)) {
        invalidFields.push(key);
      }
    }

    if (invalidFields.length) {
      return NextResponse.json(
        {
          success: false,
          message: 'Mail sending failed',
          error: `The field(s) ${invalidFields.map(item => `"${item}"`).join(', ')} are invalid`,
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      port: ENVIRONMENT.EMAIL.PORT || 465,
      host: ENVIRONMENT.EMAIL.HOST,
      auth: {
        user: ENVIRONMENT.EMAIL.FROM,
        pass: ENVIRONMENT.EMAIL.PASSWORD,
      },
      secure: true,
    });

    const mailTemplateOptions = {
      title: fields.formName.trim() + ' Form Submission',
      top: [
        [
          `You've received a new submission through the website ${fields.formName} \
          form. The details provided by the sender are included below for your review.`,
        ],
      ],
      data: Object.entries(fields).reduce<MailTemplateData[]>((acc, [property, value]) => {
        if (property !== 'formName') {
          acc.push({
            property: formatCamelCaseName(property),
            value: (Array.isArray(value) ? value.join(', ') : value) as string,
          });
        }

        return acc;
      }, []),
      end: 'Please feel free to follow up with the sender if any further \
      information is needed.',
    };
    const html = mailTemplate(mailTemplateOptions);

    const attachments = !files.files
      ? []
      : Array.isArray(files.files)
        ? files.files.map((file: any) => ({
            filename: file.originalFilename,
            content: fs.createReadStream(file.filepath),
          }))
        : [
            {
              filename: files.files.originalFilename,
              content: fs.createReadStream(files.files.filepath),
            },
          ];

    const senderName =
      fields.name ||
      fields.brandName ||
      fields.company ||
      fields.contactPerson ||
      `${fields.firstName || ''} ${fields.lastName || ''}`.trim() ||
      'Adepoju Olayode Portfolio Website';
    const replyName = senderName === 'Adepoju Olayode Portfolio Website' ? '' : senderName;

    const mailOptions = {
      from: `${senderName} (From Adepoju Olayode Portfolio Website) <${ENVIRONMENT.EMAIL.FROM}>`,
      to: `Adepoju Olayode Portfolio <${ENVIRONMENT.EMAIL.TO}>`,
      ...(fields.email && { replyTo: `${replyName || fields.email} <${fields.email}>` }),
      subject: `${fields.formName.trim()} Form Submission`,
      html,
      attachments,
    };

    const data = await transporter.sendMail(mailOptions);

    // if (fields.email) {
    //   const html = mailTemplate({
    //     title: `Your Form Submission Has Been Received`,
    //     top: [
    //       [
    //         'Thank you for reaching out to us via our website. We have successfully received \
    //         your submission and our team is currently reviewing the details.',
    //       ],
    //       [
    //         'A member of our team will be in touch with you shortly to provide further \
    //         assistance and address your request.',
    //       ],
    //       [
    //         'We appreciate your interest in Pinpoint Global and look forward to \
    //         connecting with you soon.',
    //       ],
    //       ['Warm regards', 'Adepoju Olayode'],
    //     ],
    //     data: [],
    //     end: '',
    //   });
    //   transporter.sendMail({
    //     from: `Adepoju Olayode (no-reply) <${ENVIRONMENT.EMAIL.FROM}>`,
    //     to: `${replyName || fields.email} <${fields.email}>`,
    //     subject: `${fields.formName.trim()} Form Submission Received`,
    //     html,
    //   });
    // }

    return NextResponse.json(
      { success: true, data, message: 'Mail sent successfully' },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err, message: 'Error sending mail' },
      { status: 500 }
    );
  }
}

const allowedFields = new Set([
  ...Object.keys(ALL_FIELDS_DEFAULT),
  'formName',
  'name',
  'firstName',
  'lastName',
  'email',
  'phone',
  'tel',
  'company',
  'services',
  'message',
  'portfolio',
  'linkedin',
  'files',
]);

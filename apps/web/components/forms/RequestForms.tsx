'use client';
import { contactFormData, contactFormSchema } from '@/lib/constants/forms';
import { RequestForm, RequestFormFileProps } from './FormTemplate';
import { useMemo, useState } from 'react';
import { omit } from 'lodash';
import z from 'zod';

export const ContactForm = (props: RequestFormFileProps) => {
  type TSchema = typeof contactFormSchema;
  const inputChangeWatch = (contactFormData['inputChangeWatch'] || {}) as unknown as Partial<
    Record<keyof z.infer<TSchema>, (updatedFormValues: z.infer<TSchema>) => z.infer<TSchema>>
  >;

  return (
    <RequestForm
      {...omit(contactFormData, ['inputChangeWatch'])}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      inputChangeWatch={inputChangeWatch}
      {...props}
    />
  );
};

export const REQUEST_FORMS = {
  contact_form: ContactForm,
};

export const RegularForm = ({ slug }: { slug: keyof typeof REQUEST_FORMS }) => {
  const [files, setFiles] = useState<File[]>([]);

  const FormComp = useMemo(() => {
    return slug ? REQUEST_FORMS[slug] : null;
  }, [slug]);

  if (!FormComp)
    return (
      <div className="bg-card px-4 500:px-6 md:px-8 py-8 rounded-xl shadow-soft shadow-primary/15 border border-border" />
    );

  return <FormComp files={files} setFiles={setFiles} />;
};

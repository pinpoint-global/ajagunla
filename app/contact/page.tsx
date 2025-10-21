import { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';
import { ContactHero } from '@/components/sections/contact/Hero';
import { ContactPageContent } from '@/components/sections/contact/Content';

export const metadata: Metadata = {
  title: 'Contact Senator Fadeyi-Ajagunla | Get in touch',
  description:
    "Contact Senator Olubiyi Fadeyi-Ajagunla's office for constituent inquiries, media requests, or collaboration opportunities. Serving Osun Central Senatorial District.",
  keywords:
    'contact senator, Osun Central office, constituent services, senator contact form, contact senator fadeyi, contact senator ajagunla',
};

export default function Contact() {
  return (
    <MainLayout>
      <ContactHero />
      <ContactPageContent />
    </MainLayout>
  );
}

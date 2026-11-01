import type { Metadata } from 'next';
import ContactContent from './ContactContent';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ark-studio-portfolio.vercel.app';

export const metadata: Metadata = {
  title: 'Contact & Project Inquiry — ARK STUDIO | Abdulrehman Khalid',
  description:
    'Start a conversation with Abdulrehman Khalid at ARK STUDIO. Inquire about custom website design, bilingual English/Arabic development, UI/UX, and branding via WhatsApp or email.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Project Inquiry — ARK STUDIO | Abdulrehman Khalid',
    description:
      'Start a conversation with Abdulrehman Khalid at ARK STUDIO. Inquire about custom website design, bilingual English/Arabic development, UI/UX, and branding via WhatsApp or email.',
    url: `${siteUrl}/contact`,
    siteName: 'ARK STUDIO',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ARK STUDIO — Contact & Project Inquiry',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Project Inquiry — ARK STUDIO | Abdulrehman Khalid',
    description:
      'Start a conversation with Abdulrehman Khalid at ARK STUDIO. Inquire about custom website design, bilingual English/Arabic development, UI/UX, and branding via WhatsApp or email.',
    images: [`${siteUrl}/images/og-image.png`],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}

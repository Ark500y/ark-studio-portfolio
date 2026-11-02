import type { Metadata, Viewport } from 'next';
import { Anton, Inter, Caveat } from 'next/font/google';
import './globals.css';
import LogoReveal from '@/components/LogoReveal';
import { CONTACT } from '@/data/contact';
import { HERO_DATA } from '@/data/hero';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

// Production canonical domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ark-studio-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ARK STUDIO — Abdulrehman Khalid | Web Designer & Digital Creator',
    template: '%s | ARK STUDIO',
  },
  description:
    'Editorial portfolio of Abdulrehman Khalid (ARK STUDIO). Custom website design and development, responsive business sites, bilingual Arabic/English platforms, and UI/UX.',
  keywords: [
    'ARK STUDIO',
    'Abdulrehman Khalid',
    'Web Designer',
    'Digital Creator',
    'UI/UX Designer',
    'Bilingual Websites',
    'Arabic English Web Design',
    'Next.js Portfolio',
    'Responsive Business Websites',
    'Graphic Design & Branding',
  ],
  authors: [{ name: 'Abdulrehman Khalid', url: CONTACT.whatsappUrl }],
  creator: 'Abdulrehman Khalid',
  publisher: 'ARK STUDIO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ARK STUDIO — Abdulrehman Khalid | Web Designer & Digital Creator',
    description:
      'Editorial portfolio of Abdulrehman Khalid (ARK STUDIO). Custom website design, responsive business platforms, Arabic/English bilingual systems, and UI/UX.',
    url: siteUrl,
    siteName: 'ARK STUDIO',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ARK STUDIO — Abdulrehman Khalid Editorial Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARK STUDIO — Abdulrehman Khalid | Web Designer & Digital Creator',
    description:
      'Editorial portfolio of Abdulrehman Khalid (ARK STUDIO). Custom website design, responsive business platforms, Arabic/English bilingual systems, and UI/UX.',
    images: [`${siteUrl}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'googlea8b3e9a5219c3287',
  },
};

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data: Uses strictly given facts (NO ratings, reviews, addresses or awards)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Abdulrehman Khalid',
      jobTitle: 'Web Designer & Digital Creator',
      description: HERO_DATA.bio,
      url: siteUrl,
      image: `${siteUrl}/images/abdulrehman.png`,
      sameAs: [CONTACT.whatsappUrl],
      email: CONTACT.email,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#organization`,
      name: 'ARK STUDIO',
      url: siteUrl,
      logo: `${siteUrl}/logo/ark-primary-lockup-512.png`,
      image: `${siteUrl}/images/og-image.png`,
      description:
        'Website design and development, responsive business sites, Arabic/English bilingual sites, UI/UX, graphic design and branding, landing pages, redesigns, SEO-friendly builds.',
      founder: { '@id': `${siteUrl}/#person` },
      email: CONTACT.email,
      telephone: CONTACT.whatsappDisplay,
      knowsLanguage: ['en', 'ar'],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${caveat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LogoReveal />
        {children}
      </body>
    </html>
  );
}

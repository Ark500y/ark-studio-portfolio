import type { Metadata } from 'next';
import ErrorLayout from '@/components/ErrorLayout';

export const metadata: Metadata = {
  title: '404 — Page Not Found | ARK STUDIO',
  description: "This page doesn't exist. The link may be broken, or the page may have moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <ErrorLayout
        code="404"
        label="ERROR 404 // NOT FOUND"
        headline="This page doesn't exist."
        description="The link may be broken, or the page may have moved. Let's get you back on track."
        handwrittenAccent="Lost in the digital space"
        primaryAction={{
          label: 'BACK TO HOME',
          href: '/',
        }}
        secondaryAction={{
          label: 'VIEW PROJECTS',
          href: '/projects',
        }}
        showContactLinks={true}
      />
    </>
  );
}

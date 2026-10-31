'use client';

import { useEffect } from 'react';
import ErrorLayout from '@/components/ErrorLayout';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console only in development. Never show stack traces or error details to visitors.
    if (process.env.NODE_ENV !== 'production') {
      console.error('Route error captured by app/error.tsx:', error);
    }
  }, [error]);

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <ErrorLayout
        code="500"
        label="ERROR 500 // APPLICATION EXCEPTION"
        headline="Something went wrong."
        description="An unexpected error happened on our side. Please try again."
        handwrittenAccent="We are looking into it"
        primaryAction={{
          label: 'TRY AGAIN',
          onClick: reset,
        }}
        secondaryAction={{
          label: 'BACK TO HOME',
          href: '/',
        }}
        showContactLinks={true}
      />
    </>
  );
}

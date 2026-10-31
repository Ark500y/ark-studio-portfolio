'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console only in development
    if (process.env.NODE_ENV !== 'production') {
      console.error('Global root layout error captured by app/global-error.tsx:', error);
    }
  }, [error]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <title>500 — Critical System Error | ARK STUDIO</title>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
              }
              body {
                background-color: #050505;
                color: #FFFFFF;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 24px;
                overflow-x: hidden;
              }
              .ge-header {
                display: flex;
                align-items: center;
                gap: 12px;
                padding-bottom: 20px;
                border-bottom: 1px solid #252525;
              }
              .ge-brand {
                font-size: 16px;
                font-weight: 800;
                letter-spacing: 0.12em;
                color: #FFFFFF;
                text-decoration: none;
              }
              .ge-role {
                font-size: 11px;
                letter-spacing: 0.15em;
                color: #A0A0A0;
                text-transform: uppercase;
              }
              .ge-main {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 40px 16px;
                position: relative;
              }
              .ge-glow {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 320px;
                height: 320px;
                background: radial-gradient(circle, rgba(229, 9, 32, 0.18) 0%, transparent 70%);
                filter: blur(60px);
                pointer-events: none;
              }
              .ge-label {
                font-size: 11px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: #A0A0A0;
                margin-bottom: 12px;
                font-weight: 600;
              }
              .ge-code {
                font-family: Impact, "Arial Black", -apple-system, sans-serif;
                font-size: clamp(80px, 20vw, 180px);
                line-height: 0.85;
                color: #E50920;
                text-shadow: 0 0 35px rgba(229, 9, 32, 0.35);
                margin-bottom: 16px;
                user-select: none;
              }
              .ge-title {
                font-family: Impact, "Arial Black", -apple-system, sans-serif;
                font-size: clamp(24px, 4vw, 42px);
                line-height: 1.1;
                letter-spacing: 0.02em;
                color: #FFFFFF;
                text-transform: uppercase;
                margin-bottom: 12px;
              }
              .ge-desc {
                font-size: 15px;
                line-height: 1.6;
                color: #A0A0A0;
                max-width: 500px;
                margin-bottom: 28px;
              }
              .ge-actions {
                display: flex;
                gap: 16px;
                flex-wrap: wrap;
                justify-content: center;
              }
              .ge-btn-primary {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 13px 28px;
                background-color: #E50920;
                color: #FFFFFF;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                border-radius: 2px;
                border: 1px solid #E50920;
                cursor: pointer;
                text-decoration: none;
                transition: background-color 200ms ease;
              }
              .ge-btn-primary:hover {
                background-color: #ff1a2b;
              }
              .ge-btn-secondary {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 13px 26px;
                background-color: transparent;
                color: #FFFFFF;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                border-radius: 2px;
                border: 1px solid #333333;
                cursor: pointer;
                text-decoration: none;
                transition: border-color 200ms ease;
              }
              .ge-btn-secondary:hover {
                border-color: #FFFFFF;
              }
              .ge-footer {
                padding-top: 20px;
                border-top: 1px solid #252525;
                font-size: 12px;
                color: #666666;
                text-align: center;
                letter-spacing: 0.05em;
              }
            `,
          }}
        />
      </head>
      <body>
        <header className="ge-header">
          <a href="/" className="ge-brand">
            ARK STUDIO
          </a>
          <span style={{ color: '#252525' }}>|</span>
          <span className="ge-role">Web Designer & Digital Creator</span>
        </header>

        <main className="ge-main" role="main">
          <div className="ge-glow" aria-hidden="true" />
          <span className="ge-label">// CRITICAL ERROR 500 // ROOT RECOVERY</span>
          <div className="ge-code" aria-hidden="true">
            500
          </div>
          <h1 className="ge-title">Something went wrong.</h1>
          <p className="ge-desc">
            A critical system error occurred during layout initialization. Please try recovering or return
            to the main portfolio.
          </p>

          <div className="ge-actions">
            <button type="button" onClick={() => reset()} className="ge-btn-primary">
              TRY AGAIN
            </button>
            <a href="/" className="ge-btn-secondary">
              BACK TO HOME
            </a>
          </div>
        </main>

        <footer className="ge-footer">
          © {new Date().getFullYear()} ARK STUDIO • ABDULREHMAN KHALID
        </footer>
      </body>
    </html>
  );
}

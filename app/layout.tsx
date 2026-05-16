import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Invoice Late Fee Calculator",
  description: "Automatically add late fees to overdue Stripe invoices. Save time and get paid faster."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="84a639e3-8c57-47b5-80d7-b65b66875ff0"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

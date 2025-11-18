
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import SalesNotification from '@/components/landing/SalesNotification';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Rotina Positiva',
  description: 'O sistema visual que transforma disciplina em um jogo que a criança AMA.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Poppins:wght@600;700&family=Quicksand:wght@500&display=swap" rel="stylesheet" />
        <script
          id="utmify-pixel-script"
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "677b35a79d0a196ad04dc661";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids=""
          async
          defer
        ></script>
      </head>
      <body className="font-body antialiased">
        <SalesNotification />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

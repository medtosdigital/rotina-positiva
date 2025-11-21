
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import SalesNotification from '@/components/landing/SalesNotification';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Quadros de Rotina Positiva',
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
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></script>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '889715993165161');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=889715993165161&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <script
          id="back-redirect-script"
          dangerouslySetInnerHTML={{
            __html: `
              const link = '/?popup=true';

              function setBackRedirect(url) {
                let urlBackRedirect = url;
                urlBackRedirect = urlBackRedirect.trim() +
                  (urlBackRedirect.indexOf('?') > 0 ? '&' : '') +
                  document.location.search.replace('?', '').toString();

                history.pushState({}, '', location.href);
                history.pushState({}, '', location.href);
                history.pushState({}, '', location.href);

                window.addEventListener('popstate', () => {
                  setTimeout(() => {
                    location.href = urlBackRedirect;
                  }, 1);
                });
              }

              if (window.location.pathname !== '/desconto') {
                setBackRedirect(link);
              }
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <SalesNotification />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

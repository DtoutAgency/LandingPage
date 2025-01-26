import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import AnalyticsProvider from "./AnalyticsProvider/GAAnalytics";

const pop = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Dtout Agency - Book Now",
  description:
    "At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies.",
  keywords:
    "Dental Digital Marketing USA, Digital Marketing, Clinic Marketing, Marketing Service, Marketing Strategies",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
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
            fbq('init', '517991158551582');
            fbq('track', 'PageView');
          `,
        }}
      />
      <html lang="en">
        <head>
          <title>Dtout Agency - Book Now</title>
          <meta
            name="description"
            content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies."
          />
          <meta property="keywords" content="agency" />
          <meta property="og:url" content="https://dtoutagency.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Dtout Agency - Book Now" />
          <meta
            property="og:description"
            content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies."
          />
          <meta property="og:image" content="/Dtout_logo.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="dtoutagency.com" />
          <meta property="twitter:url" content="https://dtoutagency.com" />
          <meta
            name="twitter:title"
            content="Dtout Agency - Book Now"
          />
          <meta
            name="twitter:description"
            content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies."
          />
          <meta name="twitter:image" content="/Dtout_logo.png" />
        </head>
        <body className={`${pop.className} bg-white antialiased`}>
          <AnalyticsProvider />
          {children}
        </body>
      </html>
    </>
  );
}

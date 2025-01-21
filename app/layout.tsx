
import { Poppins} from "next/font/google";
import "./globals.css";
import Script from 'next/script';



const pop = Poppins({weight:["400"],subsets:['latin'] });


export const metadata = {
  title: "Dtout Agency - Book Now",
  description: "At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    url: "https://dtoutagency.vercel.app/",
    type: "website",
    title: "Dtout Agency - Book Now",
    description: "At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies.",
    image: "https://opengraph.b-cdn.net/production/images/8bfed5a0-5f95-4d4d-b678-d10bca468963.png?token=iTkb6y96WvB5Eswxfy33QFgDZck-HnV6Uir_Z7eaAzg&height=500&width=500&expires=33272851741",
  },
  twitter: {
    card: "summary_large_image",
    domain: "dtoutagency.vercel.app",
    url: "https://dtoutagency.vercel.app/",
    title: "Dtout Agency - Book Now",
    description: "At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies.",
    image: "https://opengraph.b-cdn.net/production/images/8bfed5a0-5f95-4d4d-b678-d10bca468963.png?token=iTkb6y96WvB5Eswxfy33QFgDZck-HnV6Uir_Z7eaAzg&height=500&width=500&expires=33272851741",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `,
        }}
      />
    <html lang="en">
      <body
        className={`${pop.className} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
    </>
  );
}

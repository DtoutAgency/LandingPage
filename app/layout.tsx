
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
            fbq('init', '517991158551582');
            fbq('track', 'PageView');
          `,
        }}
      />
    <html lang="en">
      <head>
  
       <title>Dtout Agency - Book Now</title>
        <meta name="description" content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies."></meta>

          <meta property="og:url" content="https://dtoutagency.com"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:title" content="Dtout Agency - Book Now"></meta>
          <meta property="og:description" content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies."></meta>
          <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/49ea45a7-7bc5-4c6f-9b2f-8e705953557a.png?token=Q2wYM4tQE5TyNHwSRdFwKHqzAbVQ9RJXCuHX-ANq7GI&height=500&width=500&expires=33273560962"></meta>


          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:domain" content="dtoutagency.com"></meta>
          <meta property="twitter:url" content="https://dtoutagency.com"></meta>
          <meta name="twitter:title" content="Dtout Agency - Book Now"></meta>
          <meta name="twitter:description" content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies."></meta>
          <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/49ea45a7-7bc5-4c6f-9b2f-8e705953557a.png?token=Q2wYM4tQE5TyNHwSRdFwKHqzAbVQ9RJXCuHX-ANq7GI&height=500&width=500&expires=33273560962"></meta>


      </head>
      <body
        className={`${pop.className} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
    </>
  );
}

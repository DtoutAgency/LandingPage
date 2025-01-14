
import { Poppins} from "next/font/google";
import "./globals.css";
import Head from "next/head";



const pop = Poppins({weight:["400"],subsets:['latin'] });


export const metadata = {
  title: "Dtout Agency - Book Now",
  description: "At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies.",
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <Head>
      
      <title>Dtout Agency - Book Now</title>
      <meta name="description" content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies." />

     
      <meta property="og:url" content="https://dtoutagency.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dtout Agency - Book Now" />
      <meta property="og:description" content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies." />
      <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/8bfed5a0-5f95-4d4d-b678-d10bca468963.png?token=iTkb6y96WvB5Eswxfy33QFgDZck-HnV6Uir_Z7eaAzg&height=500&width=500&expires=33272851741" />

  
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="dtoutagency.vercel.app" />
      <meta property="twitter:url" content="https://dtoutagency.vercel.app/" />
      <meta name="twitter:title" content="Dtout Agency - Book Now" />
      <meta name="twitter:description" content="At Dtout Agency, we are dedicated to helping dental clinics achieve exceptional growth through tailored digital marketing strategies." />
      <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/8bfed5a0-5f95-4d4d-b678-d10bca468963.png?token=iTkb6y96WvB5Eswxfy33QFgDZck-HnV6Uir_Z7eaAzg&height=500&width=500&expires=33272851741" />
    </Head>
      <body
        className={`${pop.className} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

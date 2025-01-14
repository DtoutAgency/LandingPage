
import { Poppins} from "next/font/google";
import "./globals.css";




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
    <html lang="en">
      <body
        className={`${pop.className} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

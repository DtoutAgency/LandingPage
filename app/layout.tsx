
import { Poppins} from "next/font/google";
import "./globals.css";



const pop = Poppins({weight:["400"],subsets:['latin'] });


export const metadata = {
  title: "Dtout Agency - Book Now",
  description: "Landing Page for Dtout Agency",
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
      <body
        className={`${pop.className} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

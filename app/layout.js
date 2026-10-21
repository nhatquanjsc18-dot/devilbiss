import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nhatquan.vn"),
  title: {
    default: "Nhất Quán - Thiết Bị Phun Sơn & Chà Nhám Công Nghiệp Chính Hãng",
    template: "%s | Nhất Quán",
  },
  description:
    "Công ty CP Công nghiệp Nhất Quán - nhà phân phối chính hãng súng phun sơn Devilbiss, Binks, Ransburg, Anest Iwata và máy chà nhám Mirka, Dynabrade tại Việt Nam.",
  icons: {
    icon: "/favicon.png",
  },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Công ty CP Công nghiệp Nhất Quán',
  alternateName: 'Nhat Quan INS JSC',
  url: 'https://nhatquan.vn',
  telephone: '+84907811767',
  email: 'hoai@nhatquan.vn',
  areaServed: 'VN',
  description:
    'Nhà phân phối thiết bị phun sơn Devilbiss, Binks, Ransburg, Anest Iwata và máy chà nhám Mirka, Dynabrade tại Việt Nam.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y3QGZVYCS1"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y3QGZVYCS1');
          `}
        </Script>
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}

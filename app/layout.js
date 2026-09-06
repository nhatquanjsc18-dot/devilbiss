import { Inter, Oswald } from "next/font/google";
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

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}

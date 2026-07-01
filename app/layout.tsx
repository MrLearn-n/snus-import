import localFont from "next/font/local";

import GSAPWrapper from "@/app/providers/GSAPWrapper";
import { LanguageProvider } from "@/shared/context/LanguageContext";
import AgeGate from "@/shared/ui/AgeGate";

import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

import "@/app/styles/normalize.scss";
import "@/app/styles/scrollbar.scss";
import "@/app/styles/colors.scss";
import "@/app/styles/theming.scss";
import "@/app/styles/global.scss";

const inter = localFont({
  src: [
    {
      path: "../src/shared/assets/fonts/Inter-Regular.ttf",
      style: "normal",
    },
    {
      path: "../src/shared/assets/fonts/Inter-Italic.ttf",
      style: "italic",
    },
  ],
});

const montserrat = localFont({
  src: "../src/shared/assets/fonts/Montserrat-SemiBold.ttf",
  weight: "600",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="be" className={`${inter.className} ${montserrat.variable}`}>
      <body>
        <LanguageProvider>
          <AgeGate />
          <GSAPWrapper>
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </GSAPWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}

import localFont from "next/font/local";

import GSAPWrapper from "@/app/providers/GSAPWrapper";

import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";

import "@/app/styles/normalize.scss";
import "@/app/styles/scrollbar.scss";
import "@/app/styles/colors.scss";
import "@/app/styles/theming.scss";
import "@/app/styles/global.scss";

const Inter = localFont({
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

const Montserrat = localFont({
  src: "../src/shared/assets/fonts/Montserrat-SemiBold.ttf",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${Inter.className} ${Montserrat.variable}`}>
      <body>
        <GSAPWrapper>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </GSAPWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import NavbarDemo from "@/components/elements/NavBar";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soraia Felix",
  description: "Portfólio de Soraia Felix, mentora comportamental dedicada a inspirar transformação pessoal e desenvolvimento emocional, com conteúdos, programas e insights para o crescimento individual.",
  icons: { icon: "/favicon.ico"},
  keywords: [
    "Soraia Felix",
    "mentoria comportamental",
    "autoconhecimento",
    "desenvolvimento pessoal",
    "transformação de vida",
    "coach comportamental",
    "inteligência emocional",
    "mentora",
    "Soraia Felix mentora",
    "empreendedorismo",
  ],
  openGraph: {
    title: "Soraia Felix | Mentora Comportamental",
    description:
      "Descubra o portfólio de Soraia Felix, especialista em comportamento humano e desenvolvimento pessoal.",
    url: "https://soraiafelix.com.br",
    siteName: "Soraia Felix",
    locale: "pt_BR",
    type: "website",
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
        className={`${heebo.variable} antialiased`}
      > 
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}

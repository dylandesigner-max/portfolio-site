import type { Metadata } from "next";
import { Rethink_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PageTransition } from "@/components/providers/page-transition";
import { LocaleProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import { RouteTransitionProvider } from "@/components/providers/route-transition";
import { cn } from "@/lib/utils";

const archivo = Rethink_Sans({
  subsets: ["latin"],
  adjustFontFallback: false,
  variable: "--font-sans",
});

const spaceGrotesk = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Dylan Xavier — Product & UX/UI Designer",
  description:
    "Product Designer em Curitiba focado em UX/UI para SaaS e mobile. Pesquisa, prototipação e interfaces testadas com usuários reais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Static export has no server to read a locale cookie on, so every request
  // renders in Portuguese by default; LocaleProvider picks up a saved
  // preference client-side on mount (see its own comment for the tradeoff).
  const locale = "pt" as const;

  return (
    <html
      lang={locale}
      className={cn("h-full antialiased", archivo.variable, spaceGrotesk.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LocaleProvider initialLocale={locale}>
            <SmoothScrollProvider>
              <RouteTransitionProvider>
                <div className="grain-overlay" aria-hidden="true" />
                <CustomCursor />
                <Navbar />
                <main className="flex-1">
                  <PageTransition>{children}</PageTransition>
                </main>
                <Footer />
              </RouteTransitionProvider>
            </SmoothScrollProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { CryptoProvider } from "@/context/CryptoContext";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Dash Crypto",
  description: "Simple dashboard of cryptos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <CryptoProvider>
            {children}
          </CryptoProvider>
        </Provider>
      </body>
    </html>
  );
}

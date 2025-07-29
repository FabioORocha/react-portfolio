import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  display: 'swap',
  weight: ['100','200','300','400','500', '600', '700','800','900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio Fábio Rocha",
  description: "Portfolio Fábio Rocha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ poppins.className }>
        {children}
      </body>
    </html>
  );
}

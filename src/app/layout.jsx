import { Kanit } from 'next/font/google'
import "../styles/globals.css";
import { FundsProvider } from '@/context/FundsContext';

const Kani = Kanit({
  subsets: ['latin'],
  weight: ['300','400','500','600', '700'],
  variable: '--font-kanit',
  display: 'swap',
});

export const metadata = {
  title: "Edron Capitals",
  description: "Fondo de invercion colectiva de alta rentavilidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Kani.variable}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" />
      </head>
      <body>
        <FundsProvider>
          {children}
        </FundsProvider>
      </body>
    </html>
  );
}

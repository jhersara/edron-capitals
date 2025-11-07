import { Kanit } from 'next/font/google'
import "../styles/globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}

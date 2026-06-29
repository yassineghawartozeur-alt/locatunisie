import "./globals.css";
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export const metadata = {
  title: "LocaTunisie",
  description: "Louez facilement des logements partout en Tunisie, à petits prix et en toute confiance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
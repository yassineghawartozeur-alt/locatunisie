import "./globals.css";
import Header from '@/Components/Header'; // تأكد من وجود المكونات في مجلد Components
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

export const metadata = {
  title: "LocaTunisie",
  description: "Louez facilement des logements partout en Tunisie, à petits prix et en toute confiance", // تم تحديث الوصف حسب "image_45abfc.jpg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

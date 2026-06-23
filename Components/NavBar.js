import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-between p-4 font-menu bg-gray-50">
      <div className="flex gap-4">
        <Link href="/" className="hover:text-primary">Accueil</Link>
        <Link href="/logements" className="hover:text-primary">Logements</Link>
        <Link href="/inscription" className="hover:text-primary">Inscription</Link>
        <Link href="/contact" className="hover:text-primary">Contact</Link>
      </div>
      <button className="bg-primary text-white px-4 py-1 rounded">Connexion</button>
    </nav>
  );
}
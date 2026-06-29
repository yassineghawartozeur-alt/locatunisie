import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-orange-500 font-extrabold text-xl tracking-tight">
          Loca<span className="text-gray-800">Tunisie</span>
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-orange-500 transition-colors">Accueil</Link>
          <Link href="/logements" className="hover:text-orange-500 transition-colors">Logements</Link>
          <Link href="/inscription" className="hover:text-orange-500 transition-colors">Inscription</Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow">
          Connexion
        </button>
      </div>
    </nav>
  );
}
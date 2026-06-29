import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{ backgroundColor: "white", borderBottom: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ color: "#f97316", fontWeight: "800", fontSize: "20px", textDecoration: "none" }}>
          Loca<span style={{ color: "#1f2937" }}>Tunisie</span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "50px", fontSize: "17px", fontWeight: "500", color: "#4b5563" }}>
          <Link href="/" style={{ color: "#4b5563", textDecoration: "none" }}>Accueil</Link>
          <Link href="/logements" style={{ color: "#4b5563", textDecoration: "none" }}>Logements</Link>
          <Link href="/inscription" style={{ color: "#4b5563", textDecoration: "none" }}>Inscription</Link>
          <Link href="/contact" style={{ color: "#4b5563", textDecoration: "none" }}>Contact</Link>
        </div>
        <button style={{ backgroundColor: "#f97316", color: "white", fontSize: "14px", fontWeight: "600", padding: "8px 20px", borderRadius: "999px", border: "none", cursor: "pointer" }}>
          Connexion
        </button>
      </div>
    </nav>
  );
}
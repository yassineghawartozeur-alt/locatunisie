import Link from "next/link";
import { logements } from "../data/logements";

export default function Home() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "24px" }}>
      {logements.map((logement) => (
        <div key={logement.id} style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
          <img
            src={logement.image}
            alt={logement.nom}
            style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }}
          />
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "12px" }}>{logement.nom}</h2>
          <p style={{ color: "#6b7280", marginTop: "4px", flex: 1 }}>{logement.description}</p>
          <p style={{ color: "#f97316", fontWeight: "bold", marginTop: "8px" }}>{logement.prix} DT / nuit</p>
          <p style={{ color: "#16a34a" }}>{logement.categorie}</p>
          <Link
            href={`/logements/${logement.id}`}
            style={{ marginTop: "16px", display: "block", textAlign: "center", backgroundColor: "#f97316", color: "white", fontWeight: "600", padding: "8px 16px", borderRadius: "8px", textDecoration: "none" }}
          >
            Voir les détails →
          </Link>
        </div>
      ))}
    </div>
  );
}
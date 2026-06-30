
import { logements } from "../../../data/logements";
import { notFound } from "next/navigation";
import ReservationModal from "../../../Components/ReservationModal";

export default async function LogementDetail({ params }) {
  const { id } = await params;
  const logement = logements.find((l) => l.id === Number(id));

  if (!logement) return notFound();

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 24px", fontFamily: "sans-serif" }}>

      <div style={{ width: "100%", height: "260px", overflow: "hidden", borderRadius: "12px" }}>
        <img
          src={logement.image}
          alt={logement.nom}
          style={{ width: "100%", height: "260px", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      </div>

      <h1 style={{ fontSize: "24px", fontWeight: "800", marginTop: "20px", color: "#1f2937" }}>
        {logement.nom}
      </h1>
      <p style={{ color: "#6b7280", marginTop: "10px", fontSize: "15px", lineHeight: "1.6" }}>
        {logement.description}
      </p>
      <p style={{ color: "#f97316", fontWeight: "800", fontSize: "22px", marginTop: "14px" }}>
        {logement.prix} DT <span style={{ fontSize: "13px", fontWeight: "400", color: "#9ca3af" }}>/ nuit</span>
      </p>
      <span style={{ display: "inline-block", marginTop: "8px", color: "#16a34a", border: "1px solid #16a34a", borderRadius: "999px", padding: "4px 14px", fontSize: "13px" }}>
        {logement.categorie}
      </span>
      <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "16px" }}>
        <a href="/" style={{ color: "#f97316", textDecoration: "none", fontSize: "14px" }}>
          ← Retour aux logements
        </a>
        <ReservationModal logement={logement} />
      </div>
    </div>
  );
}
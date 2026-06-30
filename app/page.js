"use client";

import Link from "next/link";
import { logements } from "../data/logements";
import { useState, useEffect } from "react";

export default function Home() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.82)",
            zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center"
          }}
        >
          <button
            onClick={() => setSelected(null)}
            style={{
              position: "absolute", top: "20px", right: "24px",
              background: "rgba(255,255,255,0.15)", border: "none", color: "white",
              fontSize: "22px", width: "36px", height: "36px", borderRadius: "50%", cursor: "pointer"
            }}
          >✕</button>
          <img
            src={selected.image}
            alt={selected.nom}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: "10px", display: "block" }}
          />
        </div>
      )}

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "24px" }}>
        {logements.map((logement) => (
          <div key={logement.id} style={{ border: "1px solid #e5e7eb", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column" }}>
            <img
              src={logement.image}
              alt={logement.nom}
              onClick={() => setSelected(logement)}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", cursor: "zoom-in" }}
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
    </>
  );
}
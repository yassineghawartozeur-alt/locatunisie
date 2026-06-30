"use client";

import { useState } from "react";

export default function ReservationModal({ logement }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.checkIn) newErrors.checkIn = "Date d'arrivée obligatoire.";
    if (!form.checkOut) newErrors.checkOut = "Date de départ obligatoire.";
    if (
      form.checkIn &&
      form.checkOut &&
      new Date(form.checkOut) <= new Date(form.checkIn)
    ) {
      newErrors.checkOut = "La date de départ doit être après la date d'arrivée.";
    }
    if (!form.guests || form.guests < 1) {
      newErrors.guests = "Au moins 1 personne.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nights =
    form.checkIn && form.checkOut
      ? Math.max(
          0,
          Math.round(
            (new Date(form.checkOut) - new Date(form.checkIn)) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0;
  const total = nights * logement.prix;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // À connecter plus tard avec votre API/backend, par ex:
    // await fetch("/api/reservations", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ logementId: logement.id, ...form }),
    // });

    setConfirmed(true);
  };

  const closeModal = () => {
    setOpen(false);
    setConfirmed(false);
    setForm({ checkIn: "", checkOut: "", guests: 1 });
    setErrors({});
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          backgroundColor: "#f97316",
          color: "white",
          fontWeight: "600",
          padding: "10px 22px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Réserver maintenant
      </button>

      {open && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "16px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "28px",
              width: "100%",
              maxWidth: "420px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            {!confirmed ? (
              <>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: "800",
                    color: "#1f2937",
                    marginBottom: "4px",
                  }}
                >
                  Réserver
                </h2>
                <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "20px" }}>
                  {logement.nom}
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "4px", color: "#374151" }}>
                      Date d'arrivée
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={form.checkIn}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: "8px",
                        border: `1px solid ${errors.checkIn ? "#ef4444" : "#d1d5db"}`,
                        fontSize: "14px",
                      }}
                    />
                    {errors.checkIn && (
                      <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>
                        {errors.checkIn}
                      </p>
                    )}
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "4px", color: "#374151" }}>
                      Date de départ
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={form.checkOut}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: "8px",
                        border: `1px solid ${errors.checkOut ? "#ef4444" : "#d1d5db"}`,
                        fontSize: "14px",
                      }}
                    />
                    {errors.checkOut && (
                      <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>
                        {errors.checkOut}
                      </p>
                    )}
                  </div>

                  <div style={{ marginBottom: "18px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "4px", color: "#374151" }}>
                      Nombre de personnes
                    </label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      value={form.guests}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        borderRadius: "8px",
                        border: `1px solid ${errors.guests ? "#ef4444" : "#d1d5db"}`,
                        fontSize: "14px",
                      }}
                    />
                    {errors.guests && (
                      <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>
                        {errors.guests}
                      </p>
                    )}
                  </div>

                  {nights > 0 && (
                    <div
                      style={{
                        backgroundColor: "#f9fafb",
                        borderRadius: "8px",
                        padding: "12px 14px",
                        marginBottom: "18px",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{logement.prix} DT × {nights} nuit{nights > 1 ? "s" : ""}</span>
                        <span style={{ fontWeight: "700" }}>{total} DT</span>
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      type="button"
                      onClick={closeModal}
                      style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #d1d5db",
                        backgroundColor: "white",
                        color: "#374151",
                        fontWeight: "600",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      style={{
                        flex: 1,
                        padding: "10px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#f97316",
                        color: "white",
                        fontWeight: "600",
                        fontSize: "14px",
                        cursor: "pointer",
                      }}
                    >
                      Confirmer
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "10px 0" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "#dcfce7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontSize: "28px",
                    color: "#16a34a",
                  }}
                >
                  ✓
                </div>
                <h2 style={{ fontSize: "18px", fontWeight: "800", color: "#1f2937", marginBottom: "8px" }}>
                  Réservation confirmée !
                </h2>
                <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "20px" }}>
                  {logement.nom} • {form.checkIn} → {form.checkOut} • {total} DT
                </p>
                <button
                  onClick={closeModal}
                  style={{
                    backgroundColor: "#f97316",
                    color: "white",
                    fontWeight: "600",
                    padding: "10px 22px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
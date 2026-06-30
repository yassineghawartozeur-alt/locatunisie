"use client";

import { useState } from "react";

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
    role: "locataire",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom complet est obligatoire.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide.";
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le numéro de téléphone est obligatoire.";
    } else if (!/^[0-9]{8}$/.test(formData.telephone)) {
      newErrors.telephone = "Le numéro doit contenir 8 chiffres.";
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est obligatoire.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    if (!validate()) return;

    setLoading(true);
    try {
      // À connecter avec votre API/backend plus tard, par ex:
      // const res = await fetch("/api/inscription", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // if (!res.ok) throw new Error("Erreur lors de l'inscription");

      await new Promise((resolve) => setTimeout(resolve, 800)); // simulation

      setSuccess(true);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        password: "",
        confirmPassword: "",
        role: "locataire",
      });
    } catch (err) {
      setErrors({ global: "Une erreur est survenue. Réessayez." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-8 max-w-xl mx-auto">
      <h1 className="font-titles text-4xl mb-6">Inscription</h1>
      <p className="mb-6 text-gray-600">
        Rejoignez-nous pour louer vos logements facilement.
      </p>

      {success && (
        <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-700 border border-green-300">
          Inscription réussie ! Vous pouvez maintenant vous connecter.
        </div>
      )}

      {errors.global && (
        <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700 border border-red-300">
          {errors.global}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Nom complet */}
        <div>
          <label htmlFor="nom" className="block font-medium mb-1">
            Nom complet
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom et prénom"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.nom ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.nom && (
            <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="exemple@mail.com"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block font-medium mb-1">
            Numéro de téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
            placeholder="12345678"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.telephone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.telephone && (
            <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>
          )}
        </div>

        {/* Type de compte */}
        <div>
          <label htmlFor="role" className="block font-medium mb-1">
            Type de compte
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="locataire">Locataire (je cherche un logement)</option>
            <option value="proprietaire">Propriétaire (je loue mon logement)</option>
          </select>
        </div>

        {/* Mot de passe */}
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirmation mot de passe */}
        <div>
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirmer le mot de passe
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
        >
          {loading ? "Inscription en cours..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
}
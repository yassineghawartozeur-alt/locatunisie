import { logements } from "../../../data/logements";
import { notFound } from "next/navigation";

export default async function LogementDetail({ params }) {
  const { id } = await params;
  const logement = logements.find((l) => l.id === Number(id));

  if (!logement) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img src={logement.image} alt={logement.nom} className="w-full h-72 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-6">{logement.nom}</h1>
      <p className="text-gray-600 mt-3 text-lg">{logement.description}</p>
      <p className="text-orange-500 font-bold text-2xl mt-4">{logement.prix} DT / nuit</p>
      <span className="inline-block mt-2 text-green-600 border border-green-600 rounded px-3 py-1">
        {logement.categorie}
      </span>
      <div className="mt-8 flex items-center gap-4">
        <a href="/" className="text-orange-500 hover:underline">← Retour aux logements</a>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded transition-colors">
          Réserver maintenant
        </button>
      </div>
    </div>
  );
}
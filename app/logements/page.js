import { logements } from "../../data/logements";

export default function LogementPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Nos Logements
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {logements.map((logement) => (
          <div
            key={logement.id}
            className="border rounded-lg p-4 shadow-lg"
          >
            <img
              src={logement.image}
              alt={logement.nom}
              className="w-full h-48 object-cover rounded"
            />

            <h2 className="text-xl font-bold mt-3">
              {logement.nom}
            </h2>

            <p className="text-gray-600">
              {logement.description}
            </p>

            <p className="text-orange-500 font-bold mt-2">
              {logement.prix} DT / nuit
            </p>

            <p className="text-green-600">
              {logement.categorie}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
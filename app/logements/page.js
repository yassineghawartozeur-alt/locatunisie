import { logements } from "../../data/logements";

export default function LogementPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-400 text-white py-14 px-6 text-center mb-10 rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full translate-x-1/4 translate-y-1/4" />
        <div className="relative z-10">
          <span className="text-5xl">🏠</span>
          <h1 className="text-4xl font-extrabold mt-2">LocaTunisie</h1>
          <p className="text-orange-100 mt-2 max-w-xl mx-auto">
            Louez facilement des logements partout en Tunisie, à petits prix et en toute confiance
          </p>
        </div>
      </div>

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
    </div>
  );
}
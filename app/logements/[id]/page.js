import { logements } from '@/data/logements';

export default function DetailsLogement({ params }) {
  // البحث عن المسكن باستخدام الـ ID
  const logement = logements.find((item) => item.id === parseInt(params.id));

  if (!logement) return <p>Logement non trouvé</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="font-titles text-4xl text-primary">{logement.nom}</h1>
      <img src={logement.image} alt={logement.nom} className="my-4 rounded-lg" />
      <p className="font-menu text-lg">{logement.description}</p>
      <p className="font-bold text-secondary text-2xl mt-4">{logement.prix} DT / nuit</p>
      
      {/* زر الحجز (غير وظيفي كما هو مطلوب) */}
      <button 
        onClick={() => alert("Réservation confirmée")}
        className="mt-6 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
      >
        Réserver
      </button>
    </div>
  );
}
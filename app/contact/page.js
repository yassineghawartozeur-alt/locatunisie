// app/contact/page.js
import ContactForm from '@/Components/ContactForm'; // تأكد من المسار الصحيح للمكون

export default function ContactPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Contactez-nous</h1>
      <p>Adresse: Tunis, Tunisie</p>
      <p>Téléphone: +216 71 000 000</p>
      <p>Email: contact@locatunisie.tn</p>
      
      <ContactForm />
    </div>
  );
}
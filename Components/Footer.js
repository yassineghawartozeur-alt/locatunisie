import Link from 'next/link'; // أضف هذا السطر

export default function Footer() {
  return (
    <footer className="mt-10 p-6 text-center border-t">
      <p>LocaTunisie © 2025</p>
      <Link href="/contact">Contact</Link>
      <div className="flex justify-center gap-4 mt-2">
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Instagram</span>
      </div>
    </footer>
  );
}
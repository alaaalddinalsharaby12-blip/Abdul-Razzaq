import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 سباكة وكهربائي - جميع الحقوق محفوظة</p>
        <div className="flex justify-center gap-4 mt-3 text-sm text-gray-400">
          <Link to="/about">من نحن</Link>
          <Link to="/contact">اتصل بنا</Link>
        </div>
      </div>
    </footer>
  );
}
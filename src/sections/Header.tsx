import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/projects', label: 'أعمالنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'اتصل بنا' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-3'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-blue-600">سباكة وكهربائي</Link>

          <nav className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <Link key={link.href} to={link.href} className={`text-gray-700 hover:text-blue-600 transition ${
                location.pathname === link.href ? 'text-blue-600 font-bold' : ''
              }`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <a href="tel:0558937125" className="hidden md:block">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-2">
              <Phone className="w-4 h-4" /> اتصل الآن
            </Button>
          </a>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            {navLinks.map(link => (
              <Link key={link.href} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700">
                {link.label}
              </Link>
            ))}
            <a href="tel:0558937125" className="text-blue-600 font-bold">اتصل الآن: 0558937125</a>
          </nav>
        )}
      </div>
    </header>
  );
}
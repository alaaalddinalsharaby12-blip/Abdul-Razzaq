import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPreview() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">نحن هنا لخدمتك</h2>
        <p className="text-lg mb-6 opacity-90">تواصل معنا للحصول على عرض سعر مجاني</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:0558937125">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-2">
              <Phone className="w-4 h-4" /> اتصل الآن
            </Button>
          </a>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
              <Mail className="w-4 h-4" /> أرسل استفسار
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
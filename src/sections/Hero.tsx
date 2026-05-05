import { Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Background Pattern بدلاً من صورة */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          خدمات <span className="text-blue-400">السباكة</span> و <span className="text-orange-400">الكهرباء</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          خدمات منزلية احترافية بأعلى معايير الجودة
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:0558937125">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
              <Phone className="w-4 h-4" /> اتصل الآن
            </Button>
          </a>
          <Button size="lg" variant="outline" onClick={scrollToServices} className="border-white text-white hover:bg-white/10">
            خدماتنا <ArrowDown className="w-4 h-4 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
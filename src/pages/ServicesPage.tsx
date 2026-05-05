import { Wrench, Droplets, Zap, Flame, Home, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  { icon: Droplets, title: 'السباكة', desc: 'إصلاح التسربات وتركيب الأدوات الصحية', color: 'blue' },
  { icon: Zap, title: 'الكهرباء', desc: 'تركيب وصيانة الكهرباء المنزلية', color: 'orange' },
  { icon: Flame, title: 'سخانات', desc: 'تركيب وصيانة السخانات المركزية واللحظية', color: 'red' },
  { icon: Settings, title: 'صيانة', desc: 'صيانة دورية شاملة', color: 'green' },
  { icon: Home, title: 'تأسيس', desc: 'تأسيس المنازل الجديدة', color: 'purple' },
  { icon: Wrench, title: 'فحص شامل', desc: 'كشف أعطال الكهرباء والسباكة', color: 'blue' }
];

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">خدماتنا</h1>
          <p className="text-gray-300">نقدم مجموعة متكاملة من الخدمات المنزلية</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className={`w-6 h-6 text-${service.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-500 mb-4">{service.desc}</p>
              <a href="/contact">
                <Button size="sm" className="w-full">طلب الخدمة</Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';
import { Wrench, Droplets, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Droplets,
    title: 'السباكة',
    desc: 'إصلاح التسربات وتركيب الأدوات الصحية',
    image: 'https://i.pinimg.com/736x/3e/b6/98/3eb6982c3242d9e2d57cfca7b3162386.jpg',
    color: 'blue'
  },
  {
    icon: Zap,
    title: 'الكهرباء',
    desc: 'تركيب وصيانة الكهرباء المنزلية',
    image: 'https://i.pinimg.com/736x/ad/ba/a6/adbaa6554da829508499834a4ba02a9c.jpg',
    color: 'orange'
  },
  {
    icon: Wrench,
    title: 'الصيانة',
    desc: 'صيانة دورية شاملة للمنازل',
    image: 'https://i.pinimg.com/736x/50/99/39/509939fce3455eff2a93efacdb9a75da.jpg',
    color: 'green'
  }
];

export default function ServicesPreview() {
  return (
    <section id="services-preview" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">خدماتنا</h2>
          <p className="text-gray-500">نقدم حلولاً متكاملة لمنزلك</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <service.icon className={`w-5 h-5 text-${service.color}-500`} />
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                <Link to="/services">
                  <Button variant="outline" size="sm" className="w-full">عرض التفاصيل</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
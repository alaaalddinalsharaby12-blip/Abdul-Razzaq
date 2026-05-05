import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'تركيب سخان مركزي',
    image: 'https://i.pinimg.com/736x/d1/a7/87/d1a7877d584023b6c02a3ce7829f266d.jpg?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'تأسيس كهرباء',
    image: 'https://i.pinimg.com/1200x/d6/30/69/d63069e816356a93a0f5934930be028c.jpg'
  },
  {
    id: 3,
    title: 'إصلاح تسربات',
    image: 'https://i.pinimg.com/736x/cb/80/bf/cb80bfdbe3628fad7d945dbf55665c6d.jpg'
  },
  {
    id: 4,
    title: 'تركيب إضاءة',
    image: 'https://i.pinimg.com/control1/736x/9c/44/72/9c4472f1820c31d92822acda14aca3ca.jpg'
  }
];

export default function ProjectsPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">أحدث أعمالنا</h2>
          <p className="text-gray-500">نماذج من المشاريع التي نفذناها</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map(project => (
            <div key={project.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-center mt-2 text-gray-700 font-medium">{project.title}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/projects">
            <Button variant="outline">عرض جميع الأعمال</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
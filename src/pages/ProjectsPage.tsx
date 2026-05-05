import { useState } from 'react';

const projects = [
  { id: 1, title: 'تركيب سخان مركزي', category: 'سباكة', image: 'https://i.pinimg.com/736x/d1/a7/87/d1a7877d584023b6c02a3ce7829f266d.jpg?w=300&h=200&fit=crop' },
  { id: 2, title: 'تأسيس كهرباء', category: 'كهرباء', image: 'https://i.pinimg.com/1200x/d6/30/69/d63069e816356a93a0f5934930be028c.jpg' },
  { id: 3, title: 'إصلاح تسربات', category: 'سباكة', image: 'https://i.pinimg.com/736x/cb/80/bf/cb80bfdbe3628fad7d945dbf55665c6d.jpg' },
  { id: 4, title: 'تركيب إضاءة', category: 'كهرباء', image: 'https://i.pinimg.com/control1/736x/9c/44/72/9c4472f1820c31d92822acda14aca3ca.jpg' },
  { id: 5, title: 'تركيب شبكة مياه', category: 'سباكة', image: 'https://i.pinimg.com/736x/8d/58/00/8d5800a92d3f3f78757b3ba44f009f09.jpg'},
  { id: 6, title: 'صيانة دورية', category: 'صيانة', image: 'https://i.pinimg.com/736x/50/99/39/509939fce3455eff2a93efacdb9a75da.jpg' }
];

const categories = ['الكل', 'سباكة', 'كهرباء', 'صيانة'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  
  const filtered = selectedCategory === 'الكل' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">أعمالنا</h1>
          <p className="text-gray-300">نماذج من المشاريع التي نفذناها</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(project.image)}
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-3">
                <span className="text-xs text-blue-600">{project.category}</span>
                <h3 className="font-bold text-gray-800">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="مشروع" className="max-w-full max-h-[80vh] rounded-lg" onClick={e => e.stopPropagation()} />
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setSelectedImage(null)}>✕</button>
        </div>
      )}
    </div>
  );
}
export default function AboutPage() {
  return (
    <div>
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">من نحن</h1>
          <p className="text-gray-300">تعرف على قصتنا وقيمنا</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-3">قصتنا</h2>
            <p className="text-gray-600 leading-relaxed">
              نقدم خدمات السباكة والكهرباء منذ أكثر من 10 سنوات. نفتخر بتقديم خدمات عالية الجودة 
              لعملائنا الكرام، ونحرص دائماً على رضا العميل وجودة العمل.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-3">قيمنا</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span> الجودة في التنفيذ
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span> الالتزام بالمواعيد
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span> الأسعار المنافسة
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span> الضمان على جميع الأعمال
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle, MessageCircle, AlertCircle, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});

  // رقم واتساب الخاص بك
  const WHATSAPP_NUMBER = '966558937125';

  const validateForm = () => {
    const newErrors: { name?: string; phone?: string; message?: string } = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    } else if (formData.name.length < 2) {
      newErrors.name = 'الاسم يجب أن يكون حرفين على الأقل';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^05[0-9]{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'رقم الهاتف يجب أن يبدأ بـ 05 ويتكون من 10 أرقام';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة';
    } else if (formData.message.length < 5) {
      newErrors.message = 'الرسالة قصيرة جداً';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // إنشاء نص الرسالة مع الموقع
    const whatsappMessage = `*📋 طلب جديد من موقع سباكة وكهربائي*
    
*👤 الاسم:* ${formData.name}
*📱 رقم الجوال:* ${formData.phone}
*📍 الموقع:* جدة - حي النسيم
*📝 الرسالة:* 
${formData.message}
---
*🕒 تاريخ الإرسال:* ${new Date().toLocaleString('ar-SA')}
*📌 المصدر:* صفحة اتصل بنا`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    setIsLoading(false);
    setFormData({ name: '', phone: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 4000);
  };

  // روابط البطاقات
  const contactLinks = {
    call: 'tel:0558937125',
    whatsapp: 'https://wa.me/966558937125',
    location: 'https://maps.app.goo.gl/7LYqF7WhmMCxrenE6'
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">تواصل معنا</h1>
          <p className="text-blue-100">نحن هنا للإجابة على استفساراتك على مدار الساعة</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info - جميع البطاقات قابلة للنقر بالكامل */}
          <div className="space-y-4">
            {/* بطاقة اتصل بنا - قابلة للنقر بالكامل */}
            <a 
              href={contactLinks.call}
              className="block group"
            >
              <div className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600">اتصل بنا</h3>
                  <p className="text-gray-700 text-lg font-semibold" dir="ltr">0558 937 125</p>
                  <p className="text-gray-400 text-sm">متاحون 24/7 - اضغط للاتصال</p>
                </div>
              </div>
            </a>
            
            {/* بطاقة واتساب - قابلة للنقر بالكامل */}
            <a 
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-green-600">واتساب</h3>
                  <p className="text-gray-700 text-lg font-semibold" dir="ltr">0558 937 125</p>
                  <p className="text-gray-400 text-sm">اضغط للدردشة المباشرة</p>
                </div>
              </div>
            </a>

            {/* بطاقة الموقع - قابلة للنقر بالكامل */}
            <a 
              href={contactLinks.location}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-start gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-orange-600">الموقع</h3>
                  <p className="text-gray-700">جدة، حي النسيم</p>
                  <p className="text-gray-500 text-sm">📍 نغطي جميع أحياء جدة</p>
                  <p className="text-orange-600 text-xs flex items-center gap-1 mt-1">
                    <Navigation className="w-3 h-3" /> اضغط لعرض الموقع على الخريطة
                  </p>
                </div>
              </div>
            </a>

            {/* منطقة التغطية */}
            <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">📍 مناطق التغطية</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">النسيم</span>
                <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">الروضة</span>
                <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">الورود</span>
                <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">المشرفة</span>
                <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">النخيل</span>
                <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">الأندلس</span>
                <span className="px-2 py-1 bg-white rounded-lg text-xs text-gray-600">درب الحرمين</span>
              </div>
            </div>

            {/* ساعات العمل */}
            <div className="p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">⏰ ساعات العمل</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">السبت - الخميس</span>
                  <span className="font-medium">8 ص - 10 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الجمعة</span>
                  <span className="font-medium">2 م - 10 م</span>
                </div>
                <div className="flex justify-between text-red-600 font-bold">
                  <span>🚨 طوارئ</span>
                  <span>24 ساعة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">أرسل لنا رسالة</h2>
            <p className="text-gray-500 text-sm mb-6">سنرد عليك خلال 24 ساعة</p>
            
            <div className="space-y-5">
              <div>
                <Input 
                  placeholder="الاسم الكامل" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className={errors.name ? 'border-red-500' : ''}
                  required
                  disabled={isLoading}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Input 
                  placeholder="رقم الجوال ******05" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className={errors.phone ? 'border-red-500' : ''}
                  required
                  disabled={isLoading}
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
                <p className="text-gray-400 text-xs mt-1">مثال: ******05</p>
              </div>

              <div>
                <Textarea 
                  placeholder="اكتب رسالتك هنا..." 
                  rows={5} 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className={errors.message ? 'border-red-500' : ''}
                  required
                  disabled={isLoading}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    جاري التحويل إلى واتساب...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> 
                    إرسال عبر واتساب
                  </>
                )}
              </Button>
              
              {submitted && (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-700 font-medium">تم فتح واتساب بنجاح! ✅</p>
                    <p className="text-green-600 text-sm">يرجى مراجعة الرسالة ثم إرسالها</p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Language, Translation } from '../types';
import { Star, ShoppingCart, ChevronDown } from 'lucide-react';

interface HeroProps {
  t: Translation;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const isRtl = lang === 'he' || lang === 'ar';
  
  const getInstagramSpan = () => {
    switch(lang) {
      case 'ar': return <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">إنستغرام</span>;
      case 'he': return <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">אינסטגרם</span>;
      default: return <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">Instagram</span>;
    }
  };

  const getHeroTitle = () => {
    switch(lang) {
      case 'ar': return <>الخيار الأول لـ <span className="text-blue-600">شراء متابعين</span> {getInstagramSpan()}</>;
      case 'he': return <>האתר המוביל ל- <span className="text-blue-600">קניית עוקבים</span> {getInstagramSpan()}</>;
      default: return <>Number #1 Hub to <span className="text-blue-600">Buy Followers</span></>;
    }
  };

  const scrollDown = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-40 px-4 overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="reveal stagger-1 inline-flex items-center gap-2 px-6 py-2.5 mb-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
          <Star className="w-3.5 h-3.5 fill-current text-yellow-500" />
          {t.promoText}
        </div>
        
        <h1 className="reveal stagger-2 text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-[1.05] tracking-tighter">
          {getHeroTitle()}
        </h1>
        
        <p className="reveal stagger-3 text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-14 max-w-3xl mx-auto font-medium leading-relaxed opacity-90">
          {t.heroSub}
        </p>

        <div className="reveal stagger-3 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={scrollDown}
            className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            <ShoppingCart className="w-4 h-4 transition-transform group-hover:rotate-12" />
            {t.orderBtn}
          </button>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div 
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-3 group opacity-60 hover:opacity-100 transition-opacity"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 group-hover:text-blue-500 transition-colors">
          {lang === 'ar' ? 'استكشف الخدمات' : lang === 'he' ? 'צפו בשירותים' : 'Explore Elite Services'}
        </span>
        <div className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-white/10 flex items-center justify-center animate-bounce">
           <ChevronDown size={20} className="text-blue-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

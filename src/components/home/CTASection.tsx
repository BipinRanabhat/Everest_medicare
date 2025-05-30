import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Phone, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

const CTASection: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full bg-cyan-500/20 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-600/20 translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      ></div>

      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-cyan-800/80"
          aria-hidden="true"
        ></div>
        <img
          src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt={t('cta_image_alt')}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center text-white transition-all duration-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-sm">
            {t('cta_title_part1')} {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">
              {t('cta_title_part2_highlight')}
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            {t('cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/booking"
              className="group flex items-center justify-center gap-3 bg-white hover:bg-cyan-50 text-blue-700 font-semibold py-4 px-7 rounded-lg transition-all duration-300 hover:shadow-lg shadow-md"
            >
              <Calendar
                className="transition-transform group-hover:scale-110"
                size={20}
              />
              <span>{t('cta_book_appointment')}</span>
              <ChevronRight
                className="transition-transform group-hover:translate-x-1"
                size={18}
              />
            </Link>
            <a
              href="tel:+9779876543210"
              className="group flex items-center justify-center gap-3 bg-transparent border-2 border-white/80 hover:border-white hover:bg-white/10 text-white py-4 px-7 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <Phone
                className="transition-transform group-hover:scale-110"
                size={20}
              />
              <span>{t('cta_call_us')}</span>
            </a>
          </div>
          <div className="mt-12 text-sm text-white/70">
            <p>
              {t('cta_footer_text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
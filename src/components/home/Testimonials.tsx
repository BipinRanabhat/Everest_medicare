import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TestimonialData {
  id: number;
  nameKey: string;
  locationKey: string;
  image: string;
  rating: number;
  textKey: string;
}

const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    nameKey: "testimonial_1_name",
    locationKey: "testimonial_1_location",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    textKey: "testimonial_1_text"
  },
  {
    id: 2,
    nameKey: "testimonial_2_name",
    locationKey: "testimonial_2_location",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    textKey: "testimonial_2_text"
  },
  {
    id: 3,
    nameKey: "testimonial_3_name",
    locationKey: "testimonial_3_location",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4,
    textKey: "testimonial_3_text"
  },
  {
    id: 4,
    nameKey: "testimonial_4_name",
    locationKey: "testimonial_4_location",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    textKey: "testimonial_4_text"
  }
];

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">{t('testimonials_main_title')}</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            {t('testimonials_main_subtitle')}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialsData.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-4"
                >
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={t(testimonial.nameKey)}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-800">{t(testimonial.nameKey)}</h4>
                        <p className="text-neutral-500">{t(testimonial.locationKey)}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-neutral-600 italic">"{t(testimonial.textKey)}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-2 rounded-full shadow-md text-neutral-600 hover:text-primary-500 transition-colors"
            aria-label={t('aria_prev_testimonial')}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-2 rounded-full shadow-md text-neutral-600 hover:text-primary-500 transition-colors"
            aria-label={t('aria_next_testimonial')}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary-500' : 'bg-neutral-300'
              }`}
              aria-label={`${t('aria_go_to_testimonial')}${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
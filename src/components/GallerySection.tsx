'use client';

import Image from 'next/image';

export default function GallerySection() {
  return (
    <section id="gallery" className="py-12 px-4 bg-lightSage">
      <div className="container mx-auto">
        <h2 className="font-playfair text-4xl text-center mb-16" data-aos="fade-up">
          Our Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
            <Image
              src="/head3.jpeg"
              alt="Beautiful blonde waves hairstyle"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left">
            <Image
              src="/head.jpeg"
              alt="Stylish short blonde haircut"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
            <Image
              src="/head2.jpeg"
              alt="Sleek dark straight hair"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left">
            <Image
              src="/head4.jpeg"
              alt="Long wavy blonde hair"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 
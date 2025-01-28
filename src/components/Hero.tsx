import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Image d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/salon-interior.jpg"
          alt="Snip Sister Salon Interior"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay sombre pour meilleure lisibilité */}
      </div>
      
      <div 
        className="relative z-10 text-center max-w-3xl px-6 py-20"
        data-aos="fade-up"
      >
        <h1 className="font-playfair text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">
          Welcome to Snip Sister
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
          Your premium hair salon in Cairns, Australia
        </p>
        <a 
          href="https://snipsisterhairsalon.square.site" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block hover:scale-105 transition-transform"
        >
          Book Now
        </a>
      </div>
    </section>
  );
} 
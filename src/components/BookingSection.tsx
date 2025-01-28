export default function BookingSection() {
  return (
    <section id="booking" className="py-24 px-4 bg-white" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-playfair text-center mb-8">
          Book Your Appointment
        </h2>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Ready to transform your look? Book your appointment now and experience our personalized hair care services.
        </p>

        <a 
          href="https://snipsisterhairsalon.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-12 py-4 inline-flex items-center gap-2 hover:scale-105"
        >
          Book Online Now
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
} 
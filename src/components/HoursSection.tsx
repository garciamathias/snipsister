'use client';

import { useEffect } from 'react';

const HOURS = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '9am - 7pm' },
  { day: 'Wednesday', time: '9am - 7pm' },
  { day: 'Thursday', time: '10am - 8pm' },
  { day: 'Friday', time: '9am - 7pm' },
  { day: 'Saturday', time: '10am - 5pm' },
  { day: 'Sunday', time: 'Closed' },
];

export default function HoursSection() {
  useEffect(() => {
    const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const hourElements = document.querySelectorAll('.hour');
    
    hourElements.forEach(element => {
      if (element.getAttribute('data-day') === currentDay) {
        element.classList.add('current-day');
      }
    });
  }, []);

  return (
    <section id="hours" className="py-24 px-4 bg-lightSage" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl text-center mb-8">
            Opening Hours
          </h2>
          
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Visit us at your convenience. We&apos;re here to serve you with exceptional hair care services.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Weekdays */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl mb-6 text-center text-primary">Weekdays</h3>
              {HOURS.slice(0, 5).map(({ day, time }, index) => (
                <div
                  key={day}
                  data-day={day}
                  className="hour group flex items-center justify-between p-4 rounded-lg hover:bg-lightSage transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <span className="font-playfair text-lg">{day}</span>
                  <span className="text-primary font-medium">{time}</span>
                </div>
              ))}
            </div>

            {/* Right column - Weekend */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl mb-6 text-center text-primary">Weekend</h3>
              {HOURS.slice(5).map(({ day, time }, index) => (
                <div
                  key={day}
                  data-day={day}
                  className="hour group flex items-center justify-between p-4 rounded-lg hover:bg-lightSage transition-all duration-300"
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <span className="font-playfair text-lg">{day}</span>
                  <span className="text-primary font-medium">{time}</span>
                </div>
              ))}
              <div className="mt-8 p-6 bg-lightSage rounded-lg">
                <p className="text-center text-sm italic">
                  Need an appointment outside these hours?<br />
                  Contact us for special arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-lightSage">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="font-playfair text-4xl text-center mb-16" data-aos="fade-up">
          About Us
        </h2>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <p className="text-lg mb-8">
            At Snip Sister, we believe everyone deserves a hairstyle that reflects their personality, 
            while caring for their hair with respect and kindness. We combine technical expertise 
            with a personal touch to offer you a unique hair experience, all while embracing the 
            natural beauty of your hair.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-lightSage p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-playfair text-2xl mb-4">Listening and Personalisation</h3>
            <p>
              Your style is unique, and so is your hair. That&apos;s why we take the time to listen, 
              understand your needs, and offer a fully tailored service. Every cut, colour, and 
              treatment is designed to enhance your natural beauty.
            </p>
          </div>

          <div className="bg-lightSage p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-playfair text-2xl mb-4">Respect for Nature</h3>
            <p>
              We are committed to using products that respect your hair and its natural balance. 
              We believe in the beauty of nature and aim to care for your hair in the gentlest 
              way possible, without compromising on quality.
            </p>
          </div>

          <div className="bg-lightSage p-8 rounded-2xl" data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-playfair text-2xl mb-4">Eco-Friendly Commitment</h3>
            <p>
              Because beauty shouldn&apos;t come at the expense of the planet, we select products that 
              share our commitment to a greener future. At Snip Sister, we prioritise brands that 
              use natural ingredients and sustainable packaging.
            </p>
          </div>
        </div>

        {/* Original Mineral Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
          <h3 className="font-playfair text-3xl mb-6 text-center">Our Choice: Original Mineral</h3>
          <p className="mb-4">
            At Snip Sister, we&apos;ve chosen Original Mineral, an innovative Australian brand, to 
            provide your hair with the best care while respecting its natural qualities. Free from 
            ammonia, parabens, and formulated with natural ingredients, Original Mineral delivers 
            both performance and well-being for your hair.
          </p>
          <p className="mb-4">
            Its treatments and colour products nourish, repair, and protect your hair deeply, while 
            ensuring vibrant, long-lasting results. By choosing Original Mineral, we offer you 
            effective and respectful haircare solutions for an authentic, natural beauty.
          </p>
        </div>

        {/* Julie's Expertise */}
        <div className="max-w-4xl mx-auto mt-16" data-aos="fade-up">
          <h2 className="font-playfair text-4xl text-center mb-8">
            Discover Julie&apos;s Expertise at Snip Sister
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="mb-4">
              With 12 years of international experience, Julie brings her talent and passion to your 
              hair. Having perfected her skills in France, Australia, and New Zealand, she offers 
              modern techniques and unique expertise tailored to your needs.
            </p>
            <p className="mb-4">
              A specialist in balayage and colour work, Julie creates personalised tones that 
              enhance your style while maintaining the health of your hair. Whether you&apos;re dreaming 
              of a luminous blonde, a natural sun-kissed look, or a bold transformation, she&apos;s here 
              to guide you and deliver stunning results.
            </p>
            <p>
              At Snip Sister, we believe in revealing natural beauty through high-quality care and 
              a personalised approach. Trust Julie with your hair and enjoy an exceptional salon 
              experience.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 font-playfair text-xl italic text-primary" data-aos="fade-up">
          Snip Sister – The art of revealing your natural beauty, with peace of mind.
        </div>
      </div>
    </section>
  );
} 
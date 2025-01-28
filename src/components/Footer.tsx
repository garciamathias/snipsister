'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-xl mb-4">Contact</h3>
            <div className="space-y-2">
              <p>Shop 3/1 Faculty Close</p>
              <p>Campus Shopping Village</p>
              <p>Smithfield QLD 4878</p>
              <p>Cairns, Australia</p>
              <a 
                href="tel:+61734729760" 
                className="text-primary hover:text-textColor transition-colors"
              >
                +61 7 3472 9760
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h3 className="font-playfair text-xl mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/#home" className="block hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/#booking" className="block hover:text-primary transition-colors">
                Book
              </Link>
              <Link href="/#hours" className="block hover:text-primary transition-colors">
                Hours
              </Link>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="font-playfair text-xl mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Snip Sister. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 
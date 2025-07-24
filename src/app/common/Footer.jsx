import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f7f5f5] text-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm mb-5 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <div className="flex space-x-3">
            {['facebook-f', 'twitter', 'pinterest-p', 'instagram'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="text-white bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center"
              >
                <i className={`fab fa-${icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Important Links</h3>
          <ul className="space-y-2 text-sm">
  {['About', 'Projects', 'Services', 'Blog', 'Contact'].map((item) => (
    <li key={item}>
      <Link
        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
        className="hover:text-blue-600 transition"
      >
        {item}
      </Link>
    </li>
  ))}
</ul>
        </div>

        {/* Featured Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Featured Service</h3>
          <ul className="space-y-2 text-sm">
            {['IT Management', 'Development', 'Services', 'UI/UX Design', 'Support Engineer'].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-blue-600 transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="text-sm space-y-3">
            <p>
              <i className="fas fa-phone-alt mr-2 text-blue-600"></i>
              <strong>Phone:</strong> +123(456)123
            </p>
            <p>
              <i className="fas fa-envelope mr-2 text-blue-600"></i>
              <strong>Email:</strong> hello@luzon.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i>
              <strong>Address:</strong> 32 St Kilda Road, Melbourne VIC, 3004 Australia
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
        <p>
          Copyright ©2024 <span className="font-medium text-black">Luzon</span>. All Rights Reserved by{' '}
          <span className="text-blue-600 font-semibold">EnvyTheme</span>
        </p>
        <p className="mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-600">Terms & Conditions</a> |{' '}
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
        </p>
      </div>

      {/* Scroll To Top */}
      <div className="fixed bottom-5 right-5 z-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md">
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

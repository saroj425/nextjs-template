import Image from 'next/image';
import womanImage from '../../../public/images/about/about-2.jpg'; // Replace with your image path
import { Check } from 'lucide-react';

export default function Abouthero() {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={womanImage}
            alt="About us"
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Our Luzon Agency
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* Tabs */}
          <div className="flex space-x-6 border-b mb-6">
            {['Our History', 'Our Mission', 'Friendly Support'].map((tab, i) => (
              <button
                key={i}
                className={`pb-2 text-sm font-semibold ${
                  i === 0
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Subheading */}
          <h3 className="font-semibold text-lg text-gray-900 mb-4">
            How To Generate Your Creative Idea With IT Business
          </h3>

          {/* List */}
          <ul className="space-y-2 text-gray-700 mb-6">
            {[
              'The Philosophy of Business Analytics',
              'Fast Track Your Business',
              'Lies & Damn Lies About Your Business',
              'The Ultimate Deal on Business',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="text-blue-600 w-5 h-5 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.
          </p>

          {/* CTA Button */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}

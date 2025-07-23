import Image from 'next/image';
import workingGirl from '../../../public/images/choose.png'; // replace with your actual image
import shared from '../../../public/images/shared.png';
import blogger from '../../../public/images/blogger.png';

import targeting from '../../../public/images/target.png';
import seoranking from '../../../public/images/good-quality.png';

const features = [
  {
    icon: shared,
    title: 'Consulting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    icon: blogger,
    title: 'Data Management',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    icon: seoranking,
    title: 'Page Ranking',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
  {
    icon: targeting,
    title: 'Location Targeting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
];

export default function Whychooseus() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Features */}
          <div className="space-y-6">
  {features.map((item, idx) => (
    <div
      key={idx}
      className="relative group overflow-hidden rounded-[30px] p-4 shadow-sm transition-all duration-300"
    >
      {/* Background gradient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-[30px]" />

      {/* Content */}
      <div className="relative flex items-center gap-4 z-10">
        <div className="flex-shrink-0 w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-100">
          <Image src={item.icon} alt={item.title} width={28} height={28} />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">{item.title}</h4>
          <p className="text-gray-600 text-sm group-hover:text-white transition-colors duration-300">{item.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>


          {/* Right Image */}
          <div className="relative w-full">
            <div className="w-full h-full relative z-10">
              <Image src={workingGirl} alt="Working Woman" className="object-cover w-full h-full rounded-[100px]" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

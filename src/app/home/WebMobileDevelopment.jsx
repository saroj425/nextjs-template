import Image from 'next/image';
import bulbImg from '../../../public/images/development.png'; // Replace with actual image
import { FaPencilRuler, FaCode, FaMobileAlt, FaTabletAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaPencilRuler className="text-white text-2xl" />,
    title: 'UI/UX Design',
    color: 'bg-purple-300',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.',
  },
  {
    icon: <FaCode className="text-white text-2xl" />,
    title: 'Web Development',
    color: 'bg-cyan-400',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.',
  },
  {
    icon: <FaMobileAlt className="text-white text-2xl" />,
    title: 'Mobile Development',
    color: 'bg-orange-300',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.',
  },
  {
    icon: <FaTabletAlt className="text-white text-2xl" />,
    title: 'Responsive Design',
    color: 'bg-blue-300',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.',
  },
];

export default function WebMobileDevelopment() {
  return (
    <section className="py-16 px-4 lg:px-24 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image src={bulbImg} alt="Hero Illustration" className="max-w-full h-auto" />
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> Web & Mobile <span className="text-blue-600">Development</span> </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas accumsan.
          </p>

          {/* Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-30 h-20 rounded-full flex items-center justify-center ${service.color}`} > {service.icon} </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{service.title}</h4>
                  <p className="text-md text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

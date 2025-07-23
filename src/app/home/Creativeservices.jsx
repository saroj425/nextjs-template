'use client';

import Image from 'next/image';
import React from 'react';
import itconsultancy from '../../../public/images/blueprint.png';
import Webdelopment from '../../../public/images/information.png';
import igitalmarketting from '../../../public/images/verified.png';
import appdevelopment from '../../../public/images/time-management.png';
import ecommercedev from '../../../public/images/blueprint.png';
import sopifydev from '../../../public/images/information.png';

const services = [
  {
    title: 'IT Consultancy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.',
    icon: itconsultancy,
    // active: false,
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.',
    icon: Webdelopment,
    // active: false,
  },
  {
    title: 'Digital Marketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.',
    icon: igitalmarketting,
    // active: true,
  },
  {
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.',
    icon: appdevelopment,
    // active: true,
  },
  {
    title: 'Ecommerce Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.',
    icon: ecommercedev,
    // active: true,
  },
  {
    title: 'Sopify Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.',
    icon: sopifydev,
    // active: true,
  },
];

export default function Creativeservices() {
  return (
    <section className="py-20 w-full bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our best Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
        <div className="flex justify-center space-x-2 mb-12">
          <div className="w-10 h-1 bg-blue-500 rounded" />
          <div className="w-4 h-1 bg-blue-500 rounded" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`rounded-xl p-8 shadow-md hover:transition-all hover:duration-900 hover:bg-[#00b4f1] hover:text-white ${ service.active ? 'bg-[#00b4f1] text-white' : 'bg-white text-gray-800 hover:shadow-lg' }`} >
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-xl mb-6  rounded-custom ${ service.active ? 'bg-white' : 'bg-blue-50' }`} >
                <Image src={service.icon} alt={service.title} className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
              <p className="text-sm mb-4">{service.description}</p>
              <a href="#" className={`font-semibold ${ service.active ? 'text-white' : 'text-black' }`} > Read More </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

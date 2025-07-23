'use client'

import Image from 'next/image';
import { Play } from 'lucide-react';
import React from 'react';
import peopleImage from '../../../public/images/about/about.jpg'; // Replace with actual path

const progressData = [
  { label: 'Development', value: 90 },
  { label: 'Design', value: 80 },
  { label: 'Marketing', value: 70 },
  { label: 'Support', value: 75 },
  { label: 'Review', value: 90 },
];

export default function Creativeideas() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How To Generate <span className="text-blue-600">Creative</span> Ideas <br />
            For Your IT Business
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus do umsan lacus
            vel facilisis. Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industry.
          </p>

          {/* Progress Bars */}
          <div className="space-y-4">
            {progressData.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-800">{item.label}</span>
                  <span className="text-sm text-gray-600">{item.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-full bg-blue-300 rounded"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src={peopleImage}
            alt="Two women"
            className=""
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 rounded-full p-6 shadow-lg hover:bg-blue-600 hover:text-white transition">
            <Play size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}

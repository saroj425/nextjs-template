'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import blueprint from '../../../public/images/blueprint.png';
import updateicon from '../../../public/images/information.png';
import verified from '../../../public/images/verified.png';
import settiongicon from '../../../public/images/time-management.png';


const features = [
  {
    icon: `${blueprint.src}`,
    title: "Great Design",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
  },
  {
    icon: `${updateicon.src}`,
    title: "Optimal Choice",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
  },
  {
    icon: `${verified.src}`,
    title: "Finest Quality",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
  },
  {
    icon: `${settiongicon.src}`,
    title: "Time Saving",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
  },
];

export default function CreativeFeatures() {
  return (
    <section className="py-10 bg-white text-center px-4">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4">Creative Features</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-10 h-1 bg-blue-500 rounded" />
          <div className="w-4 h-1 bg-blue-500 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center px-4">
            <div className="w-20 h-20 rounded-full bg-cyan-100 mx-auto flex items-center justify-center mb-6">
              <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
            </div>
            <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

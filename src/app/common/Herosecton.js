'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import bannerimg1 from '../../../public/images/home-one/slider-bg-2.jpg';
import bannerimg2 from '../../../public/images/home-one/slider-bg-3.jpg';
import illustration1 from '../../../public/images/home-one/home-1-img3.png';
import illustration2 from '../../../public/images/home-one/home-1-img2.png';
import { ArrowBigLeftDashIcon, ArrowLeftCircle, ArrowRightCircle, CircleFadingArrowUp } from 'lucide-react';

const slides = [
  {
    background: bannerimg1,
    illustration: illustration1,
    title: "Software & Development",
    description: "We build scalable software solutions tailored for your business.",
  },
  {
    background: bannerimg2,
    illustration: illustration2,
    title: "Creative Web Solutions",
    description: "Custom websites with cutting-edge design and UX focus.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background */}
      <Image src={slides[current].background} alt="Background" layout="fill" objectFit="cover" className="absolute top-0 left-0 -z-10 transition-opacity duration-700 ease-in-out" />

      {/* Content */}
      <div className="flex items-center justify-between h-full w-full px-6 md:px-16 text-white bg-black/50">
        {/* Left Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {slides[current].title}
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            {slides[current].description}
          </p>
          <Link href="#get-started">
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-lg transition"> Get Started </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="hidden md:block w-1/2 pr-10 relative z-10">
          <Image src={slides[current].illustration} alt="Illustration" width={500} height={500} className="mx-auto" />
        </div>
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" ><ArrowLeftCircle/> </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer" > <ArrowRightCircle/> </button>
    </section>
  );
}

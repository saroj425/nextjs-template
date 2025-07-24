'use client';
import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect, useRef, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import img1 from '../../../public/images/blog/blog1.jpg';
import img2 from '../../../public/images/blog/blog2.jpg';
import img3 from '../../../public/images/blog/blog3.jpg';
import img4 from '../../../public/images/blog/blog4.jpg';

const newsItems = [
  {
    image: img1,
    date: '20 April 2024',
    title: 'Great Tips To Earn More Money From Digital Industry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    image: img2,
    date: '21 April 2024',
    title: 'Create Design That Converts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    image: img3,
    date: '22 April 2024',
    title: 'Making Peace With The Feast Or Famine Of Freelancing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    image: img4,
    date: '23 April 2024',
    title: 'Using AI Tools To Boost Your Productivity',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
];

export default function Blogsection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    vertical: false,
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      timer.current = setInterval(() => {
        slider.next();
      }, 3000);
    },
  });

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-blue-600">Latest</span> News
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
        </p>
        <div className="mt-2 h-[2px] w-12 bg-blue-500 mx-auto"></div>
      </div>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider h-[420px] relative overflow-hidden">
        {newsItems.map((item, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-white shadow-md rounded-md overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
              placeholder="blur"
            />
            <div className="p-4">
              <p className="text-blue-600 text-sm mb-1">{item.date}</p>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <a href="#" className="text-blue-600 text-sm font-medium mt-3 inline-block">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {newsItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

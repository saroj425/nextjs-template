'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'

// Import your images
import team1 from '../../../public/images/team/team1.jpg'
import team2 from '../../../public/images/team/team2.jpg'
import team3 from '../../../public/images/team/team3.jpg'
import team4 from '../../../public/images/team/team4.jpg'
import team5 from '../../../public/images/team/team5.jpg'

const team = [
  { name: 'David Jon Korola', role: 'Web Developer', img: team1 },
  { name: 'Alex Maxwel', role: 'Software Engineer', img: team2 },
  { name: 'Louis Pasteur', role: 'App Developer', img: team3 },
  { name: 'Jennifer Smith', role: 'UX Designer', img: team4 },
  { name: 'Michael Clark', role: 'DevOps Engineer', img: team5 },
]

export default function TeamSection() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
  })

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Our Expert Team</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Meet our professional team members dedicated to providing the best digital solutions.
        </p>
        <div className="w-10 h-1 bg-blue-600 mx-auto mt-4 rounded" />
      </div>

      <div ref={sliderRef} className="keen-slider px-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="keen-slider__slide group bg-white rounded-xl overflow-hidden shadow-lg relative transition-transform hover:-translate-y-1"
          >
            <div className="relative">
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-72 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4 text-white text-xl">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="p-5 text-center">
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-blue-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

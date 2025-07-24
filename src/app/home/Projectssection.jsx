import Image from 'next/image';
import project1 from '../../../public/images/projects/project1.jpg';
import project2 from '../../../public/images/projects/project2.jpg'; 
import project3 from '../../../public/images/projects/project3.jpg';
import project4 from '../../../public/images/projects/project4.jpg';
import project5 from '../../../public/images/projects/project5.jpg';
import project6 from '../../../public/images/projects/project6.jpg';
import project7 from '../../../public/images/projects/project7.jpg';
import project8 from '../../../public/images/projects/project8.jpg';
const projects = [
  { image: project1, title: 'Web Deelopment', subtitle: '' },
  { image: project2, title: 'Digitl Marketting', subtitle: '' },
  { image: project3, title: 'Ecommerce', subtitle: '' },
  // {
  //   image: project4,
  //   title: 'App Development',
  //   subtitle: 'Research and startup',
  // },
  { image:project5, title: 'Sopify', subtitle: '' },
  { image:project6, title: 'Web deelopment', subtitle: '' },
  // { image:project7, title: 'Web deelopment', subtitle: '' },
  { image:project8, title: 'Web deelopment', subtitle: '' },
];

export default function Projectssection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Projects</h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
        </p>
        <div className="mt-2 h-[2px] w-12 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-sm">
            <Image
              src={project.image}
              alt={`Project ${idx + 1}`}
              width={500}
              height={400}
              className="w-full h-auto object-cover"
            />
            {/* Overlay with text if title is present */}
            {project.title && (
              <div className="absolute inset-0 bg-blue-800 bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm">{project.subtitle}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

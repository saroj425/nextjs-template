// components/PageHeader.jsx
import Image from 'next/image';
import bgImage from '../../../public/images/page-title/page-title-bg.jpg'; // Replace with your actual image path
import Link from 'next/link';

export default function PageHeader({ title = 'About' }) {
  return (
    <div className="relative h-[300px] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Title & Breadcrumb */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-white/90">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-1 text-blue-400">•</span>
          {title}
        </p>
      </div>
    </div>
  );
}

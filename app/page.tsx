"use client";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <Link
        href="https://x.com/Nyxara_N1"
        className="relative flex flex-col items-center justify-center h-screen w-screen bg-[#0B0D10]"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src="/comingsoon.jpg"
          alt="Nyxara N1"
          quality={100}
          unoptimized
          loading="eager"
          width={1920}
          height={1080}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onDragStart={(e) => e.preventDefault()}
          onDragEnd={(e) => e.preventDefault()}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrag={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}
        />
        <div className="text-white text-center text-sm">
          <Link
            href="https://x.com/Nyxara_N1"
            target="_blank"
            rel="noopener noreferrer">
            <FaXTwitter size={48} />
          </Link>
        </div>
      </Link>
    </main>
  );
}

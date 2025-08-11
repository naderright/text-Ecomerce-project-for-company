// components/HeroRoot.tsx
import { HeroRootProps } from "@/types/HeroRoute";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/bgHeroRoute.jpg";

export default function HeroRoute({ title, breadcrumb }: HeroRootProps) {
  return (
   <div className="relative w-full h-[100px] md:h-[300px] flex items-center justify-center">
  {/* Background image */}
  <Image
    src={backgroundImage}
    alt={title}
    fill
    className="object-cover"
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-white/50"></div>

  {/* Content */}
  <div className="relative flex flex-col items-center justify-center text-center text-black px-4">
    {/* Logo */}
    <Image
      src="/logo.png"
      alt="Logo"
      width={80}
      height={80}
      className=" w-[2rem] md:w-[3rem] mx-auto  md:mb-4"
    />

    {/* Title */}
    <h1 className="text-xl md:text-5xl font-medium leading-tight">
      {title}
    </h1>

    {/* Breadcrumb */}
    <div className="flex items-center justify-center flex-wrap gap-1 text-xs md:text-base mt-2">
      {breadcrumb.map((item, idx) => (
        <div key={idx} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="hover:underline font-bold">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {idx < breadcrumb.length - 1 && <span className="mx-2">→</span>}
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

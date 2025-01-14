import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
export default function AboutSection() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2  bg-[#0a0a0a] text-white border border-border w-wrapper mx-auto"
      id="about"
    >
      <div className="border-r border-b border-border flex flex-col p-4 justify-end items-srart h-[10rem] min-h-fit">
        <span className="font-mono text-2xl font-medium flex items-center gap-3">
          <BiSolidRightArrow size={10} />
          <h2>ABOUT VIT</h2>
        </span>
      </div>
      <div className="border-r border-b border-border"></div>
      <div className="border-r border-b border-border p-8">
        <p className="font-mono text-sm leading-relaxed opacity-80">
          At VIT, our founding vision is the delivery of internationally
          benchmarked, quality higher education. We consistently embrace
          innovation to elevate educational standards. Our cosmopolitan campus
          hosts a diverse student body from across the globe. Our esteemed
          faculty, experienced and knowledgeable, is dedicated to nurturing
          students. The global benchmarks set by VIT in teaching and research
          drive our unwavering commitment to excellence, transcending aspiration
          to become an ingrained ethos.
        </p>
      </div>
      <div className="border-b border-border flex flex-col justify-between">
        <div className="text-left font-mono border te border-border border-t-0 border-l-0 px-6 py-3 text-sm self-start">
          VIT VELLORE
        </div>
        <div className="flex-grow flex items-center justify-center">
          <Image
            src="/images/about-vit.webp"
            alt="Vellore Institute of Technology"
            width={700}
            height={400}
            className="w-[70%] h-auto"
          />
        </div>
      </div>
      <div className="border-r border-b border-border"></div>
      <div className="border-r border-b border-border flex flex-col p-4 justify-end items-srart h-[10rem] min-h-fit">
        <span className="font-mono text-2xl font-medium flex items-center gap-3">
          <BiSolidRightArrow size={10} />
          <h2>ABOUT OFFICE OF STUDENT WELFARE</h2>
        </span>
      </div>
      <div className="border-b border-border flex flex-col justify-between">
        <div className="text-left font-mono border border-border border-t-0 border-l-0 p-2 px-6 self-start text-sm">
          DSW
        </div>
        <div className="flex-grow flex items-center justify-center">
          {/* <BuildingIcon className="text-[#00ff00] w-32 h-auto" /> */}
          <Image
            src="/images/about-dsw.webp"
            alt="Student Welfare Office"
            width={700}
            height={400}
            className="w-[70%] h-auto"
          />
        </div>
      </div>
      <div className="border-b border-l border-border p-8">
        <p className="font-mono text-sm leading-relaxed opacity-80">
          SW (Students&apos; Welfare) at VIT focuses on enhancing students&apos;
          overall well-being through cultural events, sports, mentorship
          programs, and social initiatives. It aims to provide a balanced and
          fulfilling university experience, fostering community, inclusivity,
          and personal growth among students.
        </p>
      </div>
      <div className="border-r border-b border-border flex flex-col p-4 justify-end items-srart h-[10rem] min-h-fit">
        <span className="font-mono text-2xl font-medium flex items-center gap-3">
          <BiSolidRightArrow size={10} />
          <h2>ABOUT YANTRA</h2>
        </span>
      </div>
      <div className="border-r border-b border-border"></div>
      <div className="border-r border-b border-border p-8">
        <p className="font-mono text-sm leading-relaxed opacity-80">
          Yantra is VIT Universit&apos;s annual technical festival, focusing on
          engineering, technology, and innovation. It features events,
          workshops, and exhibitions where students showcase their technical
          skills and creative projects. The festival encourages collaboration,
          inspires innovation, and provides a platform for students to enhance
          their knowledge in emerging technologies.
        </p>
      </div>
      <div className="border-b border-border flex flex-col justify-between">
        <div className="text-left font-mono border border-border border-t-0 border-l-0 p-2 px-6 text-sm self-start">
          YANTRA
        </div>
        <div className="flex-grow flex items-center justify-center">
          {/* <BuildingIcon className="text-[#00ff00] w-32 h-auto" />
           */}
          <Image
            src="/images/about-yantra.webp"
            alt="Yantra'25"
            width={700}
            height={400}
            className="w-[60%] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

// function BuildingIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       className={className}
//       strokeWidth="1"
//     >
//       <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h1M9 13h1M9 17h1M15 13h1M15 17h1" />
//     </svg>
//   );
// }

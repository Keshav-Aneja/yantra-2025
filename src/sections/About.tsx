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
          Vellore Institute of Technology (VIT) stands as one of India's premier
          institutions, recognized as an "Institution of Eminence" by the
          Government of India. Founded with the vision of providing an "Abode
          for Learning and Growth," VIT continues to uphold its principles of
          excellence in education and holistic development.
          <br />
          <br />
          The university is renowned not only for its academic rigor but also
          for fostering an environment conducive to personal and professional
          growth. With industrial visits, expert guest lectures, and numerous
          hackathons, VIT equips students to tackle real-world challenges with
          innovative solutions. <br />
          <br />
          VIT’s vibrant ecosystem includes several prominent clubs and chapters,
          offering students a platform to showcase their creativity and
          technical acumen. Ranked the No. 1 private institution in India for
          Innovation in 2019 by the Government of India, VIT strives to provide
          quality education on par with international standards, with the
          ultimate goal of contributing to societal welfare and global progress.
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
          Home is where the heart is, but the college journey can often feel
          unmoored. This is where Student Welfare takes center stage—a dedicated
          team comprising the Director of Students' Welfare, Assistant
          Directors, Student Council Members, and Programme Representatives, all
          steadfastly committed to the holistic well-being of every VIT-ian.
          <br />
          <br />
          From the anticipation of induction to the heartfelt goodbyes of
          graduation, Student Welfare accompanies you through every milestone of
          your journey. We are the quiet counsel during midnight study sessions,
          the reassuring presence after rigorous exams, and the shared elation
          of cultural festivities. Beyond fostering academic success, we
          endeavor to enrich your experience by nurturing personal growth,
          social engagement, and cherished memories.
          <br />
          <br />
          Through vibrant clubs, chapters, OD’s, facilitation of external
          participation, and budgetary provisions, we empower you to excel and
          explore boundless opportunities. As the voice of the student body, the
          Student Council ensures your aspirations are championed. At Student
          Welfare, we are your unwavering pillar of support, dedicated to making
          your VIT journey an extraordinary and transformative chapter of your
          life.
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
          Yantra, the annual flagship techno-management fest of VIT, is a
          distinguished celebration of innovation and large-scale collaboration.
          Spanning an entire week, the fest garners participation from over
          35,000 students, establishing itself as a dynamic platform for
          experiential learning and creative exploration. Yantra showcases a
          meticulously curated lineup of workshops, technical talks, hackathons,
          and competitions, all organized by the diverse clubs and chapters of
          VIT.
          <br />
          <br />
          At the core of this landmark event lies Central Hack—VIT's biggest and
          most prestigious hackathon. This transformative platform unites
          individuals from diverse domains with a shared vision to address
          real-world challenges through ingenious and interdisciplinary
          solutions. It fosters critical problem-solving, enhances technical and
          managerial competencies, and facilitates meaningful networking
          opportunities. Yantra stands as a testament to VIT's unwavering
          commitment to technological innovation and managerial excellence,
          offering participants a profoundly enriching and transformative
          experience—all at no cost.
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

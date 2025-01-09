export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#0a0a0a] text-white border border-gray-500 w-[60%] mx-auto">
      <div className="border-r border-b border-gray-500 p-8">
        <h2 className="font-mono text-lg mb-6">• ABOUT VIT</h2>
        <p className="font-mono text-sm leading-relaxed opacity-80">
          At VIT, our founding vision is the delivery of internationally benchmarked, quality higher education. We consistently embrace innovation to elevate educational standards. Our cosmopolitan campus hosts a diverse student body from across the globe. Our esteemed faculty, experienced and knowledgeable, is dedicated to nurturing students. The global benchmarks set by VIT in teaching and research drive our unwavering commitment to excellence, transcending aspiration to become an ingrained ethos.
        </p>
      </div>
      <div className="border-b border-gray-500 flex flex-col justify-between">
        <div className="text-left font-mono border border-gray-500 border-t-0 border-l-0 p-2 self-start">
          VIT VELLORE
        </div>
        <div className="flex-grow flex items-center justify-center">
          <BuildingIcon className="text-[#00ff00] w-32 h-auto" />
        </div>
      </div>

      <div className="border-b border-gray-500 flex flex-col justify-between">
        <div className="text-left font-mono border border-gray-500 border-t-0 border-l-0 p-2 px-6 self-start">
          DSW
        </div>
        <div className="flex-grow flex items-center justify-center">
          <BuildingIcon className="text-[#00ff00] w-32 h-auto" />
        </div>
      </div>
      <div className="border-b border-l border-gray-500 p-8">
        <h2 className="font-mono text-lg mb-6">• ABOUT OFFICE OF STUDENT WELFARE</h2>
        <p className="font-mono text-sm leading-relaxed opacity-80">
          SW (Students' Welfare) at VIT focuses on enhancing students' overall well-being through cultural events, sports, mentorship programs, and social initiatives. It aims to provide a balanced and fulfilling university experience, fostering community, inclusivity, and personal growth among students.
        </p>
      </div>
      <div className="border-r border-b border-gray-500 p-8">
        <h2 className="font-mono text-lg mb-6">• ABOUT YANTRA</h2>
        <p className="font-mono text-sm leading-relaxed opacity-80">
        Yantra is VIT University's annual technical festival, focusing on engineering, technology, and innovation. It features events, workshops, and exhibitions where students showcase their technical skills and creative projects. The festival encourages collaboration, inspires innovation, and provides a platform for students to enhance their knowledge in emerging technologies.</p>
      </div>
      <div className="border-b border-gray-500 flex flex-col justify-between">
        <div className="text-left font-mono border border-gray-500 border-t-0 border-l-0 p-2 self-start">
          YANTRA
        </div>
        <div className="flex-grow flex items-center justify-center">
          <BuildingIcon className="text-[#00ff00] w-32 h-auto" />
        </div>
      </div>
    </div>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      strokeWidth="1"
    >
      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9h1M9 13h1M9 17h1M15 13h1M15 17h1" />
    </svg>
  );
}
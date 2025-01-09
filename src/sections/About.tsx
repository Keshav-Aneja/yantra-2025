import Image from "next/image";
export default function AboutSection() {
  return (
    <div className="flex flex-col gap-8 p-6 w-[60%] text-white mx-auto">
      <section className="flex flex-col md:flex-row gap-6 p-6 border border-[#353539]">
        <div className="flex-1 space-y-4">
        <h2 className="text-lg font-mono tracking-wider flex items-center">
            <Image
              src={"/icons/arrow-right-solid.svg"}
              height={11}
              width={8}
              alt={"arrow-right"}
              className="mr-2"
            />
            ABOUT VIT
          </h2>
          <p className="font-mono text-sm leading-relaxed opacity-80">
            At VIT, our founding vision is the delivery of internationally
            recognized, quality higher education. Established decades ago, we
            continue to evolve and adapt to the changing times while staying
            true to our mission. Through sustained quality, structured mobility,
            international and employments, IT maintains its leading position in
            teaching and research while our community continues to accelerate
            innovation for improved effect.
          </p>
        </div>
        <div className="flex items-center justify-center flex-1">
          <BuildingIcon className="text-[#00ff00] w-24 h-auto" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse gap-6 p-6 border border-[#353539]">
        <div className="flex-1 space-y-4">
        <h2 className="text-lg font-mono tracking-wider flex items-center">
            <Image
              src={"/icons/arrow-right-solid.svg"}
              height={11}
              width={8}
              alt={"arrow-right"}
              className="mr-2"
            />
            ABOUT DSW
          </h2>
          <p className="font-mono text-sm leading-relaxed opacity-80">
            As Students' Welfare at VIT focuses on enhancing students' overall
            well-being through student care services and initiatives. It aims to
            provide a balanced and fulfilling university life experience while
            promoting individual and personal growth among students.
          </p>
        </div>
        <div className="flex items-center justify-center flex-1">
          <BuildingIcon className="text-[#00ff00] w-24 h-auto" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6 p-6 border border-[#353539]">
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-mono tracking-wider flex items-center">
            <Image
              src={"/icons/arrow-right-solid.svg"}
              height={11}
              width={8}
              alt={"arrow-right"}
              className="mr-2"
            />
            ABOUT YANTRA
          </h2>
          <p className="font-mono text-sm leading-relaxed opacity-80">
            Yantra is VIT University's annual technical festival, focusing on
            engineering, technology, and innovation. Through events, workshops,
            and exhibitions where students showcase their technical skills and
            creativity, Yantra fosters learning, collaboration, inspires
            innovation, and provides a platform for students to explore their
            interests in technology.
          </p>
        </div>
        <div className="flex items-center justify-center flex-1">
          <BuildingIcon className="text-[#00ff00] w-24 h-auto" />
        </div>
      </section>
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

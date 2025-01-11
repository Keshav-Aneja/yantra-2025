import Image from "next/image";

export default function PrizePool() {
  return (
    <div className="bg-black text-white  w-wrapper mx-auto">
      <div>
        <div className="text-center  border border-border border-t-0 py-12">
          <h2 className="text-2xl mb-4 font-roboto_mono font-semibold">
            PRIZE POOL WORTH
          </h2>
          <div className="text-5xl md:text-7xl font-bold tracking-wider font-armstrong">
            10,00,000/-
          </div>
        </div>
        <div className="w-full h-16 border-x border-border">
          <div className="w-1/2 h-full border-r border-border"></div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-64 border border-border py-8">
          <Image
            src="/sdg.png"
            alt="UN Sustainable Development Goals"
            width={288}
            height={180}
            className="w-24 md:w-40 object-contain p-4"
          />
          <Image
            src="/innovation.png"
            alt="Institution's Innovation Council"
            width={288}
            height={180}
            className="w-24 md:w-40 object-contain p-4"
          />
          <Image
            src="/40.png"
            alt="40th Anniversary Logo"
            width={288}
            height={180}
            className="w-24 md:w-40 object-contain p-4"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function PrizePool() {
  return (
    <div className="bg-black text-white py-16 w-[60%] mx-auto">
      <div>
        <div className="text-center mb-16 border border-gray-500 py-8">
          <h2 className="text-xl mb-2">PRIZE POOL WORTH</h2>
          <div className="text-5xl md:text-7xl font-bold tracking-wider">
            10,00,000/-
          </div>
        </div>

                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-64 border border-gray-500 py-8">
          <div className="w-24 md:w-32">
            <Image
              src="/sdg.png"
              alt="UN Sustainable Development Goals"
              width={96}
              height={60}
              className="w-24 md:w-40 object-contain"
            />
          </div>
          <div className="w-24 md:w-40">
            <Image
              src="/innovation.png"
              alt="Institution's Innovation Council"
              width={96}
              height={60}
              className="w-24 md:w-40 object-contain"
            />
          </div>
          <div className="w-24 md:w-40">
            <Image
              src="/40.png"
              alt="40th Anniversary Logo"
              width={96}
              height={60}
              className="w-24 md:w-40 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

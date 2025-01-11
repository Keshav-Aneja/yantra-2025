import Image from "next/image";
export default function Timeline() {
  const events = [
    { id: 1, highlighted: true },
    { id: 2, highlighted: false },
    { id: 3, highlighted: false },
    { id: 4, highlighted: false },
    { id: 5, highlighted: false },
  ];

  return (
    // TODO: Fix the indentation for the timeline and the design in front of it
    //TODO: Redo the timeline, this layout isn't gonna work in different devices, this is too jugaadu
    //TODO: The timeline boxes are not colored and bordered according to the figma design
    <div className="bg-background w-wrapper mx-auto">
      <div className="w-full grid grid-cols-2 h-60 border-x border-border border-b">
        <div className="w-full h-full border-r border-border flex flex-col justify-end">
          <div className={"p-8 flex gap-5"}>
            <Image
              src={"/icons/arrow-right-solid.svg"}
              height={11}
              width={8}
              alt={"arrow-right"}
            />
            <div className={"font-roboto_mono text-white text-4xl font-medium"}>
              TIMELINE
            </div>
          </div>
        </div>
        <div className="w-full h-full"></div>
      </div>
      <div className="relative w-full  mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border" />
        <div className="space-y-12 w-full border-border border-x py-16">
          {events.map((event, index) => (
            <div key={event.id} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl">✽</span>
                </div>
              </div>
              <div
                className={` --timeline-banner w-[30%] ${
                  index % 2 === 0 ? "ml-12" : "ml-[65%]"
                }`}
              >
                <div
                  className={`p-4 flex items-center justify-between ${
                    event.highlighted ? "gradient-bg" : "bg-transparent border"
                  }`}
                >
                  <div className="font-roboto font-bold text-xl w-1/2">
                    <div
                      className={`${
                        event.highlighted ? "text-black" : "text-white"
                      }`}
                    >
                      Week Inauguration
                    </div>
                  </div>
                  <div
                    className={`${
                      event.highlighted ? "text-black" : "text-white"
                    } font-roboto font-bold  text-xl`}
                  >
                    06 JUN
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

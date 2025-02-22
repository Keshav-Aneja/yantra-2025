import {
  Carousel, CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {  EmblaEventType } from "embla-carousel";

import { usePrevNextButtons, useCarouselTabs, PrevBtn, NextBtn } from "@/components/carousel-helper";
import Image from "next/image";
import {useCallback, useEffect, useRef, useState} from "react";
import FadeIn from "@/components/ui/fade-in";

interface IResultCarousel {
  // winners: Record<string, string>, // { position: image }
  title: string,
  image: string,
  onClick: ()=>void
}

const TWEEN_FACTOR_BASE = 0.2;

export default function ResultCarousel(props: IResultCarousel){
  const { title, image, onClick } = props;
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const { selectedIndex, handleTabSelect, scrollSnaps } = useCarouselTabs(emblaApi);
  const [ isHovering, setIsHovering ] = useState(false);
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  useEffect(() => {
    const autoPlay = emblaApi?.plugins()?.autoplay;
    if (!autoPlay) return;
    if (isHovering) autoPlay.stop()
    else autoPlay.play();
  }, [isHovering]);

  useEffect(()=>{
    const autoPlay = emblaApi?.plugins()?.autoplay;
    if (!autoPlay) return;
    autoPlay.reset()
  }, [selectedIndex])

  const setTweenNodes = useCallback((emblaApi: CarouselApi): void => {
    if (!emblaApi) return;
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return;
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback(
    (emblaApi: CarouselApi, eventName?: EmblaEventType) => {
      if (!emblaApi) return;
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100
          const tweenNode = tweenNodes.current[slideIndex]
          if (tweenNode) tweenNode.style.transform = `translateX(${translate}%)`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, tweenParallax])

  return (
    <div className={"flex flex-col gap-2 w-full h-full"}>
      <div className={"ml-5 flex gap-5 items-center"}>
        <div className={""}>
          <Image
            src={"/icons/arrow-right-solid.svg"}
            height={11}
            width={8}
            className={"size-3 max-md:size-2"}
            alt={"arrow-right"}
          />
        </div>
        <div className={"font-roboto_mono text-white text-lg md:text-xl font-medium"}>{title}</div>
      </div>
      <div className={"border-2 md:border-[4px] border-white"}>
        <Image
          width={1920}
          height={720}
          src={image}
          alt={title}
          className={"h-full w-full max-h-[25rem]"}
          onClick={onClick}
        />
      </div>
      {/*<div>*/}
      {/*  <Carousel*/}
      {/*    opts={{*/}
      {/*      slidesToScroll: 1,*/}
      {/*      align: "start",*/}
      {/*      startIndex: 0,*/}
      {/*      duration: 40,*/}
      {/*      loop: true*/}
      {/*    }}*/}
      {/*    plugins={[*/}
      {/*      Autoplay({*/}
      {/*        delay: 4000,*/}
      {/*      })*/}
      {/*    ]}*/}
      {/*    setApi={setEmblaApi}*/}
      {/*    className={"w-full border-4 md:border-[6px] border-[#60CF8C]"}*/}
      {/*  >*/}
      {/*    <CarouselContent className={"ml-0"} */}
      {/*      onMouseEnter={setIsHovering.bind(null, true)}*/}
      {/*      onMouseLeave={setIsHovering.bind(null, false)}*/}
      {/*    >*/}
      {/*      <>*/}
      {/*        {Object.entries(winners).map(([position, winnerImage]) => (*/}
      {/*          <CarouselItem key={position} className={"px-0"}>*/}
      {/*            <FadeIn initialScale={1}>*/}
      {/*              <div className="embla__parallax">*/}
      {/*                <div className="embla__parallax__layer">*/}
      {/*                  <Image */}
      {/*                    src={winnerImage} */}
      {/*                    alt={position} */}
      {/*                    height={800} width={1600} */}
      {/*                    className={"h-full w-full max-h-[30rem] object-cover embla__parallax__img"} */}
      {/*                    priority */}
      {/*                  />*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </FadeIn>*/}
      {/*          </CarouselItem>*/}
      {/*        ))}*/}
      {/*      </>*/}
      {/*    </CarouselContent>*/}
      {/*  </Carousel>*/}
      {/*</div>*/}
      {/*<div className={"flex justify-center gap-2 mt-1 my-3 flex-wrap px-1"}>*/}
      {/*  {Object.keys(winners).map((position, index)=>(*/}
      {/*    <div*/}
      {/*      className={`border p-1 px-2 max-md:py-0.5 max-md:px-1.5 text-sm max-md:text-xs font-space_mono cursor-pointer*/}
      {/*        ${index == selectedIndex ? "bg-white text-black" : "border-neutral-600 text-white"}*/}
      {/*      `}*/}
      {/*      onClick={handleTabSelect.bind(null, index)}*/}
      {/*      key={position}*/}
      {/*    >*/}
      {/*      {position}*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  )
}
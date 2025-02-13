import {useCallback, useEffect, useState} from 'react'
import {CarouselApi} from "@/components/ui/carousel";

interface UsePrevNextButtonsType {
    prevBtnDisabled: boolean,
    nextBtnDisabled: boolean,
    onPrevBtnClick: ()=>void,
    onNextBtnClick: ()=>void
}

export const usePrevNextButtons = (
    carouselApi: CarouselApi | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevBtnClick = useCallback(()=>{
        if (!carouselApi) return;
        carouselApi.scrollPrev();
    }, [carouselApi]);

    const onNextBtnClick = useCallback(()=>{
        if (!carouselApi) return;
        carouselApi.scrollNext();
    }, [carouselApi])

    const onSelect = useCallback((carouselApi: CarouselApi)=>{
        if (!carouselApi) return;
        setPrevBtnDisabled(!carouselApi.canScrollPrev());
        setNextBtnDisabled(!carouselApi.canScrollNext());
    }, [])

    useEffect(() => {
        if (!carouselApi) return;
        onSelect(carouselApi);
        carouselApi.on('reInit', onSelect).on('select', onSelect);
    }, [carouselApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevBtnClick,
        onNextBtnClick
    }
}

type IUseCarouselTabs = {
    selectedIndex: number
    scrollSnaps: number[]
    handleTabSelect: (index: number) => void
}

export const useCarouselTabs = (
  emblaApi: CarouselApi | undefined,
  options?: {
    onTabSelect?: (emblaApi: CarouselApi) => void;
  }
): IUseCarouselTabs => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const handleTabSelect = useCallback(
      (index: number) => {
          if (!emblaApi) return
          emblaApi.scrollTo(index)
          if (options?.onTabSelect) options.onTabSelect(emblaApi)
      },
      [emblaApi, options?.onTabSelect]
    )

    const onInit = useCallback((emblaApi: CarouselApi) => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: CarouselApi) => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)

        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        handleTabSelect
    }
}

export const NextBtn = (props: React.ComponentPropsWithoutRef<'button'>)=>{
    return (
        <button type={"button"} className={"size-7"} {...props}>
            <svg viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg" className={'size-full'}>
                <path
                    d="M20.8627 24.1513L30.7368 14.6579L20.6839 14.683C24.2918 14.6739 26.0825 19.0558 23.5008 21.5761L20.8627 24.1513Z"
                    fill="currentColor"/>
                <path
                    d="M30.7368 14.6579L24.1541 8.32895L20.8627 5.16447L23.4952 7.71385C26.1098 10.246 24.3237 14.6739 20.6839 14.683L30.7368 14.6579Z"
                    fill="currentColor"/>
                <path
                    d="M2 14.6579L20.6839 14.683M30.7368 14.6579L24.1541 8.32895L20.8627 5.16447M30.7368 14.6579L20.8627 24.1513M30.7368 14.6579L20.6839 14.683M17.5713 2L20.8627 5.16447M17.5713 27.3158L20.8627 24.1513M20.8627 5.16447L23.4952 7.71385C26.1098 10.246 24.3237 14.6739 20.6839 14.683V14.683M20.8627 24.1513L23.5008 21.5761C26.0825 19.0558 24.2918 14.6739 20.6839 14.683V14.683"
                    stroke="currentColor" strokeWidth="3.20028" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {props.children}
        </button>

    )
}

export const PrevBtn = (props: React.ComponentPropsWithoutRef<'button'>) => {
    return (
        <button type={'button'} className={"size-7"} {...props}>
            <svg viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg" className={'size-full'}>
                <path
                    d="M12.1373 4.84868L2.26316 14.3421L12.3161 14.317C8.70817 14.3261 6.91748 9.94417 9.49923 7.42392L12.1373 4.84868Z"
                    fill="currentColor"/>
                <path
                    d="M2.26316 14.3421L8.84592 20.6711L12.1373 23.8355L9.50481 21.2861C6.89016 18.754 8.67632 14.3261 12.3161 14.317L2.26316 14.3421Z"
                    fill="currentColor"/>
                <path
                    d="M31 14.3421L12.3161 14.317M2.26316 14.3421L8.84592 20.6711L12.1373 23.8355M2.26316 14.3421L12.1373 4.84868M2.26316 14.3421L12.3161 14.317M15.4287 27L12.1373 23.8355M15.4287 1.68421L12.1373 4.84868M12.1373 23.8355L9.50481 21.2861C6.89016 18.754 8.67632 14.3261 12.3161 14.317V14.317M12.1373 4.84868L9.49923 7.42392C6.91748 9.94417 8.70817 14.3261 12.3161 14.317V14.317"
                    stroke="currentColor" strokeWidth="3.20028" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {props.children}
        </button>
    )
}

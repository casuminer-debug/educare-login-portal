import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import slide1 from "@/assets/slide-1.png";
import slide2 from "@/assets/slide-2.png";
import slide3 from "@/assets/slide-3.png";

const slides = [
  {
    image: slide1,
    quote: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
    author: "Nelson Mandela"
  },
  {
    image: slide2,
    quote: "Educar não é encher um balde, mas acender um fogo.",
    author: "William Butler Yeats"
  },
  {
    image: slide3,
    quote: "A educação é o passaporte para o futuro, pois o amanhã pertence àqueles que se preparam hoje.",
    author: "Malcolm X"
  }
];

export const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Auto-play
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full h-full">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 gradient-overlay" />
                <img
                  src={slide.image}
                  alt={`Cenário educacional ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex items-end justify-start h-full p-8 pb-20">
                  <div className="max-w-xl space-y-2">
                    <div className="flex items-start gap-1">
                      <span className="text-secondary text-5xl font-serif leading-none">"</span>
                      <p className="text-white text-lg font-light leading-relaxed pt-2">
                        {slide.quote}
                      </p>
                    </div>
                    {slide.author && (
                      <p className="text-white/90 text-sm font-medium pl-8">
                        — {slide.author}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index
                ? "bg-secondary w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

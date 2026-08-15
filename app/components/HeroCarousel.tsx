"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import HeroCard from "./HeroCard";

export interface Hero {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  joinedAt: string;
  buildId: string;
  role: string;
  specialty: string;
}

function circularDistance(index: number, selected: number, length: number) {
  const direct = index - selected;
  const wrapped = direct > 0 ? direct - length : direct + length;
  return Math.abs(direct) <= Math.abs(wrapped) ? direct : wrapped;
}

export default function HeroCarousel({ heroes }: { heroes: Hero[] }) {
  const reduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    duration: reduceMotion ? 0 : 22,
    skipSnaps: false,
  });

  const updateSelection = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateSelection);
    emblaApi.on("reInit", updateSelection);
    return () => {
      emblaApi.off("select", updateSelection);
      emblaApi.off("reInit", updateSelection);
    };
  }, [emblaApi, updateSelection]);

  return (
    <section className="w-full" aria-label="Troupe roster">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-amber-300/60">
            Active dossiers
          </p>
          <p className="mt-1 text-sm text-stone-500">
            {String(selectedIndex + 1).padStart(2, "0")} / {String(heroes.length).padStart(2, "0")} · {heroes[selectedIndex]?.name}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous hero"
            className="grid size-9 place-items-center rounded-full border border-amber-200/20 bg-white/5 text-amber-100 transition hover:border-amber-200/50 hover:bg-amber-100/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next hero"
            className="grid size-9 place-items-center rounded-full border border-amber-200/20 bg-white/5 text-amber-100 transition hover:border-amber-200/50 hover:bg-amber-100/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        ref={emblaRef}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") emblaApi?.scrollPrev();
          if (event.key === "ArrowRight") emblaApi?.scrollNext();
        }}
        className="cursor-grab select-none overflow-hidden py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        style={{ perspective: "1200px" }}
        aria-roledescription="carousel"
        aria-label="Phantom Troupe members"
      >
        <div className="flex touch-pan-y gap-3">
          {heroes.map((hero, index) => {
            const distance = circularDistance(index, selectedIndex, heroes.length);
            const depth = Math.min(Math.abs(distance), 2);

            return (
              <div
                key={hero.buildId}
                className="min-w-0 max-w-[350px] flex-[0_0_calc(100vw-3rem)]"
                aria-label={`${hero.name}, ${index + 1} of ${heroes.length}`}
                aria-current={selectedIndex === index ? "true" : undefined}
              >
                <motion.div
                  animate={{
                    scale: reduceMotion ? 1 : 1 - depth * 0.08,
                    opacity: 1 - depth * 0.24,
                    rotateY: reduceMotion ? 0 : distance * -14,
                    z: reduceMotion ? 0 : depth * -60,
                  }}
                  transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <HeroCard {...hero} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-1.5" aria-label="Choose a hero">
        {heroes.map((hero, index) => (
          <button
            key={hero.buildId}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Show ${hero.name}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${
              selectedIndex === index
                ? "w-6 bg-amber-300"
                : "w-1.5 bg-stone-700 hover:bg-stone-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

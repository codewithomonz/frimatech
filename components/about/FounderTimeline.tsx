"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";

export interface TimelineItem {
  label: string;
  title: string;
  paragraphs: string[];
}

interface Props {
  items: TimelineItem[];
}

/**
 * A vertical "cable run" that draws itself as the visitor scrolls through the
 * founder's story. With reduced motion enabled, the line is fully drawn.
 */
export default function FounderTimeline({ items }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <div ref={trackRef} className="relative pb-12">
      {/* Line: faint track + the part that draws on scroll */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[6px] top-0 w-[2px] bg-[#345B58]/20 md:left-[calc(10rem+6px)]"
      >
        <motion.div
          className="h-full w-full origin-top bg-[#2A8A7E]"
          style={{ scaleY: reduceMotion ? 1 : scrollYProgress }}
        />
      </div>

      <ol>
        {items.map((item) => (
          <li
            key={item.label}
            className="relative pb-14 pl-10 last:pb-0 md:pl-52"
          >
            {/* Node */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-[#345B58] bg-[#DBC547] md:left-40"
            />

            <p className="mb-1 text-sm font-semibold tabular-nums text-[#345B58] md:absolute md:left-0 md:top-1 md:mb-0 md:w-36">
              {item.label}
            </p>

            <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#1F3836]">
              {item.title}
            </h3>

            <div className="max-w-[62ch] space-y-4 font-[family-name:var(--font-serif)] text-lg leading-[1.7] text-[#3A4745]">
              {item.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      {/* Terminus: the line ends here and hands over to the Academy */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-3.5 w-3.5 rounded-full bg-[#345B58] md:left-40"
      />
    </div>
  );
}

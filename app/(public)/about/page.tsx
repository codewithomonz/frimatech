// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
// import {
//   ArrowRight,
//   GraduationCap,
//   Laptop,
//   Network,
//   Wrench,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import AnimateOnEnter from "@/components/AnimateOnEnter";
// import FounderTimeline, {
//   type TimelineItem,
// } from "@/components/about/FounderTimeline";

// const grotesk = Schibsted_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-grotesk",
//   display: "swap",
// });

// const serif = Source_Serif_4({
//   subsets: ["latin"],
//   variable: "--font-serif",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "About Musa Alayafin Friday & Frima Technology | Benin City",
//   description:
//     "Meet Musa Alayafin Friday, founder of Frima Technology Limited and Frima Technology Academy in Benin City, Nigeria. IT support and repairs, network setup, quality computers and accessories, and practical IT training.",
//   keywords: [
//     "about Frima Technology",
//     "Musa Alayafin Friday",
//     "Frima Technology Academy",
//     "IT support Benin City",
//     "network setup Benin City",
//     "IT training Nigeria",
//   ],
//   openGraph: {
//     title: "About Musa Alayafin Friday & Frima Technology",
//     description:
//       "From a GSM Village market to Frima Technology Limited and Frima Technology Academy: the founder's story.",
//     type: "website",
//     url: "https://www.frimatechnology.com/about",
//     images: [
//       {
//         url: "https://www.frimatechnology.com/images/logo.jpeg",
//         width: 1200,
//         height: 630,
//         alt: "About Frima Technology",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@frimatech",
//     title: "About Musa Alayafin Friday & Frima Technology",
//     description:
//       "From a GSM Village market to Frima Technology Limited and Frima Technology Academy: the founder's story.",
//     images: ["https://www.frimatechnology.com/images/logo.jpeg"],
//   },
//   alternates: {
//     canonical: "https://www.frimatechnology.com/about",
//   },
// };

// const FOUNDER_PHOTO = "/main.png";

// {
//   /* <Image
//   src="/main.png"
//   alt="Frima Technology workspace"
//   width={1000}
//   height={1000}
//   className="h-auto w-full rounded-2xl object-cover lg:h-[70vh]"
// />; */
// }

// const timeline: TimelineItem[] = [
//   {
//     label: "School",
//     title: "Graduating from the Federal Polytechnic Auchi",
//     paragraphs: [
//       "I graduated from the Federal Polytechnic Auchi with an Upper Credit in both my OND and HND in Computer Science. But a certificate alone doesn't make you a technician, and I knew it.",
//       "During school, I was fully focused on my studies. I didn't have the chance to learn many practical IT skills alongside them, so after graduation and my NYSC year, I felt I was behind. Instead of waiting for an opportunity, I decided to build my own.",
//     ],
//   },
//   {
//     label: "2019",
//     title: "CompTIA A+ and the GSM Village market",
//     paragraphs: [
//       "In 2019, I used the money I'd saved from my NYSC allowance to enrol for CompTIA A+ training at Complete Computers Technology Institute in Benin City. Soon after, I began working as a freelance IT support technician in a GSM Village market.",
//       "Fixing real problems for real people taught me more than any classroom could. It also gave me the confidence to start my own business.",
//     ],
//   },
//   {
//     label: "The business",
//     title: "Frima Technology Limited",
//     paragraphs: [
//       "That business became Frima Technology Limited. I began selling computers and IT accessories because I wanted my customers to get gadgets they could depend on, from someone who can also fix them if anything goes wrong.",
//     ],
//   },
//   {
//     label: "2022",
//     title: "Cloud and networking",
//     paragraphs: [
//       "I kept learning as the business grew. In 2022, I earned AWS training and certification through the Edo Innovation Hub to understand cloud technology.",
//       "I later returned to Complete Computers to complete my CCNA, which strengthened my networking skills and allowed me to take on bigger projects.",
//     ],
//   },
//   {
//     label: "2024",
//     title: "A leadership award",
//     paragraphs: [
//       "Growth isn't only technical. In 2024, I received a leadership award from the Center for Leadership and Sustainable Development (Center LSD) in Benin City, recognizing my commitment to leading with purpose and building something that lasts.",
//     ],
//   },
// ];

// const academySkills = ["IT support", "Networking", "IoT"];

// const today = [
//   {
//     icon: Wrench,
//     title: "IT support and repairs",
//     description: "Done properly and explained clearly.",
//     href: "/contact",
//   },
//   {
//     icon: Network,
//     title: "Network setup and troubleshooting",
//     description: "From small offices to larger systems.",
//     href: "/contact",
//   },
//   {
//     icon: Laptop,
//     title: "Quality computers and accessories",
//     description: "Chosen to fit your needs and budget.",
//     href: "/shop",
//   },
//   {
//     icon: GraduationCap,
//     title: "Practical IT training",
//     description: "For the next generation of technicians.",
//     href: "/training",
//   },
// ];

// const focusRing =
//   "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBC547] focus-visible:ring-offset-2";

// export default function AboutPage() {
//   return (
//     <div
//       className={`${grotesk.variable} ${serif.variable} font-[family-name:var(--font-grotesk)]`}
//     >
//       {/* Hero: the founder, in his own words */}
//       <section className="bg-[#1F3836] text-white pt-12 pb-8 md:pb-0 lg:pb-0 xl:pb-0">
//         <AnimateOnEnter>
//           <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pt-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:px-8 lg:pt-24">
//             <div className="pb-4 lg:pb-24">
//               <h1 className="max-w-[18ch] text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight">
//                 <span className="sr-only">About Frima Technology. </span>A
//                 certificate alone doesn&apos;t make you a technician.
//               </h1>
//               <div className="mt-8 border-l-2 border-[#DBC547] pl-4">
//                 <p className="text-xl font-semibold">Musa Alayafin Friday</p>
//                 <p className="mt-1 max-w-[40ch] text-base text-white/75">
//                   Founder, Frima Technology Limited &amp; Frima Technology
//                   Academy
//                 </p>
//               </div>
//             </div>

//             <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-md bg-[#2A4A47] lg:max-w-none">
//               {FOUNDER_PHOTO ? (
//                 <Image
//                   src={FOUNDER_PHOTO}
//                   alt="Musa Alayafin Friday, founder of Frima Technology"
//                   fill
//                   priority
//                   sizes="(min-width: 1024px) 30vw, 90vw"
//                   className="object-cover"
//                 />
//               ) : (
//                 <div
//                   role="img"
//                   aria-label="Portrait of Musa Alayafin Friday to be added"
//                   className="flex h-full w-full items-center justify-center text-8xl font-semibold text-white/25"
//                 >
//                   MF
//                 </div>
//               )}
//             </div>
//           </div>
//         </AnimateOnEnter>
//       </section>

//       {/* Story: the timeline is the story */}
//       <section
//         aria-labelledby="story-heading"
//         className="bg-[#F2F5F3] py-20 lg:py-28"
//       >
//         <div className="mx-auto max-w-6xl px-4 lg:px-8">
//           <h2 id="story-heading" className="sr-only">
//             How Musa built Frima Technology
//           </h2>
//           <FounderTimeline items={timeline} />
//         </div>
//       </section>

//       {/* Academy */}
//       <section
//         aria-labelledby="academy-heading"
//         className="bg-[#1F3836] py-20 text-white lg:py-28"
//       >
//         <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-8">
//           <div>
//             <h2
//               id="academy-heading"
//               className="mb-6 max-w-[20ch] text-3xl font-semibold leading-tight lg:text-5xl lg:leading-[1.1]"
//             >
//               Passing it on: Frima Technology Academy
//             </h2>
//             <p className="max-w-[62ch] font-[family-name:var(--font-serif)] text-lg leading-[1.7] text-white/85">
//               I know what it&apos;s like to start without the resources or the
//               exposure. That&apos;s why, in 2026, I launched Frima Technology
//               Academy, where we train students in IT support, networking, and
//               IoT skills. Our first training ran from July to September 2026,
//               and we&apos;re now preparing to equip more young people across
//               Nigeria with these core skills.
//             </p>
//             <Button
//               asChild
//               className={`mt-8 bg-[#DBC547] font-semibold text-[#1F3836] hover:bg-[#c9b33a] ${focusRing} focus-visible:ring-offset-[#1F3836]`}
//             >
//               <Link href="/training">
//                 View training courses <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>

//           <div className="self-end">
//             <ul className="divide-y divide-white/20 border-y border-white/20">
//               {academySkills.map((skill) => (
//                 <li
//                   key={skill}
//                   className="py-5 text-3xl font-semibold lg:text-4xl"
//                 >
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//             <p className="mt-4 text-sm text-white/70">
//               First training: July to September 2026
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* What we do today */}
//       <section
//         aria-labelledby="today-heading"
//         className="bg-white py-20 lg:py-28"
//       >
//         <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
//           <h2
//             id="today-heading"
//             className="text-3xl font-semibold leading-tight text-[#1F3836] lg:text-4xl"
//           >
//             What we do today
//           </h2>

//           <ul className="divide-y divide-[#345B58]/15 border-y border-[#345B58]/15">
//             {today.map((item) => (
//               <li key={item.title}>
//                 <Link
//                   href={item.href}
//                   className={`group flex items-center gap-5 px-2 py-6 transition-colors hover:bg-[#F2F5F3] ${focusRing}`}
//                 >
//                   <item.icon
//                     className="h-6 w-6 shrink-0 text-[#345B58]"
//                     strokeWidth={1.5}
//                     aria-hidden="true"
//                   />
//                   <span className="flex-1">
//                     <span className="block text-xl font-semibold text-[#1F3836]">
//                       {item.title}
//                     </span>
//                     <span className="mt-1 block text-base text-[#3A4745]">
//                       {item.description}
//                     </span>
//                   </span>
//                   <ArrowRight
//                     className="h-5 w-5 shrink-0 text-[#345B58] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
//                     strokeWidth={1.5}
//                     aria-hidden="true"
//                   />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Closing */}
//       <section
//         aria-labelledby="closing-heading"
//         className="bg-[#345B58] py-20 text-white lg:py-28"
//       >
//         <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
//           <h2
//             id="closing-heading"
//             className="text-2xl font-semibold leading-snug lg:text-4xl lg:leading-snug"
//           >
//             Whether you need reliable IT support, a stable network, the right
//             computer, or a place to start your IT career, I&apos;d be glad to
//             help.
//           </h2>
//           <p className="mx-auto mt-6 max-w-[62ch] font-[family-name:var(--font-serif)] text-lg leading-[1.7] text-white/85">
//             I&apos;m still learning and still growing. I&apos;m committed to a
//             lifelong pursuit of excellence, and that commitment goes into every
//             device we sell, every system we set up, and every student we train.
//           </p>
//           <Button
//             asChild
//             size="lg"
//             className={`mt-10 bg-[#DBC547] px-8 py-6 text-base font-semibold text-[#1F3836] hover:bg-[#c9b33a] ${focusRing} focus-visible:ring-offset-[#345B58]`}
//           >
//             <Link href="/contact">
//               Talk to Frima <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//           <p className="mt-6 text-sm text-white/75">
//             Musa Alayafin Friday, Founder
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateOnEnter from "@/components/AnimateOnEnter";
import { services as servicesList } from "@/components/home/services-data";
import FounderTimeline, {
  type TimelineItem,
} from "@/components/about/FounderTimeline";

const grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "About Musa Alayafin Friday & Frima Technology | Benin City",
  description:
    "Meet Musa Alayafin Friday, founder of Frima Technology Limited and Frima Technology Academy in Benin City, Nigeria. IT support and repairs, network setup, quality computers and accessories, and practical IT training.",
  keywords: [
    "about Frima Technology",
    "Musa Alayafin Friday",
    "Frima Technology Academy",
    "IT support Benin City",
    "network setup Benin City",
    "IT training Nigeria",
  ],
  openGraph: {
    title: "About Musa Alayafin Friday & Frima Technology",
    description:
      "From a GSM Village market to Frima Technology Limited and Frima Technology Academy: the founder's story.",
    type: "website",
    url: "https://www.frimatechnology.com/about",
    images: [
      {
        url: "https://www.frimatechnology.com/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "About Frima Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@frimatech",
    title: "About Musa Alayafin Friday & Frima Technology",
    description:
      "From a GSM Village market to Frima Technology Limited and Frima Technology Academy: the founder's story.",
    images: ["https://www.frimatechnology.com/images/logo.jpeg"],
  },
  alternates: {
    canonical: "https://www.frimatechnology.com/about",
  },
};

const FOUNDER_PHOTO = "/musa-img.png";

const timeline: TimelineItem[] = [
  {
    label: "School",
    title: "Graduating from the Federal Polytechnic Auchi",
    paragraphs: [
      "I graduated from the Federal Polytechnic Auchi with an Upper Credit in both my OND and HND in Computer Science. But a certificate alone doesn't make you a technician, and I knew it.",
      "During school, I was fully focused on my studies. I didn't have the chance to learn many practical IT skills alongside them, so after graduation and my NYSC year, I felt I was behind. Instead of waiting for an opportunity, I decided to build my own.",
    ],
  },
  {
    label: "2019",
    title: "CompTIA A+ and the GSM Village market",
    paragraphs: [
      "In 2019, I used the money I'd saved from my NYSC allowance to enrol for CompTIA A+ training at Complete Computers Technology Institute in Benin City. Soon after, I began working as a freelance IT support technician in a GSM Village market.",
      "Fixing real problems for real people taught me more than any classroom could. It also gave me the confidence to start my own business.",
    ],
  },
  {
    label: "The business",
    title: "Frima Technology Limited",
    paragraphs: [
      "That business became Frima Technology Limited. I began selling computers and IT accessories because I wanted my customers to get gadgets they could depend on, from someone who can also fix them if anything goes wrong.",
    ],
  },
  {
    label: "2022",
    title: "Cloud and networking",
    paragraphs: [
      "I kept learning as the business grew. In 2022, I earned AWS training and certification through the Edo Innovation Hub to understand cloud technology.",
      "I later returned to Complete Computers to complete my CCNA, which strengthened my networking skills and allowed me to take on bigger projects.",
    ],
  },
  {
    label: "2024",
    title: "A leadership award",
    paragraphs: [
      "Growth isn't only technical. In 2024, I received a leadership award from the Center for Leadership and Sustainable Development (Center LSD) in Benin City, recognizing my commitment to leading with purpose and building something that lasts.",
    ],
  },
];

const academySkills = ["IT support", "Networking", "IoT"];

const linkLabels: Record<string, string> = {
  "/shop": "Visit the shop",
  "/training": "See training courses",
  "/contact": "Talk to us",
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DBC547] focus-visible:ring-offset-2";

export default function AboutPage() {
  return (
    <div
      className={`${grotesk.variable} ${serif.variable} font-[family-name:var(--font-grotesk)]`}
    >
      {/* Hero: the founder, in his own words */}
      <section className="bg-[#1F3836] text-white pt-12 pb-8 md:pb-0 lg:pb-0 xl:pb-0">
        <AnimateOnEnter>
          <div className="mx-auto grid max-w-6xl items-end gap-10 px-4 pt-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:px-8 lg:pt-24">
            <div className="pb-4 lg:pb-24">
              <h1 className="max-w-[18ch] text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight">
                <span className="sr-only">About Frima Technology. </span>A
                certificate alone doesn&apos;t make you a technician.
              </h1>
              <div className="mt-8 border-l-2 border-[#DBC547] pl-4">
                <p className="text-xl font-semibold">Musa Alayafin Friday</p>
                <p className="mt-1 max-w-[40ch] text-base text-white/75">
                  Founder, Frima Technology Limited &amp; Frima Technology
                  Academy
                </p>
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-md bg-[#2A4A47] lg:max-w-none">
              {FOUNDER_PHOTO ? (
                <Image
                  src={FOUNDER_PHOTO}
                  alt="Musa Alayafin Friday, founder of Frima Technology"
                  fill
                  priority
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label="Portrait of Musa Alayafin Friday to be added"
                  className="flex h-full w-full items-center justify-center text-8xl font-semibold text-white/25"
                >
                  MF
                </div>
              )}
            </div>
          </div>
        </AnimateOnEnter>
      </section>

      {/* Story: the timeline is the story */}
      <section
        aria-labelledby="story-heading"
        className="bg-[#F2F5F3] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2 id="story-heading" className="sr-only">
            How Musa built Frima Technology
          </h2>
          <FounderTimeline items={timeline} />
        </div>
      </section>

      {/* Academy */}
      <section
        aria-labelledby="academy-heading"
        className="bg-[#1F3836] py-20 text-white lg:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-8">
          <div>
            <h2
              id="academy-heading"
              className="mb-6 max-w-[20ch] text-3xl font-semibold leading-tight lg:text-5xl lg:leading-[1.1]"
            >
              Passing it on: Frima Technology Academy
            </h2>
            <p className="max-w-[62ch] font-[family-name:var(--font-serif)] text-lg leading-[1.7] text-white/85">
              I know what it&apos;s like to start without the resources or the
              exposure. That&apos;s why, in 2026, I launched Frima Technology
              Academy, where we train students in IT support, networking, and
              IoT skills. Our first training ran from July to September 2026,
              and we&apos;re now preparing to equip more young people across
              Nigeria with these core skills.
            </p>
            <Button
              asChild
              className={`mt-8 bg-[#DBC547] font-semibold text-[#1F3836] hover:bg-[#c9b33a] ${focusRing} focus-visible:ring-offset-[#1F3836]`}
            >
              <Link href="/training">
                View training courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="self-end">
            <ul className="divide-y divide-white/20 border-y border-white/20">
              {academySkills.map((skill) => (
                <li
                  key={skill}
                  className="py-5 text-3xl font-semibold lg:text-4xl"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-white/70">
              First training: July to September 2026
            </p>
          </div>
        </div>
      </section>

      {/* What we do today */}
      <section
        aria-labelledby="today-heading"
        className="bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <h2
            id="today-heading"
            className="mb-12 text-3xl font-semibold leading-tight text-[#1F3836] lg:mb-16 lg:text-5xl"
          >
            What we do today
          </h2>

          {/* Ruled grid: the lines between cells do the separating, not shadows */}
          <ul className="grid border-l border-t border-[#345B58]/20 sm:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service) => (
              <li
                key={service.title}
                className="border-b border-r border-[#345B58]/20"
              >
                <Link
                  href={service.link}
                  className={`group flex h-full flex-col p-8 transition-colors hover:bg-[#F2F5F3] focus-visible:ring-inset lg:p-10 ${focusRing}`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[#345B58]/10 text-[#345B58] transition-colors group-hover:bg-[#345B58] group-hover:text-white">
                    <service.icon
                      className="h-7 w-7"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>

                  <h3 className="mt-6 text-2xl font-semibold leading-tight text-[#1F3836]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-base leading-relaxed text-[#3A4745]">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-[#345B58]">
                    {linkLabels[service.link] ?? "Learn more"}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section
        aria-labelledby="closing-heading"
        className="bg-[#345B58] py-20 text-white lg:py-28"
      >
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2
            id="closing-heading"
            className="text-2xl font-semibold leading-snug lg:text-4xl lg:leading-snug"
          >
            Whether you need reliable IT support, a stable network, the right
            computer, or a place to start your IT career, I&apos;d be glad to
            help.
          </h2>
          <p className="mx-auto mt-6 max-w-[62ch] font-[family-name:var(--font-serif)] text-lg leading-[1.7] text-white/85">
            I&apos;m still learning and still growing. I&apos;m committed to a
            lifelong pursuit of excellence, and that commitment goes into every
            device we sell, every system we set up, and every student we train.
          </p>
          <Button
            asChild
            size="lg"
            className={`mt-10 bg-[#DBC547] px-8 py-6 text-base font-semibold text-[#1F3836] hover:bg-[#c9b33a] ${focusRing} focus-visible:ring-offset-[#345B58]`}
          >
            <Link href="/contact">
              Talk to Frima <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-6 text-sm text-white/75">
            Musa Alayafin Friday, Founder
          </p>
        </div>
      </section>
    </div>
  );
}

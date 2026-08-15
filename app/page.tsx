import Image from "next/image";
import HeroCarousel, { type Hero } from "./components/HeroCarousel";

const image = (fileName: string) =>
  `/heroes/${fileName}.webp`;

const heroes: Hero[] = [
  {
    name: "Lady Geist",
    title: "The Crimson Debt",
    description: "An occultist who turns every sacrifice into leverage.",
    imageSrc: image("lady-geist"),
    joinedAt: "09 Nov 2025",
    buildId: "PT-029-G3",
    role: "Mystic",
    specialty: "Life Exchange",
  },
  {
    name: "Drifter",
    title: "The Empty Road",
    description:
      "A patient hunter who stalks those foolish enough to stand alone.",
    imageSrc: image("drifter"),
    joinedAt: "18 Nov 2025",
    buildId: "PT-033-D8",
    role: "Assassin",
    specialty: "Isolation",
  },
  {
    name: "Warden",
    title: "The Long Arm",
    description: "An unyielding pursuer who makes escape a temporary illusion.",
    imageSrc: image("warden"),
    joinedAt: "26 Nov 2025",
    buildId: "PT-038-W2",
    role: "Brawler",
    specialty: "Pursuit",
  },
  {
    name: "Victor",
    title: "The Returned",
    description: "A brutal creation whose final breath is rarely his last.",
    imageSrc: image("victor"),
    joinedAt: "04 Dec 2025",
    buildId: "PT-041-V8",
    role: "Brawler",
    specialty: "Resurrection",
  },
  {
    name: "Holliday",
    title: "The High Noon",
    description: "A fearless gunslinger who bends every skirmish to her tempo.",
    imageSrc: image("holliday"),
    joinedAt: "12 Dec 2025",
    buildId: "PT-046-H5",
    role: "Marksman",
    specialty: "Trick Shots",
  },
  {
    name: "The Doorman",
    title: "The Threshold",
    description:
      "A courteous mystery who ensures every door leads somewhere dangerous.",
    imageSrc: image("the-doorman"),
    joinedAt: "19 Dec 2025",
    buildId: "PT-051-D1",
    role: "Mystic",
    specialty: "Portals",
  },
  {
    name: "Haze",
    title: "The Veiled Hand",
    description:
      "An elusive assassin who strikes before her presence is known.",
    imageSrc: image("haze"),
    joinedAt: "07 Jan 2026",
    buildId: "PT-056-H6",
    role: "Assassin",
    specialty: "Infiltration",
  },
  {
    name: "Calico",
    title: "The Ninth Life",
    description:
      "A graceful predator who deals in curses, claws, and clean escapes.",
    imageSrc: image("calico"),
    joinedAt: "16 Jan 2026",
    buildId: "PT-061-C3",
    role: "Assassin",
    specialty: "Ambush",
  },
  {
    name: "Wraith",
    title: "The House Edge",
    description: "A calculating operator who never plays without loaded odds.",
    imageSrc: image("wraith"),
    joinedAt: "28 Jan 2026",
    buildId: "PT-068-W2",
    role: "Marksman",
    specialty: "Weapon Damage",
  },
  {
    name: "Silver",
    title: "The Hot Mess",
    description:
      "A relentless hunter who trades measured gunfire for feral violence.",
    imageSrc: image("silver"),
    joinedAt: "08 Feb 2026",
    buildId: "PT-073-S7",
    role: "Marksman",
    specialty: "Lycanthropy",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#29241a_0%,#11110f_38%,#080808_100%)] px-5 py-10 sm:px-8">
      <header className="mb-7 px-5 text-center sm:px-8">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.45em] text-amber-300/60">
          The Black Ledger
        </p>
        <h1 className="font-serif text-2xl font-medium text-stone-100 sm:text-3xl">
          Phantom Troupe Registry
        </h1>
      </header>
      <div className="mx-auto w-full max-w-[1180px] min-[2200px]:max-w-[1600px]">
        <HeroCarousel heroes={heroes} />
      </div>

      <section className="mx-auto mt-20 w-full max-w-[900px] px-2 pb-10 text-center sm:px-6">
        <div className="flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-200/25" />
          <span className="rotate-45 border border-amber-300/50 p-1.5" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-200/25" />
        </div>

        <p className="mx-auto mt-8 max-w-2xl font-serif leading-8 text-stone-300 sm:text-lg sm:leading-9">
          The Phantom Troupe is formed from heroes who excel at rushing
          <span className="mx-1.5 inline-flex items-baseline gap-1.5 whitespace-nowrap text-amber-200">
            <Image
              src="/phantom_strike.png"
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0 flex self-center rounded-md border border-emerald-200/20 shadow-[0_0_14px_rgba(110,231,183,0.18)]"
            />
            Phantom Strike.
          </span>
          Turning this early green-item spike into relentless tempo and
          snowballing control for the rest of the match.
        </p>

        <div className="mt-16">
          <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-amber-300/60">
            Founding Circle
          </p>
          <h2 className="mt-2 font-serif text-2xl font-medium text-stone-100 sm:text-3xl">
            Keepers of the Ledger
          </h2>

          <div className="mt-7 grid gap-3 text-left sm:grid-cols-2">
            <article className="relative overflow-hidden rounded-xl border border-amber-200/15 bg-white/[0.035] px-6 py-5">
              <span className="absolute right-5 top-4 font-mono text-[10px] tracking-[0.2em] text-stone-700">
                01
              </span>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-300/60">
                Founder
              </p>
              <h3 className="mt-2 font-serif text-2xl text-stone-100">Avian</h3>
              <p className="mt-2 text-xs leading-5 text-stone-500">
                Architect of the troupe and first name entered into the Black
                Ledger.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-xl border border-amber-200/15 bg-white/[0.035] px-6 py-5">
              <span className="absolute right-5 top-4 font-mono text-[10px] tracking-[0.2em] text-stone-700">
                02
              </span>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-300/60">
                Accomplice
              </p>
              <h3 className="mt-2 font-serif text-2xl text-stone-100">
                Suezhoo
              </h3>
              <p className="mt-2 text-xs leading-5 text-stone-500">
                Co-conspirator, record keeper, and custodian of the
                troupe&apos;s growing roster.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

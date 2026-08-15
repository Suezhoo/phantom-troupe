import Image from "next/image";

interface HeroCardProps {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  joinedAt: string;
  buildId: string;
  role: string;
  status?: "Active" | "Reserve" | "Missing";
  specialty?: string;
}

export default function HeroCard({
  name,
  title,
  description,
  imageSrc,
  joinedAt,
  buildId,
  role,
  status = "Active",
  specialty = "Close Quarters",
}: HeroCardProps) {
  return (
    <article className="group relative w-[calc(100vw-3rem)] max-w-[350px] shrink-0 overflow-hidden rounded-[1.25rem] border border-amber-200/20 bg-[#11110f] text-stone-100 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.95)]">
      <div className="pointer-events-none absolute inset-1.5 z-20 rounded-[1.1rem] border border-amber-100/10" />
      <span className="absolute left-4 top-4 z-30 h-5 w-5 border-l border-t border-amber-300/70" />
      <span className="absolute right-4 top-4 z-30 h-5 w-5 border-r border-t border-amber-300/70" />

      <div className="relative aspect-square overflow-hidden bg-stone-950">
        <Image
          src={imageSrc}
          alt={`${name}, ${title}`}
          fill
          draggable={false}
          loading="eager"
          sizes="(max-width: 398px) calc(100vw - 48px), 350px"
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_42%,rgba(17,17,15,0.22)_62%,#11110f_100%)]" />

        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-black/55 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />
          {status}
        </div>

        <div className="absolute inset-x-0 bottom-0 px-4 pb-3.5">
          <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.28em] text-amber-300/80">
            Phantom Troupe · {role}
          </p>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-white drop-shadow-lg">
            {name}
          </h2>
          <p className="mt-0.5 font-serif text-xs italic tracking-wide text-stone-300">
            “{title}”
          </p>
        </div>
      </div>

      <div className="relative px-4 pb-3.5 pt-2">
        <div className="mb-2.5 flex items-center gap-3" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-200/30" />
          <span className="rotate-45 border border-amber-300/50 p-1" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-200/30" />
        </div>

        <p className="line-clamp-2 text-[11px] leading-[1.125rem] text-stone-400">
          {description}
        </p>

        <dl className="mt-2.5 grid grid-cols-3 gap-x-3 border-t border-white/8 pt-2.5">
          <div>
            <dt className="text-[9px] font-semibold uppercase tracking-[0.24em] text-stone-600">
              Inducted
            </dt>
            <dd className="mt-1 text-[11px] font-medium text-stone-200">
              {joinedAt}
            </dd>
          </div>
          <div>
            <dt className="text-[9px] font-semibold uppercase tracking-[0.24em] text-stone-600">
              Build ID
            </dt>
            <dd className="mt-1 font-mono text-[11px] text-amber-200/85">
              {buildId}
            </dd>
          </div>
          <div>
            <dt className="text-[9px] font-semibold uppercase tracking-[0.24em] text-stone-600">
              Specialty
            </dt>
            <dd className="mt-1 text-[11px] font-medium text-stone-200">
              {specialty}
            </dd>
          </div>
        </dl>

        <div className="mt-2.5 flex items-center justify-between border-t border-amber-100/10 pt-2">
          <span className="text-[9px] uppercase tracking-[0.28em] text-stone-600">
            Authorized dossier
          </span>
          <span
            className="font-serif text-lg text-red-500/80"
            aria-hidden="true"
          >
            ◆
          </span>
        </div>
      </div>
    </article>
  );
}

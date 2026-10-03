import Link from "../components/Link";
import SectionHeading from "../components/SectionHeading";
import { WORK } from "../content";

export default function Experiences() {
  return (
    <section>
      <p className="max-w-[58ch] font-display text-2xl leading-normal font-light text-ink sm:text-[1.75rem]">
        Places where I've learned to think creatively, collaborate with others, and
        take ownership of software useful to real people.
      </p>

      <section className="mt-16">
        <SectionHeading>Where I work</SectionHeading>
        <div className="mt-6 border-t border-rule">
          {WORK.map((entry) => (
            <article
              key={entry.org}
              className="border-b border-rule py-8 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-8"
            >
              <div className="flex flex-col items-center gap-3">
                <p className="text-sm text-muted">{entry.period}</p>
                <img
                  src={entry.image}
                  alt={entry.imageAlt}
                  className="h-28 w-28 bg-gunmetal/5 object-contain"
                />
              </div>
              <div className="mt-2 sm:mt-0">
                <h2 className="font-display text-xl text-ink">{entry.role}</h2>
                <p className="mt-0.5 text-sm text-muted">
                  {entry.href ? <Link href={entry.href}>{entry.org}</Link> : entry.org}
                </p>
                <p className="mt-3 max-w-[62ch] font-display text-[1.0625rem] leading-relaxed">
                  {entry.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

import { useState } from "react";
import Link from "../components/Link";
import MessageItem from "../components/MessageItem";
import SectionHeading from "../components/SectionHeading";
import type { MessageId } from "../types";

export default function About() {
  const [activeMessage, setActiveMessage] = useState<MessageId | null>(null);

  return (
    <>
      <p className="max-w-[58ch] font-display text-2xl leading-normal font-light text-ink sm:text-[1.75rem]">
        I like creating software and solving problems.
      </p>

      <p className="mt-12 inline-block bg-terracotta px-4 py-2.5 text-sm text-ivory">
        Looking for a Spring 2027 co-op, January through August
      </p>

      <section className="mt-20">
        <h1 className="mt-6 font-display text-3xl text-ink">About me</h1>
        <p className="mt-4 max-w-[62ch] font-display text-lg leading-relaxed">
          I'm a second year Computer Science major at Northeastern University.
          I'm originally from Irvine, CA where I first fell in love with programming
          through{" "}
          <Link href="https://soapturtles.itch.io/towers-pass">
            game development
          </Link>{" "}
          with Unity 2D. I enjoy using my skills and knowledge to create
          impactful software that can benefit the world. Learn more about me on here!
        </p>
      </section>

      <section className="mt-16 border-t border-rule pt-8">
        <h1 className="mt-6 font-display text-3xl text-ink">Projects</h1>
        <div className="mt-6">
          <article className="py-8 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-8">
            <div className="flex items-center justify-center">
              <img
                src="https://raw.githubusercontent.com/richard-feng07/sunsets/8dbefd08b809dd2b535dcf65ff9bf9d2823dda3c/public/sunset.svg"
                alt="Sunsetology sunset illustration"
                className="h-28 w-28 object-contain"
              />
            </div>
            <div className="mt-4 sm:mt-0">
              <h2 className="font-display text-xl text-ink">
                <Link href="https://github.com/richard-feng07/sunsets">
                  Sunsetology
                </Link>
              </h2>
              <p className="mt-3 max-w-[62ch] font-display text-[1.0625rem] leading-relaxed">
                A web app that predicts sunset quality for any location using live
                weather forecasts. Check me out{" "}
                <Link href="https://sunsetology-smoky.vercel.app/">
                  here!
                </Link>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-16 border-t border-rule pt-8">
        <div className="grid gap-14 sm:grid-cols-3 sm:gap-10 lg:gap-16">
          <div className="border-l-2 border-gunmetal pl-5 transition-colors duration-200 hover:border-terracotta hover:bg-terracotta/10">
            <SectionHeading>Currently reading</SectionHeading>
            <ul className="mt-5 space-y-2 font-display text-lg leading-snug text-ink">
              <MessageItem
                id="light-bringer"
                label="Light Bringer"
                message="HAIL REAPER!"
                activeMessage={activeMessage}
                setActiveMessage={setActiveMessage}
              />
              <li>Babel</li>
              <li>Local Woman Missing</li>
              <li>The Will of the Many</li>
            </ul>
          </div>

          <div className="border-l-2 border-gunmetal pl-5 transition-colors duration-200 hover:border-terracotta hover:bg-terracotta/10">
            <SectionHeading>Currently listening to</SectionHeading>
            <ul className="mt-5 space-y-2 font-display text-lg leading-snug text-ink">
              <li>The 1975</li>
              <MessageItem
                id="steve-lacy"
                label="Steve Lacy"
                message="Going to his concert on 10/13!"
                activeMessage={activeMessage}
                setActiveMessage={setActiveMessage}
              />
              <li>Choker</li>
              <li>Blood Orange</li>
              <MessageItem
                id="asap-rocky"
                label="A$AP Rocky"
                message="Went to his concert on 6/27!"
                activeMessage={activeMessage}
                setActiveMessage={setActiveMessage}
              />
            </ul>
          </div>

          <div className="border-l-2 border-muted pl-5 transition-colors duration-200 hover:border-terracotta hover:bg-terracotta/10">
            <SectionHeading>Currently doing</SectionHeading>
            <ul className="mt-5 space-y-2 font-display text-lg leading-snug text-ink">
              <li>Pickleball</li>
              <li>Hiking</li>
              <li>Rock climbing</li>
              <MessageItem
                id="movies"
                label="Movies"
                message="So excited for Dune 3"
                activeMessage={activeMessage}
                setActiveMessage={setActiveMessage}
              />
              <li>Cooking</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Entry } from "./types";
import Link from "./components/Link";

export const LINKS = {
  email: "mailto:richardfeng43@gmail.com",
  github: "https://github.com/richard-feng07",
  linkedin: "https://www.linkedin.com/in/richardfeng07/",
};

export const WORK: Entry[] = [
  {
    role: "Software Developer",
    org: "Sandbox at Northeastern",
    href: "https://sandboxnu.com/",
    image: "https://avatars.githubusercontent.com/u/45272992?s=200&v=4",
    imageAlt: "Sandbox icon",
    period: "2026 —",
    body: (
      <>
        I'm on the team building <Link href="https://sarge-nu.vercel.app/">SARGE</Link>
        , a web app combining both code assessments and applicant review all onto one
        platform. I work with 5 other developers and 4 designers.
      </>
    ),
  },
  {
    role: "Software Engineer",
    org: "Northeastern Electric Racing",
    href: "https://finishlinebyner.com/",
    image: "https://avatars.githubusercontent.com/u/68670151?v=4",
    imageAlt: "FinishLine icon",
    period: "2025 —",
    body: (
      <>
        <Link href="https://github.com/Northeastern-Electric-Racing/FinishLine">
          FinishLine
        </Link>{" "}
        is the open-source platform our 200-person team runs on. I was a part of the
        guest view overhaul team, and now I'm on the maintenance team where we routinely
        make bug fixes.
      </>
    ),
  },
  {
    role: "Tutor and Teaching Assistant",
    org: "Khoury College of Computer Sciences",
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQF531vNuZm4hw/company-logo_200_200/B4EZs3cqW9GoAI-/0/1766161819424/northeastern_university_logo?e=1792627200&v=beta&t=_tvlD58R_mPG9bO5eZl9fK02g7aiALXF5dCmmjBMcq8",
    imageAlt: "Northeastern icon",
    period: "2026 —",
    body: (
      <>
        Tutored students CS 2100 and served as a TA for Discrete Structures. Helped students
        prepare for codewalks and understand OOP principles.
      </>
    ),
  },
];

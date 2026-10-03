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
    image: "https://scontent-bos5-1.xx.fbcdn.net/v/t39.30808-6/481285234_1029613052533887_383330100991459060_n.jpg?stp=dst-jpg_tt6&cstp=mx400x400&ctp=s400x400&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bTVvl-sEiykQ7kNvwESq4Nl&_nc_oc=AdqBQcaadEVOjRf_eyOq3Fj_i496QB3pGP8K0Bj2Csi2iDsuh8HD3yoWUOuGSDBZ7N3_QJyBRq6B3ck8JBsyPWTw&_nc_zt=23&_nc_ht=scontent-bos5-1.xx&_nc_gid=ZuBcFGhnOu1Ilso6FJiQkg&_nc_ss=7b2a8&oh=00_AQM1po5bqifn9NuORsiFGB6qiySwL8E7BEWOU_0RFOMSjQ&oe=6AC0C8F0",
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

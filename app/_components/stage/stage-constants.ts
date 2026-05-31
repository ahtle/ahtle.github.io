import type { StageDetail } from "@/app/_components/stage/stage-display";
import { type StageListItem } from "@/app/_components/stage/stage-list";

import BDBwPng from "@/public/images/bd-bw.png";
import BDPng from "@/public/images/bd.png";
import SJSUBwPng from "@/public/images/sjsu-bw.png";
import SJSUPng from "@/public/images/sjsu.png";
import SparkBwPng from "@/public/images/spark-bw.png";
import SparkPng from "@/public/images/spark.png";
import StanfordBwPng from "@/public/images/stanford-bw.png";
import StanfordPng from "@/public/images/stanford.png";
import ThinkfulBwPng from "@/public/images/thinkful-bw.png";
import ThinkfulPng from "@/public/images/thinkful.png";

export const STAGE_ENUMS = {
  SPARK: "SPARK",
  STANFORD: "STANFORD",
  BD: "BD",
  THINKFUL: "THINKFUL",
  SJSU: "SJSU",
} as const;

export type Stage = (typeof STAGE_ENUMS)[keyof typeof STAGE_ENUMS];

export const STAGE_ITEMS: StageListItem<Stage>[] = [
  {
    id: STAGE_ENUMS.SPARK,
    colorImage: SparkPng,
    bwImage: SparkBwPng,
    alt: "Spark",
  },
  {
    id: STAGE_ENUMS.STANFORD,
    colorImage: StanfordPng,
    bwImage: StanfordBwPng,
    alt: "Stanford",
  },
  {
    id: STAGE_ENUMS.BD,
    colorImage: BDPng,
    bwImage: BDBwPng,
    alt: "Becton Dickenson Biosciences",
  },
  {
    id: STAGE_ENUMS.THINKFUL,
    colorImage: ThinkfulPng,
    bwImage: ThinkfulBwPng,
    alt: "Thinkful",
  },
  {
    id: STAGE_ENUMS.SJSU,
    colorImage: SJSUPng,
    bwImage: SJSUBwPng,
    alt: "San Jose State University",
  },
];

export const STAGE_DETAILS: Record<Stage, StageDetail> = {
  [STAGE_ENUMS.SPARK]: {
    name: "SPARK ADVISORS",
    period: "2021 - 2026",
    role: "SOFTWARE ENGINEER II.",
    description:
      "SECOND ENGINEER AT HEALTHCARE STARTUP. FULL-STACK SKILLSETS WITH EMPHASIS IN VUE.JS AND PYTHON. SEES THE TECH TEAM GROW FROM 2 TO 30+.",
  },
  [STAGE_ENUMS.STANFORD]: {
    name: "STANFORD UNIVERSITY",
    period: "2017 - 2021",
    role: "WEB DEVELOPER",
    description:
      "for the Department of Medicine. Create websites and web apps in support of faculty and staffs. Web apps ranges from financial reports, hiring portal, and operational systems. Full-stack skillsets with emphasis in JavaScript.",
  },
  [STAGE_ENUMS.BD]: {
    name: "BECTON DICKINSON BIOSCIENCES",
    period: "2014 - 2017",
    role: "DATA SPECIALIST.",
    description:
      "Three plus years of increasing responsibility in a technical role, working on a customer centric, eCommerce web team. Responsible for maintaining the website’s catalog and provide supports for internal and external customers.",
  },
  [STAGE_ENUMS.THINKFUL]: {
    name: "THINKFUL",
    period: "2017",
    role: "WEB DEVELOPMENT BOOTCAMP.",
    description:
      "Front-end technical training in: HTML, CSS, JavaScript/ES6, JQuery, React.js with Redux architecture, AJAX, and Responsive Design. Server-side technical training in: Node.js, REST APIs, MongoDB, Express framework, unit testing with Mocha and Continuous Integration.",
  },
  [STAGE_ENUMS.SJSU]: {
    name: "SAN JOSE STATE UNIVERSITY",
    period: "2009 - 2013",
    role: "B.S. SYSTEM PHYSIOLOGY.",
    description: "with a minor in Chemistry.",
  },
};

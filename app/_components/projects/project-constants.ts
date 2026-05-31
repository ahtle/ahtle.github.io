import type { StaticImageData } from "next/image";

import AemPng from "@/public/images/aem.png";
import AvSitePng from "@/public/images/av-site.png";
import DomPng from "@/public/images/dom.png";
import DomleanfaPng from "@/public/images/domleanfa.png";
import ImageClassificationPng from "@/public/images/image-classification.png";
import MedcalculatorPng from "@/public/images/medcalculator.png";
import NextjsPng from "@/public/images/nextjs.png";
import ObjectRecognitionPng from "@/public/images/object-recognition.png";
import Racetoacure1Png from "@/public/images/racetoacure-1.png";
import Racetoacure2Png from "@/public/images/racetoacure-2.png";
import T32grant01Png from "@/public/images/t32grant-01.png";
import T32grant02Png from "@/public/images/t32grant-02.png";
import TfLogoPng from "@/public/images/tf-logo.png";
import TypescriptPng from "@/public/images/typescript.png";
import ZoomFamilyFeudPng from "@/public/images/zoom-family-feud.png";

export interface ProjectImage {
  thumb: StaticImageData | string;
  src: StaticImageData | string;
  caption: string;
}

export interface Project {
  status: string;
  title: string;
  description: string;
  skills: string[];
  additionalSkills?: string[];
  github?: string;
  site: string;
  images?: ProjectImage[];
}

export const PROJECTS: Project[] = [
  {
    status: "Personal",
    title: "React x Tensorflow Practice",
    description:
      "implement tensorflow's Object Detection and Image Classification models.",
    skills: ["react"],
    additionalSkills: ["tensorflow", "typescript"],
    github: "https://github.com/ahtle/tensorflow-practice",
    site: "https://ahtle.github.io/tensorflow-practice",
    images: [
      {
        thumb: ObjectRecognitionPng,
        src: ObjectRecognitionPng,
        caption: "<h4>I am a person!</h4>",
      },
      {
        thumb: ImageClassificationPng,
        src: ImageClassificationPng,
        caption: "<h4>So that's what it is!</h4>",
      },
    ],
  },
  {
    status: "Professional",
    title: "stanford COVID Vaccine tracker",
    description:
      "track the development of vaccines and theraputics for COVID-19. Uses clinicaltrials.org, pubmed, and drugbank.ca.",
    skills: ["vuejs", "laravel", "database"],
    site: "",
    images: [
      {
        thumb: Racetoacure1Png,
        src: Racetoacure1Png,
        caption: "<h4>Overview</h4>",
      },
      {
        thumb: Racetoacure2Png,
        src: Racetoacure2Png,
        caption: "<h4>Categorized data</h4>",
      },
    ],
  },
  {
    status: "Freelance",
    title: "abrahamverghese.org",
    description:
      "wordpress site for a best-selling author. Uses CDN and caching to optimize speed. SEO with plugin and Google Search Console.",
    skills: ["wordpress"],
    github: "",
    site: "https://abrahamverghese.org",
    images: [
      {
        thumb: AvSitePng,
        src: AvSitePng,
        caption: "<h4>buy his books!</h4>",
      },
    ],
  },
  {
    status: "Personal",
    title: "Zoom Family Feud",
    description:
      "only version of the game family feud. Practice for Next.js, React Hooks, and Typescript.",
    skills: ["react"],
    additionalSkills: ["nextjs", "typescript"],
    github: "https://github.com/ahtle/zoom-family-feud",
    site: "https://zoom-family-feud.vercel.app/",
    images: [
      {
        thumb: ZoomFamilyFeudPng,
        src: ZoomFamilyFeudPng,
        caption: "<h4>Survey says!</h4>",
      },
    ],
  },
  {
    status: "Professional",
    title: "t32 grant application",
    description:
      "tool to facilitate grant applications. Aggregate work and pulication of mentors and mentees to produce documents for NIH grants.",
    site: "",
    skills: ["vuejs", "laravel", "database"],
    github: "https://github.com/ahtle/t32grant-docs",
    images: [
      {
        thumb: T32grant01Png,
        src: T32grant01Png,
        caption: "<h4>UI follow NIH submission requirements</h4>",
      },
      {
        thumb: T32grant02Png,
        src: T32grant02Png,
        caption: "<h4>pull publication data from pubmed</h4>",
      },
    ],
  },
  {
    status: "Professional",
    title: "stanford hiring portal",
    description:
      "public faculty hiring site. internal applicant management/interview/status system",
    site: "",
    github: "https://github.com/ahtle/domleanfa-docs/blob/main/README.md",
    skills: ["vuejs", "laravel", "database"],
    images: [
      {
        thumb: DomleanfaPng,
        src: DomleanfaPng,
        caption: "<h4>Public facing portal</h4>",
      },
    ],
  },
  {
    status: "Professional",
    title: "stanford department of medicine site",
    description:
      "Provide support and maintance for the largest department within the school of medicine. Also train new user in using the CMS; this site uses Adobe Experience Manager.",
    site: "https://medicine.stanford.edu/",
    skills: [],
    additionalSkills: ["aem"],
    images: [
      {
        thumb: DomPng,
        src: DomPng,
        caption: "<h4>Homepage</h4>",
      },
    ],
  },
  {
    status: "Personal",
    title: "founding speeches [not maintaining]",
    description:
      "Easily browse and view transcript of famous speeches. Use Watson Personality Insight to analyze the transcript based on: Big Five personality, Needs, and Values.",
    skills: ["react", "database"],
    github: "https://github.com/ahtle/founding-speeches",
    site: "https://founding-speeches.herokuapp.com/",
    images: [
      {
        thumb:
          "https://github.com/ahtle/founding-speeches/raw/master/public/img/watson-screenshot.png",
        src: "https://github.com/ahtle/founding-speeches/raw/master/public/img/watson-screenshot.png",
        caption: "<h4>IBM Watson analysis</h4>",
      },
      {
        thumb:
          "https://github.com/ahtle/founding-speeches/raw/master/public/img/screenshot.jpg",
        src: "https://github.com/ahtle/founding-speeches/raw/master/public/img/screenshot.jpg",
        caption: "<h4>Dashboard</h4>",
      },
    ],
  },
  {
    status: "Professional",
    title: "Medical Calculators",
    description:
      "The calculators presented in these pages are created for healthcare providers who are familiar with the diagnosis and treatment of patients with liver disease.",
    skills: ["vuejs"],
    site: "",
    images: [
      {
        thumb: MedcalculatorPng,
        src: MedcalculatorPng,
        caption: "<h4>Med calculator</h4>",
      },
    ],
  },
];

export const ADDITIONAL_SKILL_IMAGES: Record<string, StaticImageData> = {
  aem: AemPng,
  nextjs: NextjsPng,
  tensorflow: TfLogoPng,
  typescript: TypescriptPng,
};

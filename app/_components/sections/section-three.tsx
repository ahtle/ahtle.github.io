"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function SectionThree() {
  const [header, setHeader] = useState("C$@SDV :}vC )#LF");
  const [isUpdateChart, setIsUpdateChart] = useState(false);
  const isDecodingRef = useRef(false);

  const decodeHeader = useCallback(() => {
    if (isDecodingRef.current || isUpdateChart) return;
    isDecodingRef.current = true;
    setTimeout(() => {
      setHeader("CH+4Zh QV>< *HNQ$");
    }, 100);
    setTimeout(() => {
      setHeader("CHO4ne 8cse as39%");
    }, 200);
    setTimeout(() => {
      setHeader("CHOO]Z MBI? !9%c3");
    }, 300);
    setTimeout(() => {
      setHeader("CHOOSh 6ol zz4my");
    }, 400);
    setTimeout(() => {
      setHeader("CHOOSE vlo6 &2sdo");
    }, 500);
    setTimeout(() => {
      setHeader("CHOOSE Y=7+ GC3t1");
    }, 600);
    setTimeout(() => {
      setHeader("CHOOSE YO11 &0ytn");
    }, 700);
    setTimeout(() => {
      setHeader("CHOOSE YOUh .39~h");
    }, 800);
    setTimeout(() => {
      setHeader("CHOOSE YOUR mvz|g3");
    }, 900);
    setTimeout(() => {
      setHeader("CHOOSE YOUR C2sdo");
    }, 1000);
    setTimeout(() => {
      setHeader("CHOOSE YOUR COv4$");
    }, 1100);
    setTimeout(() => {
      setHeader("CHOOSE YOUR CODk2");
    }, 1200);
    setTimeout(() => {
      setHeader("CHOOSE YOUR CODE/");
    }, 1300);
    setTimeout(() => {
      setHeader("CHOOSE YOUR CODER");
      setIsUpdateChart(true);
      isDecodingRef.current = false;
    }, 1400);
  }, [isUpdateChart]);

  useEffect(() => {
    const onScroll = (): void => {
      const element = document.getElementById("section-three");
      if (!element) return;
      const rect = element.getBoundingClientRect();
      if (rect.top <= 800) {
        decodeHeader();
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [decodeHeader]);

  return (
    <section id="section-three" className="section-container">
      <h3 className="section-header">{header}</h3>
    </section>
  );
}

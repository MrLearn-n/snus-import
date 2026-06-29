"use client";

import { useEffect, type PropsWithChildren } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function GSAPWrapper({ children }: PropsWithChildren) {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo({ top: 0 });
    };
  }, []);

  return children;
}

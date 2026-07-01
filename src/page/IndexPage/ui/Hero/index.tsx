"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { buildImagePath } from "@/shared/lib/buildImagePath";
import { useLanguage } from "@/shared/hooks/useLanguage";

import { FEATURED_PRODUCT, FLOAT_ANIM, FLOAT_PRODUCTS } from "./constants";

import "./style.scss";

export default function Hero() {
  const { t } = useLanguage();

  const containerRef = useRef<HTMLElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  const f1 = useRef<HTMLDivElement>(null);
  const f2 = useRef<HTMLDivElement>(null);
  const f3 = useRef<HTMLDivElement>(null);
  const f4 = useRef<HTMLDivElement>(null);

  const floatRefs = [f1, f2, f3, f4];

  useGSAP(
    () => {
      gsap.set(featuredRef.current, { rotation: -3 });
      floatRefs.forEach((ref, i) => {
        gsap.set(ref.current, { rotation: FLOAT_ANIM[i].rotation });
      });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero__eyebrow", { x: -28, opacity: 0, duration: 0.6 })
        .from(
          ".hero__title",
          { y: 60, opacity: 0, duration: 0.75, ease: "power3.out" },
          "-=0.15",
        )
        .from(
          ".hero__subtitle",
          { y: 20, opacity: 0, duration: 0.65 },
          "-=0.35",
        )
        .from(
          ".hero__cta",
          { y: 20, opacity: 0, duration: 0.55, ease: "back.out(1.8)" },
          "-=0.4",
        )
        .from(
          featuredRef.current,
          {
            x: 60,
            opacity: 0,
            scale: 0.8,
            duration: 1.1,
            ease: "back.out(1.4)",
          },
          0,
        )
        .from(
          floatRefs.map((r) => r.current),
          {
            x: -55,
            opacity: 0,
            scale: 0.72,
            duration: 1.05,
            stagger: 0.14,
            ease: "back.out(1.15)",
          },
          0.25,
        )
        .from(".hero__scroll", { opacity: 0, duration: 0.5 }, "-=0.25")
        .add(() => {
          if (featuredRef.current) {
            gsap.to(featuredRef.current, {
              y: -28,
              duration: 3.6,
              delay: 0.2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
          floatRefs.forEach((ref, i) => {
            if (!ref.current) return;
            gsap.to(ref.current, {
              y: FLOAT_ANIM[i].y,
              duration: FLOAT_ANIM[i].duration,
              delay: FLOAT_ANIM[i].delay,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          });
        });

      gsap.to(".hero__glow--1", {
        scale: 1.2,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center",
      });
      gsap.to(".hero__glow--2", {
        scale: 1.25,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center",
        delay: 3.5,
      });

    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="hero" id="hero">
      <div className="hero__bg" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__content">
        <div className="hero__row">
          <div className="hero__text">
            <span className="hero__eyebrow">{t.hero.eyebrow}</span>

            <h1 className="hero__title">
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </h1>

            <p className="hero__subtitle">{t.hero.subtitle}</p>

            <a href="#catalog" className="hero__cta">
              {t.hero.cta}
            </a>
          </div>

          <div ref={featuredRef} className="hero__featured">
            <Image
              src={buildImagePath(
                FEATURED_PRODUCT.folder,
                FEATURED_PRODUCT.file,
              )}
              alt={FEATURED_PRODUCT.alt}
              fill
              sizes="(max-width: 567px) 0px, (max-width: 768px) 240px, 300px"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        <div className="hero__images">
          {FLOAT_PRODUCTS.map((product, i) => (
            <div
              key={product.file}
              ref={floatRefs[i]}
              className={`hero__image-wrap hero__image-wrap--${i + 1}`}
            >
              <Image
                src={buildImagePath(product.folder, product.file)}
                alt={product.alt}
                fill
                sizes="(max-width: 1024px) 132px, (max-width: 1280px) 164px, 205px"
                style={{ objectFit: "contain" }}
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll">
        <span className="hero__scroll-label">{t.hero.scroll}</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

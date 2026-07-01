"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";

import "./style.scss";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__meta">
            <span className="about__tag">{t.about.tag}</span>
          </div>

          <div className="about__body">
            <p className="about__lead">{t.about.lead}</p>
            <p className="about__text">{t.about.text}</p>
          </div>
        </div>

        <div className="about__divider" />
      </div>
    </section>
  );
}

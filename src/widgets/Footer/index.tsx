"use client";

import { useLanguage } from "@/shared/hooks/useLanguage";

import "./styles.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              SNUS<span>IMPORT</span>
            </a>
            <p className="footer__tagline">{t.footer.tagline}</p>
          </div>

          <nav className="footer__nav">
            <a href="#catalog" className="footer__link">{t.nav.catalog}</a>
            <a href="#about" className="footer__link">{t.nav.about}</a>
            <a href="#metrics" className="footer__link">{t.nav.metrics}</a>
          </nav>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {year} SNUS IMPORT. {t.footer.rights}</span>
          <span className="footer__disclaimer">{t.footer.disclaimer}</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/shared/hooks/useLanguage";
import type { Lang } from "@/shared/lib/types";
import BurgerMenu from "@/shared/ui/BurgerMenu";

import "./style.scss";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const NAV_ITEMS = [
    { href: "#catalog", label: t.nav.catalog },
    { href: "#about", label: t.nav.about },
    { href: "#metrics", label: t.nav.metrics },
  ] as Record<string, string>[];

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        <div className="container header__inner">
          <a href="#hero" className="header__logo">
            SNUS<span>IMPORT</span>
          </a>

          <div className="header__right">
            <nav className="header__nav">
              {NAV_ITEMS.map((link) => (
                <a key={link.href} href={link.href} className="header__link">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="header__actions">
              <div className="header__lang">
                {(["RU", "BY"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    type="button"
                    className={`header__lang-btn${lang === l ? " header__lang-btn--active" : ""}`}
                    onClick={() => setLang(l)}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className={`header__burger ${open ? "header__burger--open" : ""}`}
                onClick={() => setOpen((value) => !value)}
                aria-label="Меню"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <BurgerMenu isOpen={open} onOpen={setOpen} items={NAV_ITEMS} />
    </>
  );
}

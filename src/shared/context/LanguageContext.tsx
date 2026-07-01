"use client";

import { createContext, useState, useEffect, type PropsWithChildren } from "react";

import { translations, type Translations } from "@/shared/lib/i18n";
import type { Lang } from "@/shared/lib/types";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: PropsWithChildren) {
  const [lang, setLang] = useState<Lang>("BY");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  const handleSetLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLang(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}


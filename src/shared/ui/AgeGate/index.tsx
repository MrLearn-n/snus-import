"use client";

import { useState, useEffect } from "react";

import { useLanguage } from "@/shared/hooks/useLanguage";

import "./style.scss";

const STORAGE_KEY = "age_confirmed";

export default function AgeGate() {
  const [visible, setVisible] = useState(false);
  const [denied, setDenied] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  const handleDeny = () => {
    setDenied(true);
  };

  if (!visible) return null;

  return (
    <div className="age-gate">
      <div className="age-gate__card">
        <a href="#hero" className="age-gate__logo">
          SNUS<span>IMPORT</span>
        </a>

        <div className="age-gate__badge">{t.ageGate.label}</div>

        {denied ? (
          <p className="age-gate__denied">{t.ageGate.denied}</p>
        ) : (
          <>
            <h2 className="age-gate__title">{t.ageGate.title}</h2>
            <p className="age-gate__text">{t.ageGate.text}</p>

            <div className="age-gate__actions">
              <button
                type="button"
                className="age-gate__btn age-gate__btn--confirm"
                onClick={handleConfirm}
              >
                {t.ageGate.confirm}
              </button>
              <button
                type="button"
                className="age-gate__btn age-gate__btn--deny"
                onClick={handleDeny}
              >
                {t.ageGate.deny}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

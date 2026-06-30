import type { Dispatch, SetStateAction } from "react";

import type { Lang } from "@/shared/lib/i18n";

interface IProps {
    lang: Lang,
    isOpen: boolean,
    onOpen: Dispatch<SetStateAction<boolean>>
    onLang: (lang: Lang) => void
    items: Record<string, string>[],
}

export default function BurgerMenu({ items, isOpen, onOpen, onLang, lang }: IProps) {
    return (
        <div className={`header__mobile ${isOpen ? "header__mobile--open" : ""}`}>
            {items.map((link) => (
                <a key={link.href} href={link.href} className="header__mobile-link" onClick={() => onOpen(false)}>
                    {link.label}
                </a>
            ))}
            <div className="header__lang header__lang--mobile">
                {(["RU", "BY"] as Lang[]).map((l) => (
                    <button
                        key={l}
                        type="button"
                        className={`header__lang-btn${lang === l ? " header__lang-btn--active" : ""}`}
                        onClick={() => onLang(l)}
                    >
                        {l}
                    </button>
                ))}
            </div>
        </div>
    )
}
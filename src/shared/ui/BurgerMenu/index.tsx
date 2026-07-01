import type { Dispatch, SetStateAction } from "react";

interface IProps {
  isOpen: boolean;
  onOpen: Dispatch<SetStateAction<boolean>>;
  items: Record<string, string>[];
}

export default function BurgerMenu({ items, isOpen, onOpen }: IProps) {
  return (
    <div className={`header__mobile ${isOpen ? "header__mobile--open" : ""}`}>
      {items.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="header__mobile-link"
          onClick={() => onOpen(false)}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

import { useRef, useState } from "react";

export const useOutside = (state: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(state);
  const navRef = useRef<HTMLElement>(null);

  const handleClickOutside = (evt: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(evt.target as Node)) {
      setIsOpen(false);
    }
  };

  useState(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  });

  return { navRef, isOpen, setIsOpen };
};

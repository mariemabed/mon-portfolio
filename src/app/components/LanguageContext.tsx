import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
}>({ lang: "fr", toggleLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const toggleLang = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
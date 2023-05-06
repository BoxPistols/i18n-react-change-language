import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LangRadio from "./LangRadio";
import LangSelect from "./LangSelect";
import ToggleLanguage from "./ToggleLanguage";

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ja");

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setLanguage(lang);
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  return (
    <>
      <div className="container">
        <h1 className="head_1">Choose</h1>
        <p>String: {t("login")}</p>

        <ToggleLanguage language={language} setLanguage={setLanguage} />

        <form>
          <LangSelect language={language} handleLangChange={handleLangChange} />
          <LangRadio language={language} handleLangChange={handleLangChange} />
        </form>
      </div>
    </>
  );
};

export default ChangeLanguage;

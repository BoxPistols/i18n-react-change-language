// import React, { useEffect } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

const OtherPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <hr />
      <p>by OtherPage: {t("login")}</p>
    </>
  );
};

export default OtherPage;

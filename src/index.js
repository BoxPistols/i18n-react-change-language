import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import "asagiri";
import "./styles.css";

import ChangeLanguage from "./ChangeLanguage";
import OtherPage from "./OtherPage";

const App = () => {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <ChangeLanguage />
        <OtherPage />
      </div>
    </Suspense>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Accessibility } from "accessibility";
import i18n from "./translator";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener(
  "load",
  function () {
    new Accessibility({
      icon: {
        circular: true,
        img: "accessible",
        useEmojis: false,
        backgroundColor: "rgba(0, 188, 203, 0.7)",
      },
      speechToTextLang: i18n.dir() === "rtl" ? "he" : "en-US",
      labels: {
        bigCursor: i18n.t("bigCursor"),
        closeTitle: i18n.t("closeTitle"),
        decreaseLineHeight: i18n.t("decreaseLineHeight"),
        resetTitle: i18n.t("resetTitle"),
        menuTitle: i18n.t("menuTitle"),
        increaseLineHeight: i18n.t("increaseLineHeight"),
        speechToText: i18n.t("speechToText"),
        increaseText: i18n.t("increaseText"),
        decreaseText: i18n.t("decreaseText"),
        invertColors: i18n.t("invertColors"),
        increaseTextSpacing: i18n.t("increaseTextSpacing"),
        decreaseTextSpacing: i18n.t("decreaseTextSpacing"),
        grayHues: i18n.t("grayHues"),
        disableAnimations: i18n.t("disableAnimations"),
        readingGuide: i18n.t("readingGuide"),
        screenReader: i18n.t("screenReader"),
        textToSpeech: i18n.t("textToSpeech"),
        underlineLinks: i18n.t("underlineLinks"),
      },
      guide: {
        cBackground: "rgba(0, 188, 203, 0.1)",
        cBorder: "#000000",
        height: "100px",
      },
      textToSpeechLang: "en-US",
      menu: {
        fontFamily: "sans-serif",
        dimensions: {
          width: {
            size: 100,
            units: "px",
          },
          height: {
            size: 600,
            units: "px",
          },
        },
      },
      session: {
        persistent: true,
      },
    });
  },
  false
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

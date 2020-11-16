
import React from "react";
import ReactDOM from "react-dom";
import { WebtrekkSmartPixelReact } from "@webtrekk-smart-pixel/react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

 
WebtrekkSmartPixelReact.init({
     trackId: "876936451222772",
     trackDomain: "danielebootcampgmbh01.wt-eu02.net",
     // domain: "sub.domain.tld",
     cookie: "1"
});


ReactDOM.render(
  <React.StrictMode>
    <App pixel={WebtrekkSmartPixelReact} someProp="a random value"></App>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

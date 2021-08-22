import ReactDOM from "react-dom";
import Router from "./routers/routers";
import { HashRouter } from "react-router-dom";
import "./styles/style.scss";

ReactDOM.render(
  <HashRouter>
    <Router />
  </HashRouter>,
  document.getElementById("root")
);

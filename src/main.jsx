import ReactDOM from "react-dom/client";
import App from "./Routes";
import "./index.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Theme accentColor="lime" appearance="dark">
    <App />
  </Theme>
);

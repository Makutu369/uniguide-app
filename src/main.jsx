import ReactDOM from "react-dom/client";
import router from "./Routes";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <Theme accentColor="indigo" appearance="dark">
      <RouterProvider router={router} />
    </Theme>
  </NextUIProvider>
);

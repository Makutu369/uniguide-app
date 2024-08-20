import ReactDOM from "react-dom/client";
import router from "./Routes";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <Theme accentColor="lime" appearance="dark">
      <RouterProvider router={router} />
    </Theme>
  </NextUIProvider>
);

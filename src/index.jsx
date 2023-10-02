import React from "react";
import { createRoot } from "react-dom/client";
import { useGLTF } from "@react-three/drei";
import App from "./App";

const rootElement = document.getElementById("headphones");
const modelSrc = rootElement.dataset.model || null;
const envMapSrc = rootElement.dataset.env || null;
if (modelSrc) {
  const root = createRoot(rootElement);
  root.render(<App model={modelSrc} env={envMapSrc} />);
  useGLTF.preload(modelSrc);
}

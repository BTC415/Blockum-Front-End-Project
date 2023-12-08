// utils/useWindowSize.js

import React, { useEffect, useState } from "react";

export default function useWindowSize() {
  const [win, setWin] = useState(null);
  useEffect(() => {
    setWin(window);
  }, []);
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : win && window.innerWidth,
    height: isSSR ? 800 : win && window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({
      width: win && window.innerWidth,
      height: win && window.innerHeight,
    });
  }

  React.useEffect(() => {
    win && window.addEventListener("resize", changeWindowSize);

    return () => {
      win && window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

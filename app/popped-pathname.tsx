"use client";

import { useEffect, useState } from "react";

export default function PoppedPathname() {
  let [poppedPathname, setPoppedPathname] = useState("");

  useEffect(() => {
    function handlePopstate() {
      setPoppedPathname(window.location.pathname);
    }

    window.addEventListener("popstate", handlePopstate);

    return () => window.removeEventListener("popstate", handlePopstate);
  });

  return <p>Popped pathname: {poppedPathname}</p>;
}

"use client";

import { startTransition, useEffect, useState } from "react";

export default function PoppedPathnameWithTransition() {
  let [poppedPathname, setPoppedPathname] = useState("");

  useEffect(() => {
    function handlePopstate() {
      startTransition(() => {
        setPoppedPathname(window.location.pathname);
      });
    }

    window.addEventListener("popstate", handlePopstate);

    return () => window.removeEventListener("popstate", handlePopstate);
  });

  return <p>Popped pathname with transition: {poppedPathname}</p>;
}

"use client";

import { LordIcon } from "@lordicon/react";

export default function AnimatedIcon({
  src = "/assets/wired.json",
  size = 60,
  color = "#009CA9",
}) {
  return (
    <LordIcon
      src={src}
      trigger="loop"
      colorize={color}
      style={{
        width: size,
        height: size,
        display: "inline-block",
      }}
    />
  );
}

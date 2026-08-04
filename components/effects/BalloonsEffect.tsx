"use client";

import { useEffect } from "react";
import { balloons, textBalloons } from "balloons-js";

const launchText = (text: string, color: string, delay = 0) =>
  setTimeout(() => {
    textBalloons([
      {
        text,
        fontSize: 120,
        color,
      },
    ]);
  }, delay);

export default function BalloonsEffect() {
  useEffect(() => {
    balloons();

    const happy = launchText("Happy", "#9C7A3F");
    const birthday = launchText("Birthday", "#9C7A3F", 2500);
    const emoji = launchText("🎂💖✨", "#000000", 5000);

    return () => {
      clearTimeout(happy);
      clearTimeout(birthday);
      clearTimeout(emoji);
    };
  }, []);

  return null;
}

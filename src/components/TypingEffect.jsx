import { useState, useEffect } from "react";

const phrases = [
  "Front-End Developer",
  "React Developer",
  "UI Developer",
];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const word = phrases[index];

    const timeout = setTimeout(() => {
      if (forward) {
        setChar((c) => c + 1);
        if (char === word.length) setForward(false);
      } else {
        setChar((c) => c - 1);
        if (char === 0) {
          setForward(true);
          setIndex((i) => (i + 1) % phrases.length);
        }
      }
      setText(word.slice(0, char));
    }, forward ? 140 : 70);

    return () => clearTimeout(timeout);
  }, [char, forward, index]);

  return (
    <span className="text-teal-500 font-semibold text-xl">
      {text}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}

import { useEffect, useState } from "react";

export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1200);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI(i + 1);
          }
        }
      },
      del ? 50 : 90,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="neon-text">
      {text}
      <span className="animate-caret">|</span>
    </span>
  );
}
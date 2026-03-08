import { useState, useEffect, useCallback } from "react";

export function useTypingAnimation(
  text: string,
  speed = 50,
  startDelay = 500,
  enabled = true
) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    setDisplayedText("");
    setIsComplete(false);

    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, startDelay, enabled]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return { displayedText, isComplete, showCursor };
}

export function useStaggeredTyping(
  words: string[],
  speed = 60,
  wordDelay = 200,
  startDelay = 300
) {
  const [visibleWords, setVisibleWords] = useState<number>(0);
  const [currentWordText, setCurrentWordText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (wordIndex >= words.length) {
          clearInterval(interval);
          setIsComplete(true);
          return;
        }

        const currentWord = words[wordIndex];
        charIndex++;

        if (charIndex > currentWord.length) {
          wordIndex++;
          charIndex = 0;
          setVisibleWords(wordIndex);
          setCurrentWordText("");

          // Add word delay
          if (wordIndex < words.length) {
            setTimeout(() => {}, wordDelay);
          }
        } else {
          setCurrentWordText(currentWord.slice(0, charIndex));
        }
      }, speed);

      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [words, speed, wordDelay, startDelay]);

  return { visibleWords, currentWordText, isComplete };
}

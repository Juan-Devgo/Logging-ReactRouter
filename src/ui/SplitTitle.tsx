import SplitText from "../TextAnimations/SplitText/SplitText";
import { useEffect, useState } from "react";
import "./SplitTitle.css";

interface SplitTitleProps {
  text?: string;
  time?: number;
}

function LogingTitle({text, time}: SplitTitleProps) {
  const [key, setkey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setkey(prevKey => prevKey + 1);
    }, time || 5000);
    return () => clearInterval(interval);
  }, [text, time]);

  return (
    <SplitText key={key} text={text || "Descubre Qué Hay Para Ti"} splitType="words, chars" className="text-7xl mb-8"></SplitText>
  );
}

export default LogingTitle;
import SplitText from "../TextAnimations/SplitText/SplitText";
import { useEffect, useState } from "react";

function LoggingTitle() {
  const [key, setkey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setkey(prevKey => prevKey + 1);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <SplitText key={key} text={"Descubre Qué Hay Para Ti"} splitType="words, chars" className="text-7xl mb-8"></SplitText>
  );
}

export default LoggingTitle;
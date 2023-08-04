import { useEffect, useState } from "react";

const useAnimation = (flag: string) => {
  const [animatedFlag, setAnimatedFlag] = useState<string[]>([]);

  useEffect(() => {
    const splittedFlag = flag.split("");
    let idx = 0;
    const interval = setInterval(() => {
      setAnimatedFlag((draft) => [...draft, splittedFlag[idx]]);
      idx++;
      if (idx === flag.length) {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [flag]);
  return animatedFlag;
};

export default useAnimation;

import { useState, useEffect } from "react";

function useTyping(texts) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let ti = 0, ci = 0, del = false, timer;

    function tick() {
      const cur = texts[ti];
      if (del) { setDisplay(cur.substring(0, ci - 1)); ci--; }
      else { setDisplay(cur.substring(0, ci + 1)); ci++; }

      if (!del && ci === cur.length) { del = true; timer = setTimeout(tick, 1500); }
      else if (del && ci === 0) { del = false; ti = (ti + 1) % texts.length; timer = setTimeout(tick, 500); }
      else { timer = setTimeout(tick, del ? 30 : 80); }
    }

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, []);

  return display;
}

export default useTyping;

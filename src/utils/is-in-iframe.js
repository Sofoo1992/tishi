import { useEffect, useState } from 'react';

function isInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export const useInIFrame = () => {
  const [inIframe, setInIframe] = useState(true);

  useEffect(() => {
    setInIframe(isInIframe());
  }, []);

  return inIframe;
};

import useResizeObserver from '@react-hook/resize-observer';
import { RefObject, useLayoutEffect, useState } from 'react';

// type RefObject<HTMLInputElement>

const useSize = (target: RefObject<HTMLElement>) => {
  const [size, setSize] = useState<DOMRect>();

  useLayoutEffect(() => {
    setSize(target.current?.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

export default useSize;

import { useRef, useState, useEffect } from 'react';

function useScrollDetection() {
  const listRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleWheelScroll = (event) => {
      const delta = event.deltaY > 0 ? 50 : -50;
      if (listRef.current) {
        listRef.current.scrollTop += delta;
        event.preventDefault();
      }
    };

    const list = listRef.current;
    if (list) {
      list.addEventListener("wheel", handleWheelScroll);
    }

    return () => {
      if (list) {
        list.removeEventListener("wheel", handleWheelScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const list = listRef.current;
      if (list) {
        const isScrollable = list.scrollHeight > list.clientHeight;
        setIsVisible(isScrollable && list.scrollTop === list.scrollHeight - list.clientHeight);
        setScrollPosition(list.scrollTop);
      }
    };

    const list = listRef.current;
    if (list) {
      list.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (list) {
        list.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return { listRef, isVisible, scrollPosition };
}

export default useScrollDetection;

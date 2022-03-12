import { useEffect, useState, useCallback } from 'react';

const useInfiniteScroll = ({ dataLength, getMoreItems }) => {
  const [containerRef, setContainerRef] = useState(null);
  const [loading, setLoading] = useState(false);
  const onIntersect = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && !loading) {
        observer.unobserve(entry.target);
        await getMoreItems();
      }
    },
    [getMoreItems, loading],
  );

  useEffect(() => {
    if (!containerRef?.current) {
      return false;
    }
    let observer;
    const { current } = containerRef;
    const { length } = current.children;
    const target = length > 5 ? current.children[length - 5] : current.lastChild;
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.4 });
      observer.observe(target);
    }
    return () => observer?.disconnect();
    // eslint-disable-next-line
  }, [dataLength, containerRef]);

  return {
    containerRef,
    setContainerRef,
    loading,
    setLoading,
  };
};

export default useInfiniteScroll;

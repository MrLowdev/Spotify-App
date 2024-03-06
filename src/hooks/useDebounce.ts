import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebounceVale] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceVale(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, value]);
  return debouncedValue;
}

export default useDebounce;

import { useRef, useCallback } from "react";

export function useDebouncedCallback<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
  setIsLoading: (isLoading: boolean) => void 
) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedFn = useCallback(
    (...args: Parameters<T>) => {
      setIsLoading(true);

      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);

        setIsLoading(false);
      }, delay);
    },
    [callback, delay, setIsLoading]
  );

  return debouncedFn;
}

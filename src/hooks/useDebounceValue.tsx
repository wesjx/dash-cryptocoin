import { useCrypto } from "@/context/CryptoContext";
import { useState, useEffect } from "react";

export function useDebouncedValue<T>(value: T, delay: number = 5000) {
const {setIsLoading} = useCrypto()

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        setIsLoading(true)

        const timer = setTimeout(() => {
            setIsLoading(false)
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, delay]);

    return debouncedValue;
}

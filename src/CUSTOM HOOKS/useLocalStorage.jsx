import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [data, setData] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error(`Error parsing localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, data]);

    return [data, setData];
}

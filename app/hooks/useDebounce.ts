import { useEffect, useState } from "react";
const useDebounce = (miliSecond: number,value:string) => {
    const [debounceValue, setDebounceValue] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, miliSecond);
        return () => clearTimeout(timer);
    }, [miliSecond,value]);
    return { debounceValue };
};
export default useDebounce;
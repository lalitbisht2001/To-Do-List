import { useState } from "react";

const useTime = () => {
    let curr = new Date().toLocaleTimeString();
    const [time, setTime] = useState(curr);
    function Localtime() {
        curr = new Date().toLocaleTimeString();
        setTime(curr);
    }
    setInterval(() => {
        Localtime();
    }, 1000);

    return time;
}

export default useTime;
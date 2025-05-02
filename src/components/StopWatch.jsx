import { useState } from "react";

export default function StopWatch(){

    const [time, setTime] = useState(0);

    let minute = 0;
    let second = 0;

    return (
        <div>
            <h1>Stopwatch</h1>
            <h6>`Time: ${minute}:${second}`${time}</h6>
            <button>Start</button>
            <button>Reset</button>
        </div>
    );
}
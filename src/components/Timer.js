import React, {useEffect, useRef, useState} from 'react';

const minToMillis = (min) => min*1000*60
const formatTime = (time) => time < 10 ? `0${time}` : time;

const Timer = () => {
    const minutes = 5
    const [millis, setMillis] = useState(minToMillis(minutes));

    const interval = useRef(null)

    const minute = Math.floor(millis/1000/60) % 60;
    const seconds = Math.floor(millis/1000) % 60;

    const countDown = () => {
        setMillis((time) => {
            if(time === 0) {
                clearInterval(interval.current)
                return time
            }
            return time - 1000
        })
    };

    useEffect(() => {
        interval.current = setInterval(countDown, 1000)
    }, [])



    useEffect(() => {
        setMillis(minToMillis(minutes));
        return () => clearInterval(interval.current)
    },[minutes])


    return (
        <div>
            {formatTime(minute)}:{formatTime(seconds)}
        </div>
    );
};

export {Timer};

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MainClock() {
    const navigate = useNavigate();

    const [hour, setHour] = useState<string>('');
    const [minute, setMinute] = useState<string>('');
    const [period, setPeriod] = useState<'AM' | 'PM'>('AM');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            let h = now.getHours();
            const m = now.getMinutes();
            const ampm = h >= 12 ? 'PM' : 'AM';

            h = h % 12;
            h = h ? h : 12; 

            setHour(h.toString().padStart(2, '0'));
            setMinute(m.toString().padStart(2, '0'));
            setPeriod(ampm);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

return (
    <div className="relative h-full w-full">
        {/* Time display */}
        <div className="overflow-hidden h-[100%] w-full flex items-center justify-center rounded-2xl text-white 
                px-4 gap-x-6 text-[120px]
                md:px-4 md:gap-x-2 md:text-[150px]
                lg:px-6 lg:gap-x-4 lg:text-[190px]">

            <div className="w-1/2 flex items-center justify-center">{hour}</div>

            <div className="bg-white/40 h-[100%] w-1"></div>

            <div className="w-1/2 flex items-center justify-center">{minute}</div>
        </div>

        <div className="absolute bottom-3 left-4 md:bottom-6 md:left-6 flex flex-col items-end z-10 text-white text-lg">
            <div className="text-lg md:text-xl lg:text-2xl">{period}</div>
        </div>

        <div className="absolute bottom-3 right-4 md:bottom-6 md:right-6 flex flex-col items-end z-10 text-white text-lg">
            <button onClick={() => navigate("/clockgrad")} className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                </svg>
            </button>
        </div>
    </div>
);
}

export default MainClock;

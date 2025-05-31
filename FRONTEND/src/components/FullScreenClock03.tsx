import { useEffect, useState } from "react";
import bgimg from "../assets/bgimg.jpg"
import { useNavigate } from "react-router-dom";

function FullScreenClock03() {
    const nav01 = useNavigate();
    const nav02 = useNavigate();
    const nav03 = useNavigate();

    const [visible, setVisible] = useState(false);
    let timeoutId: any = null;

    useEffect(() => {
        const handleMouseMove = () => {
            setVisible(true);

            if (timeoutId) clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                setVisible(false);
            }, 2000);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [period, setPeriod] = useState<'AM' | 'PM'>('AM');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            let h = now.getHours();
            const m = now.getMinutes();
            const ampm = h >= 12 ? 'PM' : 'AM';

            h = h % 12 || 12; 

            setHour(h.toString().padStart(2, '0'));
            setMinute(m.toString().padStart(2, '0'));
            setPeriod(ampm);       
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {visible && (
                <div className="absolute bottom-5 left-5 z-50">
                    <div className="flex gap-x-4 items-center">
                        <button onClick={() => nav03("/dashboard")} className="flex gap-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                            <div className="font-poppins text-white/80">Go Back</div>
                        </button>
                        <button onClick={() => nav01("/dark")} className="w-14 h-8 bg-black/70  rounded-lg"></button>
                        <button onClick={() => nav02("/light")} className="w-14 h-8 bg-white/70 rounded-lg"></button>
                    </div>
                </div>
            )}
            <div style={{ backgroundImage: `url(${bgimg})` }} className="h-screen w-screen bg-cover bg-center font-gambarino">

                <div className="absolute right-6 top-6 text-white/60 font-semibold text-2xl
                lg:text-3xl
                ">{period}</div>

                <div className="h-full w-full text-sky-950/50 font-bold flex 
                flex-col items-center justify-center text-[170px] gap-y-6 py-10
                md:flex-row md:gap-x-10 md:text-[170px] md:items-center md:justify-center md:py-0
                lg:flex-row lg:gap-x-10 lg:text-[270px] lg:items-center lg:justify-center lg:py-0">

                    <div className="bg-stone-300/20 backdrop-blur-md rounded-3xl tracking-wider
                    w-2/3 h-1/2 flex items-center justify-center
                    md:flex md:items-center md:justify-center md:w-1/3 md:h-[50%] 
                    lg:flex lg:items-center lg:justify-center lg:w-1/4 lg:h-[60%]
                    ">
                        <div>{hour}</div>
                    </div>

                    <div className="bg-stone-300/20 backdrop-blur-md rounded-3xl tracking-wider
                    w-2/3 h-1/2 flex items-center justify-center
                    md:flex md:items-center md:justify-center md:w-1/3 md:h-[50%] 
                    lg:flex lg:items-center lg:justify-center lg:w-1/4 lg:h-[60%]
                    ">
                        <div>{minute}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FullScreenClock03;
import bg from "../assets/bg04.png";

function FullScreenClock03() {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="h-screen w-screen bg-cover bg-center font-gambarino relative">

            <div className="absolute top-6 left-8 text-white font-semibold">
                <div className="md:text-2xl lg:text-3xl">Monday</div>
                <div className="md:text-xl lg:text-2xl">25 May, 2025</div>
            </div>

            <div className="absolute bottom-6 right-8 text-white font-semibold text-xl
            md:text-2xl
            lg:text-3xl
            ">AM</div>

            <div className="h-full w-full text-white font-bold flex 
            flex-row items-center justify-center text-[130px] gap-x-6
            md:flex-row md:gap-x-10 md:text-[170px] md:items-center md:justify-center
            lg:flex-row lg:gap-x-10 lg:text-[270px] lg:items-center lg:justify-center ">

                <div className="rounded-3xl border-2 border-gray-300/30
                w-52 h-1/3 flex items-center justify-center
                md:flex md:items-center md:justify-center md:w-1/3 md:h-[50%] 
                lg:flex lg:items-center lg:justify-center lg:w-1/4 lg:h-[60%]
                ">
                    <div>09</div>
                </div>

                <div className="rounded-3xl border-2 border-gray-300/30
                w-52 h-1/3 flex items-center justify-center
                md:flex md:items-center md:justify-center md:w-1/3 md:h-[50%] 
                lg:flex lg:items-center lg:justify-center lg:w-1/4 lg:h-[60%]
                ">
                    <div>37</div>
                </div>
            </div>
        </div>
    );
}

export default FullScreenClock03;
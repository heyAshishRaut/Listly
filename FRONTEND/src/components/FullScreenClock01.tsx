function FullScreenClock01(){
    return(
        <div className="h-screen w-screen bg-black font-gambarino">

            <div className="absolute right-6 top-6 text-white font-semibold text-xl
            md:text-2xl
            lg:text-3xl
            ">AM</div>

            <div className="h-full w-full text-white font-bold flex 
            flex-row items-center justify-center text-[130px] gap-x-6
            md:flex-row md:gap-x-10 md:text-[170px] md:items-center md:justify-center
            lg:flex-row lg:gap-x-10 lg:text-[270px] lg:items-center lg:justify-center ">

                <div className=" bg-gray-500/30 rounded-3xl
                w-52 h-1/3 flex items-center justify-center
                md:flex md:items-center md:justify-center md:w-1/3 md:h-[50%] 
                lg:flex lg:items-center lg:justify-center lg:w-1/4 lg:h-[60%]
                ">
                    <div>09</div>
                    <div className="absolute h-4 bg-black
                    w-52
                    md:w-1/3 lg:w-1/4"></div>
                </div>

                <div className=" bg-gray-500/30 rounded-3xl
                w-52 h-1/3 flex items-center justify-center
                md:flex md:items-center md:justify-center md:w-1/3 md:h-[50%] 
                lg:flex lg:items-center lg:justify-center lg:w-1/4 lg:h-[60%]
                ">
                    <div>37</div>
                    <div className="absolute h-4 bg-black 
                    w-52
                    md:w-1/3 lg:w-1/4"></div>
                </div>
            </div>
        </div>
    );
}

export default FullScreenClock01;
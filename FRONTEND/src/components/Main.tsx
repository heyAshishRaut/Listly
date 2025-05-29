import bgimg from "../assets/bgimg.jpg";
import logo from "../assets/logo.png";
import addbtn from "../assets/addsvg.svg"

function Main(){
    return(
        <div style={{ backgroundImage: `url(${bgimg})` }} className="h-screen w-screen bg-cover bg-center relative font-gambarino" >
            <div className="h-[10%] w-screen flex items-center gap-x-1 pl-6">
                <img src={logo} alt="" className="h-10 md:h-12 lg:h-14"/>
                <div className="font-semibold text-2xl md:text-3xl lg:text-4xl text-white">Listly</div>
            </div>

            <div className="h-[90%] w-screen flex flex-col items-center
            pt-6 gap-y-6
            md:flex-row md:gap-x-6 md:px-14 md:pt-0
            lg:flex-row lg:gap-x-8 lg:px-60 lg:pt-0">
                <div className="bg-black h-[50%] rounded-2xl 
                w-[80%]
                md:w-1/2
                lg:w-1/2"></div>

                <div className="h-full pb-4
                w-[80%]
                md:w-1/2
                lg:w-1/2">
                    <div className="h-[10%] w-full flex items-center justify-between
                    pb-4">
                        <div className="font-semibold
                        text-3xl
                        md:text-4xl
                        lg:text-4xl">Tasks</div>
                        <button className="flex items-center gap-x-1 bg-blue-900/90 hover:bg-blue-950/90 rounded-md
                        pr-4 pl-2 py-1
                        md:pr-4 md:pl-2 md:py-2
                        lg:pr-4 lg:pl-2 lg:py-2">
                            <img className="h-8" src={addbtn} alt="" />
                            <div className="text-xl text-white">Create</div>
                        </button>
                    </div>
                    <div className="h-[90%] rounded-2xl bg-stone-700"></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
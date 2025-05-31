import logo from "../assets/logo.png";
import full from "../assets/new.png"
import half from "../assets/mobile.png"
import one from "../assets/01.png"
import two from "../assets/02.png"
import three from "../assets/03.png"
import { useNavigate } from "react-router-dom";

function Showcase() {
    const navigate = useNavigate();

    function goToDash() {
        navigate('/dashboard'); 
      };

    return (
        <div className="text-white w-screen min-h-screen font-gambarino bg-[linear-gradient(90deg,_hsla(252,40%,29%,1)_0%,_hsla(270,77%,71%,1)_100%)]">
            <div className="h-[10%] w-screen flex items-center gap-x-1 pl-6">
                <img src={logo} alt="" className="h-10 md:h-12 lg:h-14" />
                <div className="font-semibold text-2xl md:text-3xl lg:text-4xl">Listly</div>
            </div>

            <div className="flex flex-col items-center justify-center mt-28 pb-20">
                <h1 className="text-center text-3xl md:text-4xl font-bold px-14 md:px-0 lg:px-0">
                    Get Things Done, On Time, Every Time.
                </h1>

                <button onClick={goToDash} className="mt-10 text-xl pb-1 border-b-2 border-black">Get Started</button>

                <div className="px-[50px] md:px-[100px] lg:px-[200px] mt-10 lg:mt-20">
                    <div>
                        <img
                            src={half}
                            alt="Mobile View"
                            className="block md:hidden rounded-2xl"
                        />

                        <img
                            src={full}
                            alt="Desktop View"
                            className="hidden md:block rounded-2xl"
                        />
                    </div>

                </div>

                <div className="bg-black w-full flex flex-col gap-y-6 mt-10 py-10 px-[50px] md:px-[100px] lg:px-[200px]">

                    <div className="text-xl md:text-3xl flex gap-x-4 items-center">
                        <div className="text-xl md:text-3xl">Add your tasks with a clear title, detailed description, priority level, and deadline.</div>
                    </div>

                    <div className="text-xl md:text-3xl flex gap-x-4 items-center">
                        <div className="text-xl md:text-3xl">Mark tasks as done or delete them instantly with one click.</div>
                    </div>

                </div>

                <div className="mt-10 px-[50px] md:px-[100px] lg:px-[200px] self-start text-2xl md:text-3xl lg:text-4xl">Multiple Clock Faces</div>

                <div className="mt-10 px-[50px] md:px-[100px] lg:px-[200px] flex flex-col md:flex-row gap-y-2 md:gap-x-2 md:gap-y-0">
                    <img className="w-full md:w-1/3 rounded-md md:rounded-xl" src={one} alt="" />
                    <img className="w-full md:w-1/3 rounded-md md:rounded-xl" src={two} alt="" />
                    <img className="w-full md:w-1/3 rounded-md md:rounded-xl" src={three} alt="" />
                </div>

                <div className="mt-20 h-40 flex flex-col items-center justify-center">
                    <div className="text-2xl md:text-3xl">Created by Ashish Raut</div>

                        <div className="flex gap-x-5 mt-6 items-center">
                            <a href="https://github.com/heyAshishRaut" target="_blank"><svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></a>
                            <a href="https://x.com/heyashishraut" target="_blank"><svg className="h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>
                            <a href="https://www.linkedin.com/in/ashishraut0302/" target="_blank"><svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Showcase;
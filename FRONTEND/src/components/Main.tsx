import bgimg from "../assets/bgimg.jpg";
import logo from "../assets/logo.png";
import addbtn from "../assets/addsvg.svg"
import MainClock from "./MainClock";
import Tasks from "./Tasks";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Task = {
    title: string;
    priority: string;
    desc: string;
    date: string
    isCompleted: boolean
};

function Main(){
    const [verify, setVerify] = useState(false);

    const [err, setErr] = useState(false);

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [desc, setDesc] = useState("");

    const [tasks, setTasks] = useState<Task[]>([]);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const today = new Date();
    const formatted = today.toLocaleDateString("en-CA");

    useEffect(() => {
        const saved = localStorage.getItem("tasks");
        if (saved) setTasks(JSON.parse(saved));
    }, []);

    function addTask() {

        if(selectedDate === null || priority === "" || title === "" || desc === ""){
            setErr(true);
            return;
        }

        const day = selectedDate.getDate();
        const month = selectedDate.toLocaleString('default', { month: 'long' });
        const year = selectedDate.getFullYear();

        const date = `${month} ${day}, ${year}`;

        const isCompleted = false;

        const newTask = { title, priority, desc, date, isCompleted };
        const updated = [newTask, ...tasks];;
        setTasks(updated);
        localStorage.setItem("tasks", JSON.stringify(updated));
        setTitle('');
        setPriority('');
        setDesc('');
        setSelectedDate(new Date());
        setErr(false);
        setVerify(false);
      };

    return(
        <div style={{ backgroundImage: `url(${bgimg})` }} className="h-screen w-screen bg-cover bg-center relative font-gambarino" >

            <AnimatePresence>
                {verify && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center w-[100%] h-[100%] p-6 md:p-0 lg:p-0 bg-sky-800/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
               
                    >
                        <motion.div className="bg-neutral-500/30 backdrop-blur-3xl text-stone-700/70 rounded-[20px] w-[400px] md:w-[500px] lg:w-[500px] h-[520px]"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <form action="">
                                <div className="flex flex-col gap-y-3 mt-28 px-10 w-full font-poppins text-[14px]">
                                    <div className="absolute left-3 top-2 text-4xl lg:text-5xl font-bold font-gambarino text-white flex items-center gap-x-2">
                                        <svg className="h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>

                                        <div>Create Task</div>
                                    </div>
                                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className="font-medium w-full border-2 border-stone-300/50 outline-none px-4 py-3 rounded-lg"/>

                                    <div className="flex flex-col gap-y-2">
                                        <div>Priority</div>
                                        <div className="flex gap-x-2">
                                            <button onClick={(e) => { e.preventDefault(); setPriority("red"); }} className={`bg-red-500/80 flex text-[12px] py-[1px] items-center justify-start px-3 rounded-[25px] ${priority === "red" ? "border-2 border-gray-100/50" : "border-2 border-transparent"}`}>
                                                <div className="w-2 h-2 bg-black/30 rounded-full"></div>
                                                <div className="pl-2">High</div>
                                            </button>

                                            <button onClick={(e) => { e.preventDefault(); setPriority("yellow"); }} className={`bg-yellow-400/60 flex text-[12px] py-[1px] items-center px-3 rounded-[25px] ${priority === "yellow" ? "border-2 border-gray-100/50" : "border-2 border-transparent"}`}>
                                                <div className="w-2 h-2 bg-black/30 rounded-[50%]"></div>
                                                <div className="pl-2">Medium</div>
                                            </button>

                                            <button onClick={(e) => { e.preventDefault(); setPriority("green"); }} className={`bg-green-600/80 flex text-[12px] py-[1px] items-center justify-start px-3 rounded-[25px] ${priority === "green" ? "border-2 border-gray-100/50" : "border-2 border-transparent"}` }>
                                                <div className="w-2 h-2 bg-black/30 rounded-full"></div>
                                                <div className="pl-2">Low</div>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="max-w-sm mt-2">
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date!)}
                                            minDate={new Date(`${formatted}`)}
                                           
                                            className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                                            placeholderText="Select date"
                                        />
                                    </div>
                                        
                                    <textarea onChange={(e) => setDesc(e.target.value)} className="font-medium mt-2 border-2 border-stone-300/50 textarea outline-none py-[10px] px-[20px] rounded-[7px] min-h-[100px] max-h-[100px]" placeholder="Description"></textarea>

                                    {err ? (
                                        <div className="flex items-center gap-x-2 text-white text-[13px]">
                                            <svg className="h-5 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                            </svg>
                                            <div>All fields are mandatory</div>
                                        </div>
                                    ) : "" }
                                    <div className="mt-6 self-end flex gap-x-2">
                                        <button onClick={(e) => { e.preventDefault(); setTitle(""); setPriority(""); setDesc(""); setVerify(false) }} className="py-2 px-8 bg-gray-200 rounded-md text-blue-900">Clear</button>
                                        <button onClick={ (e) => {e.preventDefault(); addTask()} } className="py-2 px-8 bg-blue-900 rounded-md text-gray-200">Create</button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="h-[10%] w-screen flex items-center gap-x-1 pl-6">
                <img src={logo} alt="" className="h-10 md:h-12 lg:h-14"/>
                <div className="font-semibold text-2xl md:text-3xl lg:text-4xl text-white">Listly</div>
            </div>

            <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="h-[90%] w-screen flex flex-col items-center
            pt-6 gap-y-6 overflow-y-scroll
            md:flex-row md:gap-x-6 md:px-14 md:pt-0 md:overflow-y-hidden
            lg:flex-row lg:gap-x-8 lg:px-60 lg:pt-0 lg:overflow-y-hidden">

                <div className="relative rounded-3xl bg-stone-600/20 backdrop-blur-lg
                w-[80%] h-[40%]
                md:w-1/2 md:h-[50%]
                lg:w-1/2 lg:h-[50%]">
                    <MainClock />
                </div>

                <div className="h-full pb-4
                w-[80%]
                md:w-1/2
                lg:w-1/2">
                    <div className="h-[10%] w-full flex items-center justify-between pb-4">
                        <div className="font-semibold text-stone-700
                        text-3xl
                        md:text-4xl
                        lg:text-4xl">Tasks</div>
                        <button onClick={() => { setVerify(true) }} className="flex items-center gap-x-1 bg-blue-900/90 hover:bg-blue-950/90 rounded-md
                        pr-4 pl-2 py-1
                        md:pr-4 md:pl-2 md:py-2
                        lg:pr-4 lg:pl-2 lg:py-2">
                            <img className="h-8" src={addbtn} alt="" />
                            <div className="text-xl text-white">Create</div>
                        </button>
                    </div>

                    <div className="h-[90%] overflow-hidden font-poppins">
                        <Tasks tasks={tasks} setTasks={setTasks} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
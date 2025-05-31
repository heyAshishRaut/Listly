import React from "react";

export type Task = {
    title: string;
    priority: string;
    desc: string;
    date: string;
    isCompleted: boolean;
};

type TasksProps = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function Tasks({ tasks, setTasks }: TasksProps){
    // const [tasks, setTasks] = useState<Task[]>(() => {
    //     const savedTasks = localStorage.getItem('tasks');
    //     return savedTasks ? JSON.parse(savedTasks) : [];
    // });

    const markTaskAsDone = (index: number) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, isCompleted: !task.isCompleted } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      };

    const removeTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    return(
        <div style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="h-full w-full flex flex-col gap-y-2 p-4 text-white overflow-y-scroll">

            { tasks.map((task, index) => (
                <div key={index} className="group relative w-full">
                    <div style={{ filter: task.isCompleted ? 'grayscale(70%)' : 'none' }} className="w-full pl-4 pt-2 pb-4 gap-y-2 backdrop-blur-xl bg-blue-950/30 rounded-2xl flex flex-col">
                        <div className="text-xl pb-1 font-gambarino">{task.title}</div>
                        <div className="flex justify-between items-center">
                            <div className={`flex text-[12px] py-[1px] items-center px-3 rounded-[25px] ${task.priority === "red" ? "bg-red-500/80" : task.priority === "yellow" ? "bg-yellow-400/60" : "bg-green-600/80"}`}>
                                <div className="w-2 h-2 bg-black/30 rounded-[50%]"></div>
                                <div className="pl-2">
                                    { task.priority === "red" ? "High" : task.priority === "yellow" ? "Medium" : "Low"}
                                </div>
                            </div>
                            <div className="text-gray-100/70 flex gap-x-2 items-center pr-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                </svg>
                                <div className="text-[13px]">{task.date}</div>
                            </div>
                        </div>
                        <div className="text-[12px] text-gray-100/70 pr-4 mt-2">{task.desc}</div>
                    </div>

                    <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 ease-in-out flex justify-end items-center text-[12px] gap-2 mt-2">
                        <button onClick={() => markTaskAsDone(index)} className="px-4 py-[3px] bg-white/80 text-black/70 rounded-[25px]">
                            {
                                task.isCompleted ? "Undo" : "Mark as Done"
                            }
                        </button>
                        <button onClick={() => removeTask(index)} className="px-4 py-[3px] bg-red-600/80 text-white rounded-[25px]">
                            Remove
                        </button>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Tasks;
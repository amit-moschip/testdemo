import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { SiSpeedtest } from "react-icons/si";

function SideBar() {
    const topside_sidebar_list = [
        {
            icon: <MdSpaceDashboard />,
            label: "Dashboard",
            url: "/dashboard"
        },
        {
            icon: <SiSpeedtest />,
            label: "Quizes",
            url: "/quizes"
        },
        {
            icon: <PiStudentBold />,
            label: "Students",
            url: "/students"
        },
        {
            icon: <IoFileTrayFullOutline />,
            label: "Results",
            url: "/results"
        },
    ];

    const bottom_sidebar_list = [
        {
            icon: <IoMdHelpCircleOutline />,
            label: "Help",
            url: "/help"
        }
    ]

    return (
        <>
        <div className="w-[190px] h-screen bg-white flex flex-col items-center border border-l border-gray-300 shadow-xl">
            <div className="flex flex-col h-full space-y-4 mt-4">
            {topside_sidebar_list.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-white rounded-md hover:bg-slate-600 cursor-pointer transition-all"
                >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base">{item.label}</span>
                </div>
            ))}
        </div>

        <div className="flex flex-col">
            {bottom_sidebar_list.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-white rounded-md hover:bg-slate-600 cursor-pointer transition-all"
                >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base">{item.label}</span>
                </div>
            ))}
        </div>
        </div>
        </>
    );
}

export default SideBar;

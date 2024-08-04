import { RiVideoUploadLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { open } from '@tauri-apps/api/dialog';




function HomePage() {

    const navigate = useNavigate();

    


    return <div className="flex flex-col bg-zinc-800 h-full pt-10 pb-4 place-items-center">
        <span className="font-lobster font-bold text-3xl text-primary_color">Subtitle Forge</span>
        <br />
        <br />
        <span className="text-white font-bold text-xl">    Create New Projects</span>
        <br />
        <div className="w-[70%] h-[50%] bg-customGray flex justify-center items-center rounded-lg " onClick={async () => {
            const selected = await open({ multiple: false, filters: [{ name: 'Videos', extensions: ['mp4', 'webm', 'ogg'] }] });
            if (selected != null) {
                const videoUrl = selected;
                navigate("/project_creation", { state: { videoPath: videoUrl } });
            }
        }}>
            <RiVideoUploadLine color="white" size={80} />
        </div>
        <br />
        <div className="flex w-[70%] justify-start">
            <span className="text-white font-bold text-xl">Recent Projects</span>
        </div>
        <br />
        <div className="flex-grow w-[70%] h-full bg-customGray rounded-lg shadow-inner"></div>

    </div>
}


export default HomePage
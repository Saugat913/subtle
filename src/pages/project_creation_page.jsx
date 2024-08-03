
import { AiOutlineLoading } from "react-icons/ai";

function ProjectCreationPage(videoPath) {
    return <div className="flex flex-col w-full h-full items-center justify-center bg-zinc-800">
        <AiOutlineLoading  color="white" size={32} className="animate-spin" />
        <span className="text-white text-lg">Loading..</span>
    </div>
}


export default ProjectCreationPage;

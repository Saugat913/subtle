
import { useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { invoke } from '@tauri-apps/api/tauri';
import { useNavigate, useLocation } from "react-router-dom";


import { readBinaryFile, BaseDirectory, readDir } from '@tauri-apps/api/fs';
import { convertFileSrc } from '@tauri-apps/api/tauri';


class ProjectInfo {
    constructor() {
    }
    addAudio(audio) {
        this.audio = audio;
    }
    addVideo(video) {
        this.video = video;
    }
    addThumbnail(thumbnail) {
        this.thumbnail = thumbnail;
    }
}


function ProjectCreationPage() {
    const location = useLocation();

    const navigate = useNavigate();
    useEffect(() => {
        const initializeProject = async () => {
            try {
                const projectName = await invoke('init_project', { videoUrl: location.state.videoPath });
                // // const uint8Array = new Uint8Array(binaryData);

                // // // Create a Blob from the Uint8Array
                // // const blob = new Blob([uint8Array], { type: 'video/mp4' }); // Adjust MIME type as needed

                // // // Create an object URL for the Blob
                // // const videoUrl = URL.createObjectURL(blob);
                // const videoUrl = binaryData;


                const proj_info = new ProjectInfo();

                // Gets a list of images in projectt dir
                const project_dir = await readDir(
                    projectName,
                    {
                        dir: BaseDirectory.AppData,
                        recursive: false
                    }
                );

                project_dir.forEach(async (entry) => {
                    if (entry.name == "video.mp4") {
                        proj_info.addVideo(convertFileSrc(entry.path))
                    }
                    if (entry.name == "thumbnail.png") {
                        proj_info.addThumbnail(convertFileSrc(entry.path))

                    } if (entry.name == "audio.mp4") {
                        proj_info.addAudio(convertFileSrc(entry.path))
                    }

                });

                navigate("/editor", { state: { projectData: proj_info } });
            } catch (error) {
                console.error('Error fetching file content:', error);
            }
        };

        initializeProject();
    }, []);
    return <div className="flex flex-col w-full h-full items-center justify-center bg-zinc-800">
        <AiOutlineLoading color="#56AEF5" size={32} className="animate-spin" />
        <span className="text-white text-lg">Loading..</span>
    </div>
}


export default ProjectCreationPage;

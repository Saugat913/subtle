import { useState } from "react";
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { open } from '@tauri-apps/api/dialog';
import { join } from "@tauri-apps/api/path";
function Drag() {
    const [videoUrl, setVideoUrl] = useState("");

    const handleFileChange = async (event) => {
        const file_url = await open();
        const filePath= await join(file_url);
        const assetUrl = convertFileSrc(filePath);

        setVideoUrl(assetUrl);
    };

    return (
        <div>
            <button  className="w-20 h-20 bg-black" onClick={handleFileChange} />
            hdbwhdbhe
            <video src={videoUrl} className="w-60 h-60"></video>
        </div>
    );
}

export default Drag;
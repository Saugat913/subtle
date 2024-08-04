import React, { useEffect, useState } from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { TbPlayerTrackNext } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";







function Subtitle({ timestampStart, timestampEnd, content }) {
    return <div className='w-full p-3 rounded bg-slate-600 mb-6'>
        <span className='text-white block'> {content}</span>
        <span>{timestampStart}- {timestampEnd}</span>
    </div>
}

const subtitle_dummy_data = [

    {
        'content': "This is the contenjndec",
        'start': 0.5,
        'end': 1
    }, {
        'content': "This is the contenjndec",
        'start': 0.5,
        'end': 1
    }, {
        'content': "This is the contenjndec",
        'start': 0.5,
        'end': 1
    }, {
        'content': "This is the contenjndec",
        'start': 0.5,
        'end': 1
    }, {
        'content': "This is the contenjndec",
        'start': 0.5,
        'end': 1
    }, {
        'content': "This is the contenjndec",
        'start': 0.5,
        'end': 1
    }, {
        'content': "This is the contenjndec",
        'start': 0.5,
        'end': 1
    }, {
        'content': "This is the contenjndec",
        'start': 0.5,
        'end': 1
    },
]


function EditorPage() {

    // const [isLoaded, setisLoaded] = useState(true);
    // const [videoUrl, setvideoUrl] = useState("");

    // useEffect(async () => {
    //     // Read the video file using the fs module
    //     const data = await readBinaryFile(videoPath);

    //     const videoUrl = URL.createObjectURL(new Blob([data]));

    //     setvideoUrl(videoUrl);
    //     setisLoaded(true);
    // })

    // useEffect(async () => {
    //     try {
    //       const data = await readBinaryFile(videoPath);
    //       const videoUrl = URL.createObjectURL(new Blob([data]));
    //       setVideoUrl(videoUrl);
    //     } catch (error) {
    //       console.error('Error reading file:', error);
    //     }
    //   }, [videoPath]);

    const data = useLocation();
    const projectData = data.state.projectData;
   
    

    // useEffect(() => {
    //     const loadVideo = async () => {
            
    //         // try {
    //         //     const data = await readBinaryFile(videoPath + "/video.mp4", { dir: BaseDirectory.AppData });
    //         //     const base64 = btoa(String.fromCharCode(...new Uint8Array(data)));

    //         //     console.log("Base64 Data:" + base64);
    //         //     const url = URL.createObjectURL(new Blob([base64]));
    //         //     setvideoUrl(url);
    //         // } catch (error) {
    //         //     console.error('Error reading file:', error);
    //         // }

    //     };

    //     loadVideo();
    // }, []);




    return (

        // (isLoaded == true) ?
        //     (videoUrl != null) ?
        <div className="flex flex-col h-screen p-2 bg-zinc-800 overflow-clip">
            {/* Top Navigation */}
            <div className="flex bg-customGray rounded mb-2 items-center">
                <Link to={"/"}>
                    <FaHome color="white" className="ml-4 mt-2 mb-2" size={24} />
                </Link>
            </div>

            {/* Video Preview + Subtitle Section */}
            <div className="flex flex-grow">


                <div className="flex-1 flex-col bg-customGray flex  items-center  rounded p-3 mr-2">
                    <span className="text-white mt-7 mb-8">Subtitles</span>
                    <div className='flex flex-col overflow-y-scroll h-64 w-full'>
                        {subtitle_dummy_data.map((value) => {
                            return <Subtitle timestampStart={value.start} timestampEnd={value.end} content={value.content}></Subtitle>
                        })}
                    </div>

                    <div className='mt-12 flex  items-center rounded-xl bg-zinc-800 p-2'>
                        <FaPlus color='#56AEF5' />
                        <span className='text-primary_color ml-3'>Add Subtitle</span></div>

                </div>
                <div className="flex-1 flex flex-col bg-customGray items-center justify-center pl-5 pr-5 pt-3  rounded">
                    <video className="w-10/12 bg-black mb-4" src={projectData.video} controls autoPlay></video>
                    <input type="range" min="0" max="100" className="w-10/12 mb-3" />
                    <div className="flex justify-evenly w-full">
                        <span className="text-white ml-4">00:10:33:15</span>
                        <div className="flex justify-evenly w-full">
                            <TbPlayerTrackNext color="white" size={24} className="rotate-180" />
                            <CiPlay1 color="white" size={24} />
                            <TbPlayerTrackNext color="white" size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Control Section */}
            <div className="h-40 bg-customGray flex-shrink-0 rounded mb-2 mt-2 overflow-x-auto">
                {/* Timeline or bottom control panel content */}
            </div>

            <div className='fixed bottom-5 right-5 items-center rounded-xl bg-zinc-800 pr-4 pl-4 pt-3 pb-3'>
                <span className='text-primary_color'>Export</span>
            </div>
        </div>
        //     : <div>
        //         cannot load the video file
        //     </div>
        // : <div>
        //     Loading....
        // </div>
    );
}




export default EditorPage;

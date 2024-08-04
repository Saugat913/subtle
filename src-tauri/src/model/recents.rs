use std::{
    fs::File,
    io::{Read, Write},
    vec,
};

use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Recents {
    name: String,
    path: String,
    thumnail_path: String,
    audio_path: String,
    video_path: String,
}

impl Recents {
    fn new(
        name: String,
        path: String,
        thumnail_path: String,
        audio_path: String,
        video_path: String,
    ) -> Recents {
        return Recents {
            name,
            path,
            thumnail_path,
            audio_path,
            video_path,
        };
    }

    fn write_to_file(&self, file_name: String) {
        let mut file = File::open(file_name).unwrap();
        file.write_all(serde_json::to_string(self).unwrap().as_bytes())
            .unwrap();
    }

    fn read_from_file(file_name: String) -> Recents {
        let mut file = File::open(file_name).unwrap();
        let mut buffer: Vec<u8> = Vec::new();
        file.read_to_end(&mut buffer).unwrap();

        let config = serde_json::from_slice::<Recents>(buffer.as_slice()).unwrap();

        return config;
    }
}

use crate::model::recents;
use serde::{Deserialize, Serialize};
use std::{
    fs::File,
    io::{Read, Write},
    vec,
};

#[derive(Serialize, Deserialize, Debug)]
pub struct ProjectConfig {
    recents: Vec<recents::Recents>,
}

impl ProjectConfig {
    pub fn write_to_file(&self, file_name: String) {
        let mut file = File::open(file_name).unwrap();
        file.write_all(serde_json::to_string(self).unwrap().as_bytes())
            .unwrap();
    }

    pub fn read_from_file(file_name: String) -> ProjectConfig {
        let mut file = File::open(file_name).unwrap();
        let mut buffer: Vec<u8> = Vec::new();
        file.read_to_end(&mut buffer).unwrap();

        let config = serde_json::from_slice::<ProjectConfig>(buffer.as_slice()).unwrap();

        return config;
    }
}

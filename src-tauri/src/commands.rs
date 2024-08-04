use crate::utils::{self, convert_video_to_audio_less, generate_thumbnail};
// use std::fs::File;
// use std::io::Read;
use crate::model::project_config::{self, ProjectConfig};
use std::{fs::create_dir, path::Path};
use tauri;
use tauri::AppHandle;

#[tauri::command]
pub async fn init_project(video_url: String, app_handle: AppHandle) -> String {
    println!("Initializing the project");
    let working_path = app_handle.path_resolver().app_data_dir().unwrap();

    let video_path = Path::new(&video_url);
    let video_name = video_path.file_stem().unwrap().to_str().unwrap();
    let project_path_buf = working_path.join(video_name);

    let project_path = project_path_buf.as_path();

    println!("Project Path:{}", project_path.to_str().unwrap());

    create_dir(project_path).unwrap();

    let video_url_cloned1 = video_url.clone();
    let video_url_cloned2 = video_url.clone();
    let video_url_cloned3 = video_url.clone();

    let project_path_cloned1 = project_path.to_path_buf();
    let project_path_cloned2 = project_path.to_path_buf();
    let project_path_cloned3 = project_path.to_path_buf();

    let tasks = vec![
        tauri::async_runtime::spawn(async move {
            utils::convert_video_to_mono_audio(
                video_url_cloned1.as_str(),
                project_path_cloned1.join("audio.wav").to_str().unwrap(),
            );
        }),
        tauri::async_runtime::spawn(async move {
            generate_thumbnail(
                video_url_cloned2.as_str(),
                project_path_cloned2.join("thumbnail.png").to_str().unwrap(),
                "00:00:10",
            );
        }),
        tauri::async_runtime::spawn(async move {
            convert_video_to_audio_less(
                video_url_cloned3.as_str(),
                project_path_cloned3.join("video.mp4").to_str().unwrap(),
            );
        }),
    ];

    // Wait for all tasks to complete
    for task in tasks {
        task.await
            .map_err(|e| format!("Task failed: {}", e))
            .unwrap();
    }
    println!("Sending file name!");
    return video_name.to_string();
}

#[tauri::command]
fn get_projects(app_handle: AppHandle) -> ProjectConfig {
    let working_path = app_handle.path_resolver().app_data_dir().unwrap();

    let config = project_config::ProjectConfig::read_from_file(
        working_path
            .join("projects.json")
            .to_str()
            .unwrap()
            .to_string(),
    );
    return config;
}

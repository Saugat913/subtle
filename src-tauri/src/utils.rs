use std::process::Command;
use std::process::Output;

pub fn convert_video_to_mono_audio(input_video: &str, output_audio: &str) -> Output {
    // Define the FFmpeg command and arguments
    Command::new("ffmpeg")
        .arg("-i")
        .arg(input_video)
        .arg("-ac")
        .arg("1")
        .arg(output_audio)
        .output()
        .expect("Failed to execute FFmpeg command")
}

pub fn generate_thumbnail(video_path: &str, thumbnail_path: &str, timestamp: &str) -> Output {
    // Define the FFmpeg command and arguments
    Command::new("ffmpeg")
        .arg("-ss") // seek to timestamp
        .arg(timestamp) // timestamp for the frame to extract
        .arg("-i")
        .arg(video_path)
        .arg("-vframes")
        .arg("1") // extract only one frame
        .arg("-q:v")
        .arg("2") // set the quality of the output image (lower value means higher quality)
        .arg(thumbnail_path)
        .output()
        .expect("Failed to execute FFmpeg command")
}
pub fn convert_video_to_audio_less(input_video: &str, output_video: &str) -> Output {
    // Define the FFmpeg command and arguments
    Command::new("ffmpeg")
        .arg("-i")
        .arg(input_video)
        .arg("-an")
        .arg("-c:v")
        .arg("copy")
        .arg(output_video)
        .output()
        .expect("Failed to execute FFmpeg command")
}

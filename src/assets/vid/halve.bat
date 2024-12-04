@echo off
REM Converts all videos in directory to halved resolution, capped bitrate, low fps LQ videos
mkdir lq

REM Loop through all video files in the current directory
for %%f in (*.mp4 *.mkv *.avi *.mov *.flv) do (
  echo Processing "%%f"...
  ffmpeg -i "%%f" -vf "scale=iw/2:ih/2" -b:v 1500k -b:a 128k -preset fast -crf 23 "lq\%%~nf_lq.mp4"
)

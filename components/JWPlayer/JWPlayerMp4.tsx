import React from "react";
import JWPlayer from "@jwplayer/jwplayer-react";
//"@jwplayer/jwplayer-react" là một thư viện chính thức do JWPlayer cung cấp để tích hợp JWPlayer vào ứng dụng React.

function VideoMP4() {
  const myPlaylist = [
    {
      file: "https://qig.vn/Images/quangich202320nam.mp4#t=2.3",
      image:
        "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/A03_4960.jpg",
      tracks: [
        {
          file: "mySubtitle.srt",
          label: "English",
          kind: "chapters",
          default: true,
          start: 0, // Thời điểm bắt đầu của chapter
          end: 60, // Thời điểm kết thúc của chapter
        },
      ],
    },
    {
      file: "https://stream.mux.com/YCOWHqIUho00zXdMZjeqWoCslXG9MFqIC/high.mp4",
      image:
        "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/b038563096e653b80af71j.jpg",
      tracks: [
        {
          file: "mySubtitle.srt",
          label: "Spanish",
          kind: "chapters",
          default: true,
          start: 0, // Thời điểm bắt đầu của chapter
          end: 20, // Thời điểm kết thúc của chapter
        },
      ],
    },
  ];
  return (
    <div style={{ width: "100%", height: "340px" }}>
      <JWPlayer
        library="https://cdn.jwplayer.com/libraries/T5EQoSVW.js"
        playlist={myPlaylist}
      />
      <h3>Video MP4</h3>
    </div>
  );
}

export default VideoMP4;

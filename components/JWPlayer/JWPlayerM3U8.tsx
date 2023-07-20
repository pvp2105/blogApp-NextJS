import React from "react";
import JWPlayer from "@jwplayer/jwplayer-react";
//"@jwplayer/jwplayer-react" là một thư viện chính thức do JWPlayer cung cấp để tích hợp JWPlayer vào ứng dụng React.

function VideoM3U8() {
  const myPlaylist = [
    {
      file: "https://video-newdev.enetviet.com/hoatdong/925d903d65461f0e5b734a702acd3d87_video/925d903d65461f0e5b734a702acd3d87_master.m3u8",
      image:
        "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/A03_4960.jpg",
      tracks: [
        {
          // file: "mySubtitle.srt",
          label: "English",
          kind: "chapters",
          default: true,
          start: 0, // Thời điểm bắt đầu của chapter
          end: 60, // Thời điểm kết thúc của chapter
        },
      ],
    },
    {
      file: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      image:
        "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/b038563096e653b80af71j.jpg",
      tracks: [
        {
          file: "mySubtitle.srt",
          label: "Spanish",
          kind: "chapters",
          default: false,
          start: 0, // Thời điểm bắt đầu của chapter
          end: 60, // Thời điểm kết thúc của chapter
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
      <h3>Video M3U8</h3>
    </div>
  );
}

export default VideoM3U8;

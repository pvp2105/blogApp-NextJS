import React, { useEffect, useState, useRef } from "react";
import { Button } from "@mui/material";
import JWPlayer from "@jwplayer/jwplayer-react";

function VideoMP3() {
  const [newImage, setNewImage] = useState(
    "https://quantri.qig.vn/UploadFolderNew/UBNDLongBien/Image/qi/administrator/ha-noi-hon-240000-ho-so-dang-ky-thu-nghiem-truc-tuyen-thanh-cong-vao-cac-lop-dau-cap.jpg"
  );

  const [myPlaylist, setMyPlaylist] = useState([
    {
      file: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
      image: newImage,
    },
  ]);

  // const inputRef = useRef<HTMLInputElement | null>(null);

  // function handleImageChange() {
  //   const inputValue = inputRef.current?.value;
  //   if (inputValue) {
  //     setNewImage(inputValue);
  //     setMyPlaylist((prevPlaylist) => [
  //       {
  //         file: prevPlaylist[0].file,
  //         image: inputValue,
  //       },
  //     ]);
  //   }
  // }

  return (
    <div style={{ width: "100%", height: "340px" }}>
      <JWPlayer
        library="https://cdn.jwplayer.com/libraries/T5EQoSVW.js"
        playlist={myPlaylist}
      />
      <h3>MP3</h3>

      {/* <form style={{ marginTop: "10px" }}>
        <input ref={inputRef} type="text" />
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleImageChange}
        >
          Change
        </Button>
      </form>
      <img src={myPlaylist[0].image} alt="" /> */}
    </div>
  );
}

export default VideoMP3;

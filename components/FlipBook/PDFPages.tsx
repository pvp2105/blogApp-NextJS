import React, { useState, useRef, useEffect } from "react";
import { usePdf } from "@mikecousins/react-pdf";
// import { usePdf } from "react-pdf-js";

interface IMyPdfViewer {
  mypage: number;
  urlFile: string;
}
const MyPdfViewer = React.forwardRef(
  // sử dụng React.forwardRef, bạn có thể chuyển tham chiếu từ component cha xuống component con thông qua thuộc tính ref.
  ({ mypage, urlFile }: IMyPdfViewer, ref) => {
    const canvasRef = useRef(null);

    const { pdfDocument, pdfPage } = usePdf({
      file: urlFile,
      page: mypage,
      canvasRef,
    });

    // console.log(pdfDocument?._pdfInfo?.numPages);

    useEffect(() => {
      if (ref && typeof ref === "function") {
        ref(canvasRef.current); // Call the forwarded ref function with the canvas element
      } else if (ref && typeof ref === "object") {
        ref.current = canvasRef.current; // Assign the canvas element to the forwarded ref object's current property
      }
    }, [ref]);

    return (
      <div>
        <canvas ref={canvasRef} />
      </div>
    );
  }
);

MyPdfViewer.displayName = "MyPdfViewer";

export default MyPdfViewer;

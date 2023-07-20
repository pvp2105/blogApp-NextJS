import HTMLFlipBook from "react-pageflip";
import { useRef, useEffect } from "react";
// import { usePdf } from "react-pdf-js";
import { usePdf } from "@mikecousins/react-pdf";
import MyPdfViewer from "./PDFPages";

function BookFlip() {
  const fileUrl =
    "https://uploads.codesandbox.io/uploads/user/de43cd8a-02d5-47fa-8594-378ee2cf3b44/67Ax-sample.pdf";

  const canvasRef = useRef(null);

  const { pdfDocument } = usePdf({
    file: fileUrl,
    canvasRef,
  });

  const numOfPage = pdfDocument?._pdfInfo?.numPages;

  return (
    <div style={{ marginTop: "100px", marginLeft: "200px" }}>
      <HTMLFlipBook
        width={500}
        height={700}
        maxShadowOpacity={1.0}
        showCover
        mobileScrollSupport
        startPage={0}
        size={"fixed"}
        minWidth={0}
        maxWidth={0}
        minHeight={0}
        maxHeight={0}
        drawShadow={true}
        flippingTime={1500}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={0}
        showPageCorners={true}
        disableFlipByClick={false}
        className={""}
        style={{}}
      >
        {Array.from({ length: numOfPage }, (_, i) => i + 1).map(
          (currentPage, index) => (
            <MyPdfViewer key={index} mypage={currentPage} urlFile={fileUrl} />
          )
        )}
      </HTMLFlipBook>
    </div>
  );
}

export default BookFlip;

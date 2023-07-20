import BookFlip from "@/components/FlipBook/FlipBook";
import MyPdfViewer from "@/components/FlipBook/PDFReact";
import { MainLayout } from "@/components/layout";
import * as React from "react";

export interface BookPageProps {}

export default function BookPage(props: BookPageProps) {
  // const fileUrl =
  //   "https://uploads.codesandbox.io/uploads/user/de43cd8a-02d5-47fa-8594-378ee2cf3b44/67Ax-sample.pdf";

  return (
    <div>
      <BookFlip />
      {/* <MyPdfViewer /> */}
    </div>
  );
}

BookPage.getLayout = (children: any) => {
  return <MainLayout>{children}</MainLayout>;
};

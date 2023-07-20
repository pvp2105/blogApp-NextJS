import BookFlip from "@/components/FlipBook/FlipBook";
import { MainLayout } from "@/components/layout";
import * as React from "react";
import styles from "../styles/Home.module.css";

export interface BookPageProps {}

export default function BookPage(props: BookPageProps) {
  // const fileUrl =
  //   "https://uploads.codesandbox.io/uploads/user/de43cd8a-02d5-47fa-8594-378ee2cf3b44/67Ax-sample.pdf";

  return (
    <div className={styles.myBook}>
      <BookFlip />
    </div>
  );
}

BookPage.getLayout = (children: any) => {
  return <MainLayout>{children}</MainLayout>;
};

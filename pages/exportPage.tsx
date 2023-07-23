import { MainLayout } from "@/components/layout";
import * as React from "react";
import { Typography, Grid } from "@mui/material";
import ExportCLSX from "@/components/exportExcel/ExportXLSX";
import styles from "../styles/Home.module.css";

export interface ExportProps {}

export default function Export(props: ExportProps) {
  return (
    <div>
      <Typography component="h2" variant="h5" fontWeight="bold" mb={5}>
        Export Pages <br />
      </Typography>
      <div className={styles.myExport}>
        <ExportCLSX />
      </div>
    </div>
  );
}

Export.getLayout = (children: any) => {
  return <MainLayout>{children}</MainLayout>;
};

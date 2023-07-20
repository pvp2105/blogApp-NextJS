import { MainLayout } from "@/components/layout";
import * as React from "react";
import { Typography, Grid } from "@mui/material";
import VideoM3U8 from "@/components/JWPlayer/JWPlayerM3U8";
import VideoMP4 from "@/components/JWPlayer/JWPlayerMp4";
import VideoMP3 from "@/components/JWPlayer/JWPlayerMp3";

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  return (
    <div>
      <Typography component="h2" variant="h5" fontWeight="bold" mb={5}>
        Video Pages <br />
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ flexGrow: 1, gap: 2 }}
        style={{ justifyContent: "center" }}
      >
        <Grid xs={6} md={4}>
          <VideoM3U8 />
        </Grid>
        <Grid xs={6} md={4}>
          <VideoMP4 />
        </Grid>
        <Grid xs={6} md={4}>
          <VideoMP3 />
        </Grid>
      </Grid>
    </div>
  );
}

WorksPage.getLayout = (children: any) => {
  return <MainLayout>{children}</MainLayout>;
};

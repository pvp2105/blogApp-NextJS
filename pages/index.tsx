import type { NextPage } from "next";
import { Box } from "@mui/material";
import styles from "../styles/Home.module.css";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "./_app";
import { HeroSection } from "@/components/home";

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
};

export default Home;

Home.getLayout = (children) => {
  return <MainLayout>{children}</MainLayout>;
};

// Home.getLayout = (children) => {
//   return <Box sx={{ p: 5, background: "red" }}>{children}</Box>;
// };

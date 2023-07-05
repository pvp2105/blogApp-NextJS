import { LayoutProps } from "@/models/common";
import * as React from "react";
import Link from "next/link";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Footer, Header } from "../common";

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
    </Stack>
  );
}

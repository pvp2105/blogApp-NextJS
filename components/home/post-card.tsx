import { Card, CardContent, Divider, Typography, Stack } from "@mui/material";
import * as React from "react";
import { Post } from "@/models";
import { format } from "date-fns";

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>

        <Stack direction="row" mb={2} alignItems="center">
          <Typography variant="body1" my={2} sx={{ display: "flex" }}>
            {format(Number(post.publishedDate), "dd MMM yyyy")}
          </Typography>

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          {post.tagList.join(", ")}
        </Stack>
        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}

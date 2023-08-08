import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

interface ExerciseVideosProps {
  exerciseVideos: any;
  name: string;
}

const ExerciseVideos = ({ exerciseVideos, name }: ExerciseVideosProps) => {
  if (!exerciseVideos.length) {
    return <p>Loading</p>;
  }
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, 3).map((item: any, index: number) => (
          <Link
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={item.video.thumbnails[0].url}
              alt={name}
              height={250}
              width={250}
            />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

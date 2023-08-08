"use client";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "@/utils/fetchData";
import Detail from "@/components/Detail";
import SimilarExercises from "@/components/SimilarExercises";
import ExerciseVideos from "@/components/ExerciseVideos";

type ExerciseType = {
  bodyPart: "string";
  equipment: "string";
  gifUrl: "string";
  id: "string";
  name: "string";
  target: "string";
};

const ExerciseDetailsPage = ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseType | any>({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  useEffect(() => {
    const fetExerciseData = async () => {
      const details = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(details);

      const videos = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${details.name}`,
        youtubeOptions
      );
      setExerciseVideos(videos.contents);
    };
    fetExerciseData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetailsPage;

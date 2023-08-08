"use client";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "@/utils/fetchData";
import ExerciseCard from "./ExerciseCard";

interface ExercisesProps {
  setExercises: (data: []) => void;
  bodyPart: string;
  exercises: any;
}

const Exercises = ({ setExercises, bodyPart, exercises }: ExercisesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const EXERCISE_PER_PAGE = 10;
  const currentExercises = exercises.slice(
    currentPage * EXERCISE_PER_PAGE - EXERCISE_PER_PAGE,
    currentPage * EXERCISE_PER_PAGE
  );

  const paginate = (e: any, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      if (bodyPart) {
        const exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );

        setExercises(exercisesData);
      }
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id={exercises} sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise: any, index: number) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 10 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / EXERCISE_PER_PAGE)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

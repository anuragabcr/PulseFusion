"use client";
import Image from "next/image";
import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "@/components/HeroBanner";
import SearchExercises from "@/components/SearchExercises";
import Exercises from "@/components/Exercises";

export default function Home() {
  const [bodyPart, setBodyPart] = useState("Chest");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
}

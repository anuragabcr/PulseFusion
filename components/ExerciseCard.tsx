import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Stack, Typography } from "@mui/material";

interface ExerciseCardProps {
  exercise: any;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link className="exercise-card" href={`/exercise/${exercise.id}`}>
      <Image
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        width={250}
        height={250}
      />
      <Stack direction="row">
        <Typography
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            padding: "10px",
          }}
        >
          {exercise.bodyPart}
        </Typography>
        <Typography
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            padding: "10px",
          }}
        >
          {exercise.target}
        </Typography>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="18px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

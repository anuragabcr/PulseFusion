import React from "react";

interface ExercisesProps {
  setExercises: (data: []) => void;
  bodyPart: string;
  setBodyPart: (data: string) => void;
}

const Exercises = ({ setExercises, bodyPart, setBodyPart }: ExercisesProps) => {
  return <div>Exercises</div>;
};

export default Exercises;

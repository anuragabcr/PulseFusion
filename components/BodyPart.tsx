import { Stack, Typography } from "@mui/material";
import Image from "next/image";

import Icon from "@/public/icons/gym.png";

interface BodyPartProps {
  bodyPart: string;
  setBodyPart: (data: string) => void;
  item: string;
}

const BodyPart = ({ bodyPart, setBodyPart, item }: BodyPartProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#b7d7ad",
        borderBottomLeftRadius: "20px",
        margin: "20px",
        width: "200px",
        height: "250px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Image src={Icon} alt="icon" height="40" width="40" />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;

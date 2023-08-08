import { Typography, Stack, Button } from "@mui/material";
import Image from "next/image";

import BodyPartImage from "@/public/icons/body-part.png";
import TargetImage from "@/public/icons/target.png";
import EquipmentImage from "@/public/icons/equipment.png";

interface DetailPrps {
  exerciseDetail: any;
}

const Detail = ({ exerciseDetail }: DetailPrps) => {
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: exerciseDetail.bodyPart,
    },
    {
      icon: TargetImage,
      name: exerciseDetail.target,
    },
    {
      icon: EquipmentImage,
      name: exerciseDetail.equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <Image
        src={exerciseDetail.gifUrl}
        alt="exercise"
        loading="lazy"
        className="detail-image"
        width={400}
        height={400}
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">
          {exerciseDetail.name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {exerciseDetail.name} is one of the best
          exercises to target your {exerciseDetail.target}. It will help you
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <Image src={item.icon} alt={item.name} width={50} height={50} />
            </Button>
            <Typography variant="h5" textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;

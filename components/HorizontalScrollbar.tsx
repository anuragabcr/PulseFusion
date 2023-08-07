import { Box } from "@mui/material";

import BodyPart from "./BodyPart";

interface HorizontalScrollbarProps {
  data: any;
  bodyPart: any;
  setBodyPart: (data: string) => void;
}

const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
}: HorizontalScrollbarProps) => {
  return (
    <div style={{ width: "100%", overflowX: "auto", whiteSpace: "nowrap" }}>
      {data.map((item: any, index: number) => (
        <div key={index} style={{ display: "inline-block" }}>
          <Box>
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;

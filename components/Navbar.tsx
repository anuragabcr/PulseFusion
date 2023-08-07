import Link from "next/link";
import { Stack } from "@mui/material";
import Image from "next/image";

import Logo from "@/public/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link href="/">
        <Image src={Logo} alt="logo" />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <Link
          href="#excercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Excercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;

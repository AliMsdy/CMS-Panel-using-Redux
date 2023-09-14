import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ customcolor, theme }) => {
  return {
    backgroundColor: customcolor,
    padding: "0.3rem",
    color: "#fff",
    [theme.breakpoints.up("sm")]: {
      padding: "0.5rem",
    },
    "&:hover": { backgroundColor: customcolor },
  };
});

export default StyledButton;

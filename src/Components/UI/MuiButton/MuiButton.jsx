import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled((props) => (
  <Button variant="contained" size={props.size} {...props}>
    {props.children}
  </Button>
))(({ customcolor, theme }) => {
  return {
    backgroundColor: customcolor,
    padding: "0.2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0.5rem",
    },
    "&:hover": { backgroundColor: customcolor },
  };
});

export default StyledButton;

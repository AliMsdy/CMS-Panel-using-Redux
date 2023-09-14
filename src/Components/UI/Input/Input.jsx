import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const PasswordInput = styled((props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor={`outlined-adornment-password-${props.id}`} shrink>
        {props.label}
      </InputLabel>
      <OutlinedInput
        sx={{ padding: { xs: "0 10px", sm: "0 14px" } }}
        id={`outlined-adornment-password-${props.id}`}
        type={showPassword ? "text" : "password"}
        startAdornment={
          <InputAdornment position="end">{props.icon}</InputAdornment>
        }
        endAdornment={
          <InputAdornment position="start">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="start"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={props.label}
      />
    </FormControl>
  );
})(() => ({}));

const InfoInput = styled((props) => {
  return (
    <TextField
      label={props.label}
      type={props.type}
      dir={props.type === "email" ? "ltr" : "rtl"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{props.icon}</InputAdornment>
        ),
      }}
      {...props}
    />
  );
})(() => ({}));

export { InfoInput, PasswordInput };

// endAdornment: props.type === "password" && (
//     <InputAdornment position="end">
//       <IconButton
//       //   onClick={handleClickShowPassword}
//       //   onMouseDown={handleMouseDownPassword}
//       >
//         {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
//       </IconButton>
//     </InputAdornment>
//   ),

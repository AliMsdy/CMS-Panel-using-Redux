//component
import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

//icon
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CloseIcon from "@mui/icons-material/Close";
import GroupIcon from "@mui/icons-material/Group";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PersonIcon from "@mui/icons-material/Person";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "90%",
  backgroundColor: "background.default",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

let inputArray = [
  { label: "نام", icon: <PersonIcon />, type: "text", data: "firstname" },
  {
    label: "نام خانوادگی",
    icon: <GroupIcon />,
    type: "text",
    data: "lastname",
  },
  {
    label: "نام کاربری",
    icon: <PermContactCalendarIcon />,
    type: "text",
    data: "username",
  },
  { label: "email", icon: <LanguageIcon />, type: "email", data: "email" },
  {
    id: 1,
    label: "سن",
    icon: <AccessibilityNewIcon />,
    type: "number",
    data: "age",
  },
  { id: 1, label: "شهر", icon: <LocationOnIcon />, type: "text", data: "city" },
];

function UserModalInfo({ modalStatus, setModalStatus, userInfo }) {
  let modifiedArray = inputArray.map((input) => ({
    ...input,
    data: userInfo[input.data],
  }));
  return (
    <Modal
      open={modalStatus}
      onClose={() => setModalStatus(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 1000,
        },
      }}
    >
      <Fade in={modalStatus}>
        <Box sx={style}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="mb-4"
          >
            <Typography>اطلاعات</Typography>
            <IconButton onClick={() => setModalStatus(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack spacing={2}>
            {modifiedArray.map((input) => (
              <TextField
                disabled
                defaultValue={input.data}
                key={input.label}
                label={input.label}
                type={input.type}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {input.icon}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}

export default UserModalInfo;

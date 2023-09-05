import { Button, TextField, InputAdornment } from "@mui/material";

//components
import UserBox from "../../Components/UserBox/UserBox";

//icons
import SearchIcon from "@mui/icons-material/Search";

function Users() {
  return (
    <div className="px-4 py-8">
      <div className="mb-12 flex flex-col justify-between space-y-5 sm:flex-row sm:space-y-0">
        <TextField
          placeholder="نام یا ایمیل کاربر را وارد کنید"
          label="نام یا ایمیل"
          dir="ltr"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#3e3e42",
            color: "white",
            px: 5,
            "&:hover": { backgroundColor: "#3e3e42" },
          }}
        >
          حذف کاربر
        </Button>
      </div>

      <UserBox />
      <UserBox />
    </div>
  );
}

export default Users;

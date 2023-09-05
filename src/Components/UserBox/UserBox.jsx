import { Grid, Button } from "@mui/material";

import profilePic from "/img/admin/profile/banana.png";

function UserBox() {
  return (
    <Grid
      className="mt-4 flex border-2 border-[#676879] p-4"
      container
      direction="row"
    >
      <Grid item xs={12} md={6}>
        <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0">
          <div className="w-[50%] sm:w-[25%]">
            <img src={profilePic} className="h-auto max-w-[100%]" alt="" />
          </div>
          <div className="text-center sm:mr-4 sm:text-right">
            <p className="text-sm">محمد امین سعیدی راد</p>
            <p className="mt-1 text-sm">alimoosabadi1380@gmail.com</p>
          </div>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="mt-4 flex gap-x-2 lg:mt-2">
          <Button
            variant="contained"
            sx={{ bgcolor: "#676879", "&:hover": { bgcolor: "#676879" } }}
          >
            پیام ها
          </Button>
          <Button variant="contained">اطلاعات</Button>
          <Button variant="contained" color="error">
            حذف
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default UserBox;

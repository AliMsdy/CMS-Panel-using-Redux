import { Grid, Box, Stack, Typography, Button } from "@mui/material";

function UserBox({ first_name, last_name, email, profile_picture }) {
  return (
    <Grid
      className="mt-4 flex border-2 border-[#676879] p-4"
      container
      direction="row"
    >
      {/* user infos */}
      <Grid item xs={12} md={6}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          className="gap-y-4 sm:gap-y-0"
        >
          <div className="w-[50%] sm:w-[25%]">
            <img
              src={profile_picture}
              className="h-auto max-w-[100%]"
              alt="profile-pic"
            />
          </div>
          <div className="text-center sm:mr-4 sm:text-right">
            <Typography gutterBottom>
              {first_name} {last_name}
            </Typography>
            <Typography variant="body2">{email}</Typography>
          </div>
        </Stack>
      </Grid>

      {/* user operation buttons */}
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
        <Box className="mt-4 flex gap-x-2 lg:mt-2">
          <Button color="secondary">پیام ها</Button>
          <Button color="primary">اطلاعات</Button>
          <Button color="error">حذف</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserBox;

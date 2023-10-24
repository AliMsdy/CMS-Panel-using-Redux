import { Box, Grid, Skeleton, Stack } from "@mui/material";

function UserSkeletonLoading() {
  return (
    <Grid
      className="my-4 border-2 border-[#676879] p-4"
      container
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          className="gap-y-4 sm:gap-y-0"
        >
          <div className="w-[50%] sm:w-[35%]">
            <Skeleton
              animation="wave"
              variant="rounded"
              height={80}
              width="100%"
            />
          </div>
          <div className="flex w-[100%] flex-col items-center sm:mr-4 sm:items-start">
            <Skeleton animation="wave" width="40%" />
            <Skeleton animation="wave" width="70%" />
          </div>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box className="mt-4 flex gap-x-4 lg:mt-2">
          <Skeleton width={70} height={70} />
          <Skeleton width={70} height={70} />
          <Skeleton width={70} height={70} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default UserSkeletonLoading;

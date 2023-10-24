import { Box, Button, Grid, Stack, Typography } from "@mui/material";

//icon

import profilePic from "/img/admin/profile/banana.png";

import { useDispatch } from "react-redux";

import { useState } from "react";
import UserModalInfo from "../../Pages/Users/UserModalInfo";
import removeUserHandler from "../../helper/removeUserHandler";

function UserBox({ userInfo,setValue,setSearchedUser }) {
  const dispatch = useDispatch();
  const [modalStatus, setModalStatus] = useState(false);
  const { firstname, lastname, email, _id } = userInfo;

  const removeUser = async () => {
    const isDeleted = await removeUserHandler(_id, dispatch);
      if (isDeleted) {
        setValue("");
        setSearchedUser([]);
      }
  }

  return (
    <>
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
                src={profilePic}
                className="h-auto max-w-[100%]"
                alt="profile-pic"
              />
            </div>
            <div className="text-center sm:mr-4 sm:text-right">
              <Typography gutterBottom>
                {firstname} {lastname}
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
            <Button color="primary" onClick={() => setModalStatus(true)}>
              اطلاعات
            </Button>
            <Button
              color="error"
              onClick={removeUser}
            >
              حذف
            </Button>
          </Box>
        </Grid>
      </Grid>
      {modalStatus && (
        <UserModalInfo
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          userInfo={userInfo}
        />
      )}
    </>
  );
}

export default UserBox;

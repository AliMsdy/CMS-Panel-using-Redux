import { Typography } from "@mui/material";

function Profile({ width, margin, border, responsiveMenu }) {
  return (
    <>
      <div className={width}>
        <img
          className={`mx-auto h-auto max-w-[100%] rounded-md ${
            border && "border-8"
          } border-slate-700 `}
          src="/img/admin/profile/banana.png"
          alt="profile-pic"
        />
      </div>
      <div className={`${margin} text-center`}>
        <Typography
          sx={{ color: responsiveMenu ? "#fff" : "text.primary" }}
          variant="h6"
        >
          محمد امین سعیدی راد
        </Typography>
        <Typography
          sx={{ color: responsiveMenu ? "#fff" : "text.primary" }}
          variant="body2"
        >
          توسعه دهنده جاوااسکریپت
        </Typography>
      </div>
    </>
  );
}

export default Profile;

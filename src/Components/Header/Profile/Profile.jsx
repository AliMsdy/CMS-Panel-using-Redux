import React from "react";

function Profile({ width, margin, border }) {
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
        <h4 className="text-xl font-bold">محمد امین سعیدی راد</h4>
        <p>توسعه دهنده جاوااسکریپت</p>
      </div>
    </>
  );
}

export default Profile;

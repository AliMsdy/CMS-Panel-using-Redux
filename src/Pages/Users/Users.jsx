import { Button, TextField, InputAdornment } from "@mui/material";

//components
import UserBox from "../../Components/UserBox/UserBox";

//icons
import SearchIcon from "@mui/icons-material/Search";

import { useSelector } from "react-redux";
import { useState } from "react";

function Users() {
  const [searchedUser, setSearchedUser] = useState([]);
  const users = useSelector((state) => state.users);

  const searchUserHandler = ({ target: { value } }) => {
    const searchedItem = value.toLowerCase();
    const searchedUserArray = [];
    users.forEach((user) => {
      const { first_name, last_name, email } = user;
      const fullName = `${first_name.toLowerCase()} ${last_name.toLowerCase()}`;
      if (fullName.includes(searchedItem) || email.includes(searchedItem)) {
        // console.log(user);
        searchedUserArray.push(user);
      }
    });
    // console.log(searchedUserArray);
    setSearchedUser(searchedUserArray);
  };

  return (
    <div className="h-[500px] overflow-y-scroll px-4 py-8">
      {/* users setting (delete user button and search users) */}
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
          spellCheck={false}
          onChange={searchUserHandler}
        />
        <Button color="error" sx={{ px: 5 }}>
          حذف کاربر
        </Button>
      </div>

      {searchedUser.length
        ? searchedUser.map((user) => <UserBox key={user.id} {...user} />)
        : users.map((user) => <UserBox key={user.id} {...user} />)}
    </div>
  );
}

export default Users;

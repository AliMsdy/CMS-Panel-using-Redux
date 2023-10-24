//Mui components
import { Button, InputAdornment, TextField } from "@mui/material";

import { Suspense, lazy, useEffect, useState, useTransition } from "react";
import UserSkeletonLoading from "../../Components/UI/Loading/UserSkeletonLoading";

//components
const UsersList = lazy(() => import("./UsersList"));

//icons
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";

//actions
import { getUsersFromServer } from "../../Redux/features/users/users";

function Users() {
  const [searchedUser, setSearchedUser] = useState([]);
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const searchUserHandler = ({ target: { value } }) => {
    setValue(value);
    const searchedItem = value.toLowerCase();
    const searchedUserArray = [];
    users.forEach((user) => {
      const { firstname, lastname, email } = user;
      const fullName = `${firstname.toLowerCase()} ${lastname.toLowerCase()}`;
      if (fullName.includes(searchedItem) || email.includes(searchedItem)) {
        searchedUserArray.push(user);
      }
    });
    startTransition(() => setSearchedUser(searchedUserArray));
  };

  useEffect(() => {
    // this is for avoiding to send the request to the server when component mounted
    // if (!users.length) dispatch(getUsersFromServer());
    dispatch(getUsersFromServer());
  }, []);

  const list = searchedUser.length ? searchedUser : users;
  const loadingMarkup = Array.from(new Array(5)).map((_, index) => (
    <UserSkeletonLoading key={index} />
  ));

  return (
    <div className="custom-scroll h-[500px] overflow-y-scroll px-4 py-8">
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
          value={value}
          onChange={searchUserHandler}
        />
        <Button color="error" sx={{ px: 5 }}>
          حذف کاربر
        </Button>
      </div>
      <Suspense fallback={loadingMarkup}>
        <UsersList list={list} />
      </Suspense>
    </div>
  );
}

export default Users;

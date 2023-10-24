//Mui components
import { Button, InputAdornment, Stack, TextField } from "@mui/material";

import { Suspense, lazy, useEffect, useState, useTransition } from "react";
import UserSkeletonLoading from "../../Components/UI/Loading/UserSkeletonLoading";

//components
const UsersList = lazy(() => import("./UsersList"));
import CreateUserModalForm from "./CreateUserModalForm";

//icons
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";

//actions
import { getUsersFromServer } from "../../Redux/features/users/users";
import removeUserHandler from "../../helper/removeUserHandler";

function Users() {
  const [searchedUser, setSearchedUser] = useState([]);
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const [modalStatus,setModalStatus] = useState(false)
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

  const deleteUserHandler = async () => {
    if (value && searchedUser.length === 1) {
      const isDeleted = await removeUserHandler(searchedUser[0]._id, dispatch);
      if (isDeleted) {
        setValue("");
        setSearchedUser([]);
      }
    }
  };

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
          helperText={
            value && !searchedUser.length ? (
              <span className="text-red-800">user not found !</span>
            ) : (
              ""
            )
          }
        />
        <Stack direction={{ md: "row" }} gap={2}>
          <Button onClick={() => setModalStatus(true)}>ایجاد کاربر</Button>
          <Button color="error" onClick={deleteUserHandler}>
            حذف کاربر
          </Button>
        </Stack>
      </div>
      <Suspense fallback={loadingMarkup}>
        <UsersList
          setValue={setValue}
          setSearchedUser={setSearchedUser}
          list={list}
        />
      </Suspense>
      {modalStatus && (
        <CreateUserModalForm
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
        />
      )}
    </div>
  );
}

export default Users;

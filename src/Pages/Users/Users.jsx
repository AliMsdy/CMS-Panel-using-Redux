//Mui components
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { CheckboxWithLabel, TextField as InputField } from "formik-mui";

import { Suspense, lazy, useEffect, useState, useTransition } from "react";
import * as yup from "yup";
import UserSkeletonLoading from "../../Components/UI/Loading/UserSkeletonLoading";

//components
const UsersList = lazy(() => import("./UsersList"));

//icons
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch, useSelector } from "react-redux";

//actions
import ModalForm from "../../Components/ModalForm/ModalForm";
import {
  createUserInServer,
  getUsersFromServer,
} from "../../Redux/features/users/users";
import removeUserHandler from "../../helper/removeUserHandler";

const userInputsInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  city: "",
  age: "",
  confirmation: false,
};

const validationSchema = yup.object().shape({
  firstname: yup.string().required("نام کاربر را وارد کنید"),
  lastname: yup.string().required("نام خانوادگی کاربر را وارد کنید"),
  username: yup.string().required("نام کاربری را وارد کنید"),
  email: yup
    .string()
    .email("ایمیل وارد شده معتبر نمیباشد")
    .required("ایمیل کاربر را وارد کنید"),
  city: yup.string().required("شهر کاربر را وارد کنید"),
  age: yup
    .number()
    .min(0, "سن وارد شده خارج از محدوده میباشد")
    .required("سن کاربر را وارد کنید"),
  confirmation: yup
    .boolean()
    .default(false)
    .isTrue("اضافه شدن کاربر را تایید کنید"),
});

const createUserInputs = [
  {
    name: "firstname",
    props: { component: InputField, type: "text", label: "نام" },
  },
  {
    name: "lastname",
    props: { component: InputField, type: "text", label: "نام خانوادگی" },
  },
  {
    name: "username",
    props: { component: InputField, type: "text", label: "نام کاربری" },
  },
  {
    name: "email",
    props: { component: InputField, type: "email", label: "ایمیل" },
  },
  {
    name: "city",
    props: { component: InputField, type: "text", label: "شهر کاربر" },
  },
  {
    name: "age",
    props: { component: InputField, type: "number", label: "سن کاربر" },
  },
  {
    name: "confirmation",
    props: {
      type: "checkbox",
      component: CheckboxWithLabel,
      Label: {
        label: "با افزودن این کاربر به لیست کاربر های سایت موافقت میکنم",
      },
    },
  },
];

function Users() {
  const [searchedUser, setSearchedUser] = useState([]);
  const [value, setValue] = useState("");
  const [_, startTransition] = useTransition();
  const [modalStatus, setModalStatus] = useState(false);
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
        <ModalForm
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          type="کاربر"
          inputs={createUserInputs}
          initialValues={userInputsInitialValues}
          validationSchema={validationSchema}
          submitForm={(data) => dispatch(createUserInServer(data))}
        />
      )}
    </div>
  );
}

export default Users;

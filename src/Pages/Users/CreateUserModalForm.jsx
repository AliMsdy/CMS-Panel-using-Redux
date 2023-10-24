//component
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

// icon
import CloseIcon from "@mui/icons-material/Close";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { CheckboxWithLabel, TextField } from "formik-mui";

//toast Context
import { ToastContext } from "../../context/ToastContext";

//actions
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { createUserInServer } from "../../Redux/features/users/users";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  width: "90%",
  backgroundColor: "background.default",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const userInputs = [
  { name: "firstname", type: "text", label: "نام" },
  { name: "lastname", type: "text", label: "نام خانوادگی" },
  { name: "username", type: "text", label: "نام کاربری" },
  { name: "email", type: "email", label: "ایمیل" },
  { name: "city", type: "text", label: "شهر کاربر" },
  { name: "age", type: "number", label: "سن کاربر" },
];

function CourseModalForm({ modalStatus, setModalStatus }) {
  const dispatch = useDispatch();
  const { setToastSettings } = useContext(ToastContext);

  return (
    <Modal
      open={modalStatus}
      onClose={() => setModalStatus(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 1000,
        },
      }}
    >
      <Fade in={modalStatus}>
        <Box sx={style}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="mb-2"
          >
            <Typography>اطلاعات کاربر را وارد کنید</Typography>
            <IconButton onClick={() => setModalStatus(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                username: "",
                email: "",
                city: "",
                age: "",
                confirmation: false,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                // console.log(values);
                delete values["confirmation"];
                await dispatch(createUserInServer(values))
                actions.setSubmitting(false);
                setModalStatus(false);
                setToastSettings({
                  status: true,
                  msg: "کاربر با موفقیت اضافه شد",
                  type: "success",
                });
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <Stack spacing={1}>
                    {userInputs.map(({ name, type, label }) => (
                      <Field
                        key={name}
                        component={TextField}
                        name={name}
                        type={type}
                        label={label}
                      />
                    ))}
                    <Field
                      component={CheckboxWithLabel}
                      type="checkbox"
                      name="confirmation"
                      Label={{
                        label:
                          "با افزودن این کاربر به لیست کاربر های سایت موافقت میکنم",
                      }}
                    />
                    <ErrorMessage
                      name="confirmation"
                      render={(msg) => (
                        <Typography
                          sx={{
                            color: "#ce0000",
                            pr: "24px",
                            fontSize: "14px",
                          }}
                        >
                          {msg}
                        </Typography>
                      )}
                    />
                    <Button onClick={submitForm} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <CircularProgress color="success" />
                      ) : (
                        "ثبت کاربر"
                      )}
                    </Button>

                    {/* this is for debugging ↓↓ */}
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
}

export default CourseModalForm;

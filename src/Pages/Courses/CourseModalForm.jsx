//component
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Fade,
  IconButton,
  MenuItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";

// icon
import CloseIcon from "@mui/icons-material/Close";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { styled } from "@mui/system";
import { CheckboxWithLabel, Select, TextField } from "formik-mui";

//toast Context
import {ToastContext} from "../../context/ToastContext"

//actions
import { createCourseInTheServer } from "../../Redux/features/courses/courses";

import { useDispatch } from "react-redux";
import { useContext } from "react";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};
const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const validationSchema = yup.object().shape({
  title: yup.string().required("عنوان دوره الزامی است"),
  price: yup.string().required("قیمت دوره را وارد کنید"),
  category: yup.string().required("دسته بندی دوره را انتخاب کنید"),
  discount: yup
    .number()
    .max(100, "عدد وارد شده خارج از محدوده میباشد")
    .min(0, "عدد وارد شده خارج از محدوده میباشد"),
  desc: yup.string().required("یک توضیح مختصر درباره دوره وارد کنید"),
  confirmation: yup
    .boolean()
    .default(false)
    .isTrue("اضافه شدن دوره را تایید کنید"),
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

function CourseModalForm({ modalStatus, setModalStatus }) {
  const dispatch = useDispatch();
  const {setToastSettings} = useContext(ToastContext)

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
            <Typography>اطلاعات دوره را وارد کنید</Typography>
            <IconButton onClick={() => setModalStatus(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack>
            <Formik
              initialValues={{
                title: "",
                price: "",
                category: "",
                registersCount: 0,
                discount: "",
                desc: "",
                confirmation: false,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values,actions) => {
                delete values["confirmation"];
                values["price"] = parseInt(values.price.replace(/,/g,""))
                await dispatch(createCourseInTheServer(values));
                actions.setSubmitting(false)
                setModalStatus(false)
                setToastSettings({status: true,msg: "دوره با موفقیت اضافه شد", type: "success"})
              }}
            >
              {({
                submitForm,
                isSubmitting,
                values,
                handleChange,
                handleBlur,
                setFieldValue,
              }) => (
                <Form>
                  <Stack spacing={1}>
                    <Field
                      component={TextField}
                      name="title"
                      type="text"
                      label="عنوان دوره"
                    />
                    <Field
                      component={TextField}
                      name="price"
                      type="text"
                      inputmode="numeric"
                      pattern="[0-9]+"
                      label="قیمت دوره (تومان)"
                      onChange={(e) => {
                        if (e.target.value !== "") {
                          const rawValue = e.target.value;
                          const cleanedValue = rawValue.replace(/,/g, ""); // Remove existing commas
                          const numericValue = parseFloat(cleanedValue);

                          if (!isNaN(numericValue)) {
                            const formattedValue =
                              numericValue.toLocaleString(); // Format with commas
                            setFieldValue("price", formattedValue);
                          }
                        } else {
                          setFieldValue("price", 0);
                        }
                      }}
                    />
                    <Field
                      component={Select}
                      name="category"
                      type="number"
                      label="دسته بندی دوره"
                    >
                      <MenuItem value="فرانت اند">فرانت اند</MenuItem>
                      <MenuItem value="بک اند">بک اند</MenuItem>
                      <MenuItem value="امنیت و شبکه">امنیت و شبکه</MenuItem>
                      <MenuItem value="بلاکچین">بلاکچین</MenuItem>
                    </Field>
                    <Field
                      component={TextField}
                      name="discount"
                      type="number"
                      label="تخفیف دوره %"
                    />

                    <StyledTextarea
                      name="desc"
                      minRows={5}
                      placeholder="توضیحی مختصر درباره دوره..."
                      value={values.desc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      spellCheck="false"
                    />
                    <ErrorMessage
                      name="desc"
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
                    <Field
                      component={CheckboxWithLabel}
                      type="checkbox"
                      name="confirmation"
                      Label={{
                        label:
                          "با افزودن این دوره به لیست دوره های سایت موافقت میکنم",
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
                        "ثبت دوره"
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

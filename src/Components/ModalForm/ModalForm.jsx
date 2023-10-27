//component
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

import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

// icon
import CloseIcon from "@mui/icons-material/Close";

import { ErrorMessage, Field, Form, Formik } from "formik";

//toast Context
import { ToastContext } from "../../context/ToastContext";

//actions
import { Fragment, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesFromServer } from "../../Redux/features/categories/category";

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

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 12px;
        border-radius: 12px 12px 0 12px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${
          theme.palette.mode === "dark" ? grey[700] : grey[200]
        };
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

const ErrorMessageComponent = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
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
  );
};

function ModalForm({
  modalStatus,
  setModalStatus,
  type,
  inputs,
  initialValues,
  validationSchema,
  submitForm,
}) {
  const { setToastSettings } = useContext(ToastContext);

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (["دوره", "مقاله"].includes(type)) {
      dispatch(getCategoriesFromServer());
    }
  }, []);

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
            <Typography>اطلاعات {type} را وارد کنید</Typography>
            <IconButton onClick={() => setModalStatus(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                delete values["confirmation"];
                await submitForm(values);
                actions.setSubmitting(false);
                setModalStatus(false);
                setToastSettings({
                  status: true,
                  msg: `${type} با موفقیت اضافه شد`,
                  type: "success",
                });
              }}
            >
              {({
                submitForm,
                isSubmitting,
                values,
                handleBlur,
                handleChange,
              }) => (
                <Form>
                  <Stack spacing={1}>
                    {inputs.map(({ name, props }) => {
                      switch (name) {
                        case "desc":
                          return (
                            <Fragment key={name}>
                              <StyledTextarea
                                name={name}
                                value={values.desc}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                {...props}
                              />
                              <ErrorMessageComponent name={name} />
                            </Fragment>
                          );
                        case "category":
                          return (
                            <Field key={name} name={name} {...props}>
                              {categories.map(({ _id, title }) => (
                                <MenuItem key={_id} value={title}>
                                  {title}
                                </MenuItem>
                              ))}
                            </Field>
                          );
                        case "confirmation":
                          return (
                            <Fragment key={name}>
                              <Field name={name} {...props} />
                              <ErrorMessageComponent name={name} />
                            </Fragment>
                          );
                        default:
                          return <Field key={name} name={name} {...props} />;
                      }
                    })}
                    <Button onClick={submitForm} disabled={isSubmitting}>
                      {isSubmitting ? (
                        <CircularProgress color="success" />
                      ) : (
                        `ثبت ${type}`
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

export default ModalForm;

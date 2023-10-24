import { IconButton, Slide, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
//icon
import CloseIcon from "@mui/icons-material/Close";
import { createContext, forwardRef, useState } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props) {
  return <Slide  {...props} direction="left" />;
}

export const ToastContext = createContext();

function Toast({ children }) {
  const [toast, setToast] = useState({status: false,msg: "", type: null});
  const handleCloseToast = () => {
    setToast({...toast,status: false,msg: ""})
  }

  const setToastSettings = ({status,msg,type}) => {
    status ? setToast({status,msg,type}) : handleCloseToast()
    }

  return (
    <ToastContext.Provider value={{ setToastSettings }}>
      {children}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ direction: "ltr" }}
        open={toast.status}
        onClose={handleCloseToast}
        TransitionComponent={SlideTransition}
        autoHideDuration={4000}
      >
        <Alert
          onClose={handleCloseToast}
          severity={toast.type}
          action={
            <IconButton
              color="inherit"
              size="small"
              onClick={handleCloseToast}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {toast.msg}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
}

export default Toast;


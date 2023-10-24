import swal from "sweetalert";
import { deleteUserFromServer } from "../Redux/features/users/users";
const removeUserHandler = (id, dispatch) => {
  return new Promise((resolve) => {
    let isDeleted = false;
    swal({
      title: "آیا از حذف کاربر اطمینان دارید ؟",
      icon: "warning",
      buttons: ["آره", "نه"],
    }).then(async (result) => {
      if (!result) {
        await dispatch(deleteUserFromServer(id));
        swal({
          title: "کاربر مورد نظر با موفقیت حذف شد",
          icon: "success",
          button: "باشه",
        });
        isDeleted = true;
      }
      resolve(isDeleted);
    });
  });
};

export default removeUserHandler;

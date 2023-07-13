import React from "react";
import { useSnackbar, closeSnackbar } from "notistack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { clearUserVehicles, usersVehicles } from "store/slices/userSlice";
import TableSnackBar from "components/User/PopUpButtom/TableSnackBar";

function PopUpButton({ vehicle }) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const snackbarOptions = {
    variant: "default",
    autoHideDuration: null,
    onClose: (event, reason, key) => {
      if (reason === "clickaway") return;
      closeSnackbar(key);
    },
  };

  const handleClick = (vehicle) => {
    dispatch(clearUserVehicles());
    dispatch(usersVehicles(vehicle));

    enqueueSnackbar(<TableSnackBar onClose={closeSnackbar} />, snackbarOptions);
  };

  return (
    <Button variant="contained" onClick={() => handleClick(vehicle)}>
      Show vehicles
    </Button>
  );
}

export default PopUpButton;

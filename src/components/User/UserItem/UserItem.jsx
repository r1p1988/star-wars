import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { getDate } from "services/getDate";
import PopUpButton from "components/User/PopUpButtom/PopUpButton";

function UserItem({ user }) {
  return (
    <TableRow>
      <TableCell align="center">{user.name}</TableCell>
      <TableCell align="center">{user.height}</TableCell>
      <TableCell align="center">{user.mass}</TableCell>
      <TableCell align="center">{user.gender}</TableCell>
      <TableCell align="center">{getDate(user.edited)}</TableCell>
      <TableCell align="center">
        {user.vehicles.length > 0 ? (
          <PopUpButton vehicle={user.vehicles} />
        ) : (
          <Typography variant="button" display="block" gutterBottom>
            No vehicles
          </Typography>
        )}
      </TableCell>
    </TableRow>
  );
}

export default UserItem;

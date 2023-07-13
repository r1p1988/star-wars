import React, { useEffect, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "store/slices/userSlice";
import UserItem from "components/User/UserItem/UserItem";
import { Box, Typography } from "@mui/material";

function UserList() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const userItems = useMemo(() => {
    return users
      ? users.map((user, i) => <UserItem user={user} key={i} />)
      : null;
  }, [users]);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h3" align="center">
            LOADING...
          </Typography>
        </Box>
      ) : (
        <>
          {users && users.length === 0 ? (
            <Typography variant="h4" align="center">
              Users not found
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 320 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "600" }} align="center">
                      Name
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }} align="center">
                      Height
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }} align="center">
                      Mass
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }} align="center">
                      Gender
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }} align="center">
                      Edited
                    </TableCell>
                    <TableCell sx={{ fontWeight: "600" }} align="center">
                      Vehicles
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{userItems}</TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
    </>
  );
}

export default UserList;

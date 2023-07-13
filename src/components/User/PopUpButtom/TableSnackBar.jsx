import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function TableSnackBar({ onClose }) {
  const { vehicles } = useSelector((store) => store.user);

  const handleContentClick = () => {
    onClose();
  };

  return (
    <Box>
      {vehicles ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 320 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Model</TableCell>
                <TableCell align="center">Manufacturer</TableCell>
                <TableCell align="center">Vehicle Class</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vehicles.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.model}</TableCell>
                  <TableCell align="center">{item.manufacturer}</TableCell>
                  <TableCell align="center">{item.vehicle_class}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h3" align="center">
          LOADING...
        </Typography>
      )}
      <Box
        onClick={handleContentClick}
        sx={{ cursor: "pointer", marginTop: "10px", textAlign: "right" }}
      >
        Close
      </Box>
    </Box>
  );
}

export default TableSnackBar;

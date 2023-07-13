import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import useDebounce from "hooks/useDebounce";
import { filterUsers } from "store/slices/userSlice";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";

function FilterUser() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 500);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(filterUsers(debouncedValue.toLowerCase()));
  }, [debouncedValue]);

  return (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Search by user name"
          variant="outlined"
          sx={{ maxWidth: "300px" }}
          onChange={handleSearch}
        />
      </Box>
    </>
  );
}

export default FilterUser;

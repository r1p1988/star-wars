import React from "react";
import UserList from "components/User/UserList/UserList";
import FilterUser from "components/User/FilterUser/FilterUser";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function HomePages() {
  return (
    <Container maxWidth="md" sx={{ marginBottom: "30px" }}>
      <Typography variant="h3" gutterBottom align="center">
        User Info
      </Typography>
      <FilterUser />
      <UserList />
    </Container>
  );
}

export default HomePages;

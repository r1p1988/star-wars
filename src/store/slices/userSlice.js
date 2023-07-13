import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const UserURL = `https://swapi.dev/api/people`;
const UserSearchURL = `https://swapi.dev/api/people`;

const initialState = {
  loading: false,
  vehiclesLoading: false,
  error: "",
  vehicles: [],
};

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch(UserURL)
    .then((data) => data.json())
    .then((data) => data.results);
  return response;
});

export const filterUsers = createAsyncThunk("users/fetch", async (user) => {
  const response = await fetch(UserSearchURL + `/?search=${user}`)
    .then((data) => data.json())
    .then((data) => data.results);
  return response;
});

export const fetchVehicles = async (vehicle) => {
  const vehiclePromises = vehicle.map((vehicleUrl) => fetch(vehicleUrl));
  const responses = await Promise.all(vehiclePromises);
  const vehicles = await Promise.all(
    responses.map((response) => response.json())
  );
  return vehicles;
};

export const usersVehicles = createAsyncThunk(
  "vehicles/fetch",
  async (vehicle, thunkAPI) => {
    const response = await fetchVehicles(vehicle);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserVehicles(state) {
      return { ...state, vehicles: [] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(usersVehicles.pending, (state) => {
      state.vehiclesLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(usersVehicles.fulfilled, (state, action) => {
      state.vehicles = action.payload;
      state.vehiclesLoading = false;
    });
    builder.addCase(usersVehicles.rejected, (state, action) => {
      state.vehiclesLoading = false;
      state.vehicles = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const { clearUserVehicles } = userSlice.actions;

export default userSlice.reducer;

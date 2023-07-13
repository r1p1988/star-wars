import HomePages from "pages/HomePages";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <HomePages />
      </SnackbarProvider>
    </>
  );
}

export default App;

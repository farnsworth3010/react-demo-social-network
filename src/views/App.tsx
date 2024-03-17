import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Link to={"/"}>
        <h1 className="header">the Best social network</h1>
      </Link>
      <Outlet />
    </ThemeProvider>
  );
}

export default App;

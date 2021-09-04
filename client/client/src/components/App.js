import AppBar from "./Appbar";
import Posts from "./Posts";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      paper: "#ebeded",
      default: "#6b9cae"
    },
    primary:{
      main: "#6b9cae"
    },
    divider: "green"
  }
})

const useStyles = makeStyles((theme) => ({
  body: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "8px",
  },
}));

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppBar />
        <Posts />
      </ThemeProvider>
    </div>
  );
}

export default App;

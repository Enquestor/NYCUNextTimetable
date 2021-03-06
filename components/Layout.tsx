import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { createTheme, Theme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import Cookies from "js-cookie";
import styles from "../styles/Layout.module.css";
import Router from "next/router";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    mode?: "light" | "dark";
  }
  interface ThemeOptions {
    palette?: PaletteOptions;
    props?: any;
  }
}

const Layout = ({ children }: any) => {
  // TODO: dark theme support
  const browserPreference = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<"light" | "dark">(
    preferredTheme(browserPreference)
  );
  const themeOptions = useMemo<Theme>(
    () => createTheme(getThemeOptions(theme)),
    [theme]
  );

  return (
    <ThemeProvider theme={themeOptions}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <CssBaseline />
        <AppBar position="sticky">
          <Toolbar>
            <div className={styles.appname} onClick={() => Router.push("/")}>
              <TaskAltIcon />
              <Typography variant="h6" noWrap sx={{ pl: 3 }}>
                Next Timetable
              </Typography>
            </div>
            <Box sx={{ flexGrow: 1 }} />
            <Button color="inherit" onClick={() => Router.push("/about")}>
              About
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    </ThemeProvider>
  );
};

export const getThemeOptions = (mode: "light" | "dark") => ({
  palette: {
    mode: mode,
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});

const preferredTheme = (browserPreference: boolean): "light" | "dark" => {
  if (Cookies.get("paletteMode") !== undefined) {
    return Cookies.get("paletteMode") as "light" | "dark";
  }
  return browserPreference ? "dark" : "light";
};

export default Layout;

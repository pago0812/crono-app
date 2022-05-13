import type { ReactElement, ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const UserLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box sx={{ height: "48px" }}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              CronoApp
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
};

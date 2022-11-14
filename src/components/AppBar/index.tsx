import Typography from "@mui/material/Typography";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
import { auth } from "../../hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Appbar: React.FC<any> = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ background: "transparent", boxShadow: "none" }}
        position="static"
        sx={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        <Toolbar>
          <img style={{ width: 64 }} src={logo} alt="logo" />
          <Typography
            style={{ color: "#2A5EE4", fontSize: 20, fontWeight: 800 }}
            component="div"
            sx={{ flexGrow: 1, ml: "20px" }}
          >Núcleo de Profissionais AMF
          </Typography>
        </Toolbar>
        <Toolbar sx={{ flexDirection: "row" }}>
          {user ? (
            <></>
          ) : (
            <Button
              style={{ color: "#2A5EE4", fontSize: 16, fontWeight: 400 }}
              color="inherit"
              onClick={() => navigate("/")}
            >
              Entrar
            </Button>
          )}
          <AccountCircleOutlinedIcon style={{ fill: "#2A5EE4" }} />
        </Toolbar>
      </AppBar>
    </Box >
  );
};

export default Appbar;

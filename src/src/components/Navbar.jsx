import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {postLogoutUser} from "../state/user"

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(postLogoutUser());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar>
          <Link to="/"><IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{color:'white'}}
          >
            WortiseBlog
          </IconButton>
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 2 }}
          ></Typography>
          {(user.id) ? (
          
            <>
              {" "}
              <Link to='/myprofile'><Button style={{color:'white'}}  color="inherit">
                 MY PROFILE
                </Button>
              </Link>
              
              <Link to="/">
                <Button  style={{color:'white'}}onClick={handleClick} color="inherit">
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button style={{color:'white'}} color="inherit">Login</Button>
              </Link>
              <Link to="/register">
                <Button style={{color:'white'}} color="inherit">Register</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

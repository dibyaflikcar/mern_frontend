import React, { useState, useEffect } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Link from 'next/link';
import { useRouter } from 'next/router';

const pages = ["Home", "Products", "Blog", "About US"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  const router = useRouter()
  const [token, setToken]=useState("");

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
}, [router]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onInputSignout=()=>{
    localStorage.clear();
    setToken("");
    router.push("/signin");
  }

  return (<>
  <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDevIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link href="/"><Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >LOGO</Typography></Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}

                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/"><Typography textAlign="center">Home</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/products"><Typography textAlign="center">Products</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href="/about"><Typography textAlign="center">About Us</Typography></Link>
                </MenuItem>
            </Menu>
          </Box>
          <LogoDevIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
              <Link href="/"><Button onClick={handleCloseNavMenu}  sx={{ my: 2, color: "white", display: "block" }}>Home</Button></Link>
              <Link href="/products"><Button onClick={handleCloseNavMenu}  sx={{ my: 2, color: "white", display: "block" }}>Products</Button></Link>
              <Link href="/aboutus"><Button onClick={handleCloseNavMenu}  sx={{ my: 2, color: "white", display: "block" }}>About Us</Button></Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Dibya Sundar Khanra" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              {token? (<>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link href="/dashboard"><Typography textAlign="center">Dashboard</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={onInputSignout}>Sign Out</Typography>
                </MenuItem>
              </>):(<>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link href="/signup"><Typography textAlign="center">Sign Up</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link href="/signin"><Typography textAlign="center">Sign In</Typography></Link>
                </MenuItem>
              </>)}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  </>
  )
}

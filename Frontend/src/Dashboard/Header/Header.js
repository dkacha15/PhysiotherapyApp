import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import logo from "../../assets/logo.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Login/loginSlice";

const Header = (props) => {
  const auth = useSelector((state) => state.login.authenticated);
  const dispatch = useDispatch();
  const pages = [
    { name: "Home", type: "button" },
    { name: "About Us", type: "button" },
    { name: "Services", type: "menu" },
    { name: "Products", type: "menu" },
    { name: "Team", type: "button" },
    { name: "Contact Us", type: "button" },
    { name: auth ? "Book an Appointment" : "Sign Up", type: "button" },
  ];

  const navigate = useNavigate();
  const products = props.products;
  const services = props.services;
  const settings = ["Profile", "History", "Logout"];

  const [anchorElProduct, setAnchorElProduct] = React.useState(null);
  const [anchorElService, setAnchorElService] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenMenu = (event) => {
    if (event.currentTarget.getAttribute("aria-controls") === "Products") {
      setAnchorElProduct(event.currentTarget);
    } else if (
      event.currentTarget.getAttribute("aria-controls") === "Services"
    ) {
      setAnchorElService(event.currentTarget);
    } else if (
      event.currentTarget.getAttribute("aria-controls") === "userMenu"
    ) {
      setAnchorElUser(event.currentTarget);
    } else {
      setAnchorElNav(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    setAnchorElProduct(null);
    setAnchorElService(null);
    setAnchorElUser(null);
    setAnchorElNav(null);
  };

  const handlePageSelection = (name) => {
    if (name === "Book an Appointment") {
      navigate("/bookAppointment");
    } else if (name === "Sign Up") {
      navigate("/login");
    } else {
      navigate("/", { state: { name: name } });
    }
    handleCloseMenu();
  };

  const handleSettingSelection = (name) => {
    if (name === "Logout") {
      dispatch(logout());
    }
    handleCloseMenu();
  };

  const handleServiceSelection = (item, name) => {
    navigate("/", { state: { type: "Services", item: item, name: name } });
    handleCloseMenu();
  };

  const handleProductSelection = (item, name) => {
    navigate("/", { state: { type: "Products", item: item, name: name } });
    handleCloseMenu();
  };

  return (
    <AppBar position="static" style={{ background: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Website Logo */}
          <img
            style={{
              width: 130,
              height: 50,
              marginLeft: 85,
              borderRadius: 10,
            }}
            alt="logo"
            src={logo}
          />

          {/* Mobile view navigationbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) =>
                page.type === "button" ? (
                  <MenuItem
                    key={page._id}
                    onClick={() => handlePageSelection(page.name)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={page._id}
                    aria-controls={page.name}
                    onClick={handleOpenMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                )
              )}
              <Menu
                id="Products"
                anchorEl={anchorElProduct}
                keepMounted
                open={Boolean(anchorElProduct)}
                onClose={handleCloseMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {products.map((product) => (
                  <MenuItem
                    key={product._id}
                    onClick={() =>
                      handleProductSelection(product, product.name)
                    }
                  >
                    <Typography textAlign="center">{product.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Menu
                id="Services"
                anchorEl={anchorElService}
                keepMounted
                open={Boolean(anchorElService)}
                onClose={handleCloseMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {services.map((service) => (
                  <MenuItem
                    key={service._id}
                    onClick={() =>
                      handleServiceSelection(service, service.name)
                    }
                  >
                    <Typography textAlign="center">{service.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>

          {/* Desktop view navigation bar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page.type === "button" ? (
                <Box>
                  <Button
                    key={page.name}
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClick={() => handlePageSelection(page.name)}
                  >
                    {page.name}
                  </Button>
                </Box>
              ) : (
                <Box>
                  <Button
                    aria-controls={page.name}
                    key={page.name}
                    onClick={handleOpenMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.name}
                  </Button>
                </Box>
              )
            )}
            <Menu
              id="Products"
              anchorEl={anchorElProduct}
              keepMounted
              open={Boolean(anchorElProduct)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {products.map((product) => (
                <MenuItem
                  key={product._id}
                  onClick={() => handleProductSelection(product, product.name)}
                >
                  <Typography textAlign="center">{product.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Menu
              id="Services"
              anchorEl={anchorElService}
              keepMounted
              open={Boolean(anchorElService)}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {services.map((service) => (
                <MenuItem
                  key={service._id}
                  onClick={() => handleServiceSelection(service, service.name)}
                >
                  <Typography textAlign="center">{service.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Account settings */}
          {auth && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenMenu}
                  sx={{ p: 0 }}
                  aria-controls="userMenu"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="http://cdn.onlinewebfonts.com/svg/img_243887.png"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="userMenu"
                anchorEl={anchorElUser}
                keepMounted
                open={Boolean(anchorElUser)}
                onClose={handleCloseMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleSettingSelection(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

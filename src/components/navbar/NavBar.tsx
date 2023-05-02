import { useState } from 'react';

import { Box, AppBar, Toolbar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

import { Link } from 'react-router-dom';
import StyledDrawer from '../../styledComponents/styledDrawer/StyledDrawer';
import Subheader from '../../styledComponents/styledDrawer/SubHeading';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector } from '../../store/rtkHooks';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

const NavBar = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const userRedux = useAppSelector((state) => state.allUsers.value[0]);
  const isAdminRedux = useAppSelector((state) => state.isAdminReducer.value);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isAdminRedux.isAdmin && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography sx={{ flexGrow: 1 }}>
            {isAdminRedux.isAdmin
              ? 'Admin'
              : isAdminRedux.isLogin
              ? userRedux.userName
              : 'Attendance'}
          </Typography>
          {isAdminRedux.isLogin ? (
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          ) : (
            <Button color="inherit" onClick={() => navigate('/')}>
              Login
            </Button>
          )}
        </Toolbar>

        <StyledDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <div className="drawerMenuContainer">
            <Subheader>Subheader</Subheader>

            <Link to="/admin-dashboard" className="drawerLinkContainer">
              <HomeIcon />
              <span>Dashboard</span>
            </Link>
            <Link to="/admin-dashboard/users" className="drawerLinkContainer">
              <PeopleIcon />
              <span>Users</span>
            </Link>
            <Link
              to="/admin-dashboard/settings"
              className="drawerLinkContainer"
            >
              <SettingsIcon />
              <span>Settings</span>
            </Link>
          </div>
        </StyledDrawer>
      </AppBar>
    </Box>
  );
};

export default NavBar;

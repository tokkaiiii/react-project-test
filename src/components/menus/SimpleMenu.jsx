import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import NotificationMenu from "./NotificationMenu.jsx";
import LeftSideMenu from "./LeftSideMenu.jsx";
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from "@mui/material";
import AccountMenu from "./AccountMenu.jsx";

const SimpleMenu = () => {

  const [auth, setAuth] = React.useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
      <>
        {/*  <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
              <TextField
                  {...params}
                  label="Search input"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      type: 'search',
                    },
                  }}
              />
          )}
      />*/}
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          {/*<TextField id="outlined-basic" label="검색" variant="outlined"/>*/}
          <TextField
              id="outlined-basic"
              variant="outlined"
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon/>
                    </InputAdornment>
                ),
              }}
          />
        </div>
        <Box sx={{flexGrow: 1}}>
          <FormGroup>
            <FormControlLabel
                control={
                  <Switch
                      checked={auth}
                      onChange={handleChange}
                      aria-label="login switch"
                  />
                }
                label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{mr: 2}}
              >
              </IconButton>
              <LeftSideMenu>
                <MenuIcon style={{color: 'white'}}/>
              </LeftSideMenu>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Study log
              </Typography>
              {auth && (
                  <>
                    <NotificationMenu/>
                    <AccountMenu/>
                  </>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </>
  );
}

export default SimpleMenu;
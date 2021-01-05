import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Box, Grid, Menu } from '@material-ui/core';
import { FaAngleDown, FaUserCircle } from 'react-icons/fa';

export default function MenuAccount() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box component="span" m="auto">
        <FaUserCircle size="20px" style={{ position: "relative", top: "5px" }} />
      </Box>
      <Box component="span" m={1}>
        <Button
          ref={anchorRef}
          // aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Menu Acc
          <FaAngleDown size="1.1em" />
        </Button>
      </Box>

      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <Box component="div">
              <Link className="a" to="/account-settings">
                <MenuItem onClick={handleClose}>Account settings</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>Support</MenuItem>
              <Link className="a" to="/signout">
                <MenuItem onClick={handleClose}>Sign out</MenuItem>
              </Link>
            </Box>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
}

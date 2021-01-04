import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Menu } from '@material-ui/core';

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
    <div className="menu-account">
      <div>
        <Button
          ref={anchorRef}
          // aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Menu Account
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <div>
                <MenuItem onClick={handleClose}>Account settings</MenuItem>
                <MenuItem onClick={handleClose}>Support</MenuItem>
                <Link to="/signout">
                  <MenuItem onClick={handleClose}>Sign out</MenuItem>
                </Link>
              </div>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    </div>
  );
}

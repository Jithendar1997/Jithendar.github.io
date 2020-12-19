import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink, Route } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
                           
                                
                    <NavLink  style={{color:'black'}}  className="nav-link" exact to="/" >HomePage </NavLink>
                    <NavLink  style={{color:'black'}}  className="nav-link" exact to="/EmployeeList" >EmployeeDetails </NavLink>
                    <Button 
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    Sports
                </Button>
                    <NavLink style={{color:'black',marginLeft:'53em'}} className="nav-link" exact to="/aboutus">AboutUs </NavLink>
        
                    <NavLink style={{color:'black'}} className="nav-link" exact to="/contactus" >ContactUs </NavLink>
            

            <div >
                

       

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose} >
                                        <NavLink className="nav-link" exact to="/sports/VolleyBall">VolleyBall </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <NavLink className="nav-link" exact to="/sports/Badmintion">Badmintion </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <NavLink className="nav-link" exact to="/sports/Cricket">Cricket </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <NavLink className="nav-link" exact to="/sports/CarromBoard">CarromBoard </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <NavLink className="nav-link" exact to="/sports/LemonSpoon">LemonSpoon </NavLink>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                        <NavLink className="nav-link" exact to="/sports/MusicalChair">MusicalChair </NavLink>
                                        </MenuItem>

                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>


                
            </div>
        </div>
    );
}



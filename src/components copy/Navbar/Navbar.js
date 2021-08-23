import React, { useEffect, useState } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logo from '../../assets/logo.png';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import SvgIcon from '@material-ui/core/SvgIcon';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// const useStyles = makeStyles({
//  
// });



const useStyles = makeStyles((theme) => ({


  root: {

    height: 50,
    flexGrow: 1,
    
    // maxWidth: 400,
    '& > svg': {
      margin: theme.spacing(2),
    },
  },


  grow: {
    flexGrow: 1,
    backgroundColor: "red"
  },


  menuButton: {
    marginRight: theme.spacing(2),

  },


  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      zIndex:'0'
    },
  },


  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputRoot: {
    color: 'inherit',

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

  },


}));



export default function PrimarySearchAppBar() {

  const History = useHistory();
  const classes = useStyles();



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [navBarData, setNavBarData] = React.useState([]);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };



  const LogoutHandler = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    History.push('/');
    window.location.reload();
  }

  const ProfileHandler = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    History.push('/Profile');
  }

 


  const onNavigateHandler = (value) => {
    console.log("pass hori value", value);
    History.push(`${value}`);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={ProfileHandler}>
        <AccountCircleIcon color="primary" />
        Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <SettingsIcon color="primary" />
        Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ContactSupportIcon color="primary" />
        Customer Care</MenuItem>
      <MenuItem >
        <InfoIcon color="primary" />
        About US</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <HelpIcon color="primary" />
        Need Help?</MenuItem>
      <MenuItem onClick={LogoutHandler}>
        <ExitToAppIcon color="primary" />
        Log Out</MenuItem>
    </Menu>
  );

  

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );



  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, data) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const NavButtons = [
    { route: "/Dashboard", value: "users" },
    { route: "/CreateUser", value: "vendors" },
    { route: "/ListofUsers", value: "clients" },
    { route: "/Dashboard", value: "purchaseOrders" },
    { route: "/CreateUser", value: "Quotation" },
    { route: "/ListofUsers", value: "timesheets" },
    { route: "/CreateUser", value: "manpower" },
    { route: "/ListofUsers", value: "deliveryNotes" },
  ]

  const users = [
    { route: "/Dashboard", value: "Users Dashboard" },
    { route: "/CreateUser", value: "Create USER" },
    { route: "/ListofUsers", value: "list of users" },
  ]

  const vendors = [
    { route: "/Dashboard", value: "Vendor Dashboard" },
    { route: "/CreateVendor", value: "create vendor" },
    { route: "/ListOfVendors", value: "list of  vendors" },

  ]

  const clients = [
    { route: "/Dashboard", value: "clients dashboard" },
    { route: "/CreateUser", value: "create clients" },
    { route: "/PurchaseOrder", value: "list of clients" },
  ]

  const purchaseOrders = [
    { route: "/Dashboard", value: "Po dashboard" },
    { route: "/CreateUser", value: "create Purchase orders" },
    { route: "/PurchaseOrder", value: "list of Purchase orders" },
  ]

  const Quotation = [
    { route: "/Dashboard", value: "quotation dashboard" },
    { route: "/CreateUser", value: "create quotations" },
    { route: "/PurchaseOrder", value: "list of Quotations" },
  ]

  const timesheets = [
    { route: "/Dashboard", value: "Timesheet dashboard" },
    { route: "/CreateUser", value: "create timeSheets" },
    { route: "/PurchaseOrder", value: "list of timesheets" }, 
    { route: "/PurchaseOrder", value: "vendor payments" },
    { route: "/PurchaseOrder", value: "vendor claims" },
  ]


  const manpower = [
    
    { route: "/Dashboard", value: "manpower dashboard" },
    { route: "/CreateUser", value: "create manpower" },
    { route: "/PurchaseOrder", value: "list of man power" },
    { route: "/PurchaseOrder", value: "create time sheet for mp" },
    { route: "/PurchaseOrder", value: "list of mp ts" },
    { route: "/PurchaseOrder", value: "create manpower payments" },
    { route: "/PurchaseOrder", value: "man power claims" },
  ]


  const deliveryNotes = [
    { route: "/Dashboard", value: "delivery dashboard" },
    { route: "/CreateUser", value: "generate notes" },
    { route: "/PurchaseOrder", value: "list of notes" },

  ]


  const navBarHandler = (data) => {

    if (data === "users") {
      setNavBarData(users);
    } else if (data === "vendors") {
      setNavBarData(vendors);
    } else if (data === "clients") {
      setNavBarData(clients)
    } else if (data === "purchaseOrders") {
      setNavBarData(purchaseOrders);
    } else if (data === "Quotation") {
      setNavBarData(Quotation)
    } else if (data === "timesheets") {
      setNavBarData(timesheets);
    } else if (data === "manpower") {
      setNavBarData(manpower)
    } else if (data === "deliveryNotes") {
      setNavBarData(deliveryNotes);
    };


    setOpen(false);
  }


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
    <>

      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} style={{ height: "50px", width: "150px", marginRight: "20px" }} />

            {/* <HomeIcon color="white"
            ></HomeIcon> */}
            <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                style={{color:"darkblue",borderRadius:"30px"}}
                variant="contained"
                
             >
               <ExpandMoreIcon></ExpandMoreIcon>
                InfoCenter
              </Button>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal  style={{zIndex:"10"}}>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' ,}}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} >
                          {NavButtons.map((data) => (
                            <MenuItem onClick={() => navBarHandler(data.value)} >{data.value}</MenuItem>
                          ))}

                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>

            {/* <MultiSelectTreeView setNavBarData={setNavBarData} /> */}



            {navBarData.map((data) => (

              <Button variant="focusvisible" style={{ marginLeft: "20px", height: "auto", width: "auto", color: "white" }} key={data.route} onClick={() => { onNavigateHandler(data.route) }}>
                {data.value}

              </Button>
              // <text  style={{cursor:"pointer"}} key={data.route} onClick={() => { onNavigateHandler(data.route)}} >{data.value} </text>

            ))}



            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>


            <div className={classes.sectionMobile}>



            </div>

          </Toolbar>

        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </>
  );
}

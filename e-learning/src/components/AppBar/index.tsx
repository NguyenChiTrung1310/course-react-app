import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ProfileAction } from './../../features/Profile/profileUserAction';
import { adminAction } from './../../features/admin/adminAction';
import { isEmpty } from 'lodash';
import {
  COURSE_CATEGORY_PAGE,
  HOME_PAGE,
  PROFILE_USER,
  ADMIN_PAGE,
} from '../../constants';
import {
  MenuIcon,
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteForeverRoundedIcon,
  AddShoppingCartIcon,
  CategoryIcon,
  AccountCircle,
  NotInterestedRoundedIcon,
  NotificationsIcon,
  MoreIcon,
  PersonIcon,
  ShoppingCartIcon,
  VideoLibraryRoundedIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
  SupervisorAccountIcon,
} from './icon';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Slide,
  useScrollTrigger,
  Collapse,
} from '@material-ui/core';

import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

import useStyles from './useStyles';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseCategory } from '../../features/course/CourseAction';
import { Props } from './type';

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  const theme = useTheme();
  const { children } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openListItem, setOpenListItem] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const menuId = 'search-menu';
  const mobileMenuId = 'search-menu-mobile';

  const category = useSelector(
    (state: any) => state.course.courseCategoryResponse.response
  );
  const statusCategory = useSelector(
    (state: any) => state.course.courseCategoryResponse.status
  );
  const numberCart = useSelector(
    (state: any) => state.cart.cartOrder.numberCarts
  );

  const getToken = useSelector((state: any) => {
    if (!isEmpty(state.login.loginResponse.response)) {
      return state.login.loginResponse.response.accessToken;
    } else {
      return null;
    }
  });
  const typeUser = useSelector((state: any) => {
    if (!isEmpty(state.login.loginResponse.response)) {
      return state.login.loginResponse.response.maLoaiNguoiDung;
    } else {
      return null;
    }
  });
  // console.log('TypeUser', typeUser);
  useEffect(() => {
    dispatch(fetchCourseCategory());
    if (!statusCategory) {
      dispatch(fetchCourseCategory());
    }
  }, [dispatch, statusCategory]);

  const handleClickListItem = () => {
    setOpenListItem(!openListItem);
  };

  const [firstMenu] = useState([
    {
      name: 'My Courses',
      value: 'courses',
      icon: 'COURSES',
      link: '/myCourse',
    },
    {
      name: 'My Order',
      value: 'order',
      icon: 'ORDER',
      link: '/myOrder',
    },
  ]);

  const [firstMenuUser] = useState([
    {
      name: 'My Profile',
      value: 'profile',
      icon: 'PROFILE',
      link: PROFILE_USER,
    },
    ...firstMenu,
  ]);

  const [firstMenuAdmin] = useState([
    {
      name: 'My Profile',
      value: 'profile',
      icon: 'PROFILE',
      link: PROFILE_USER,
    },
    ...firstMenu,
    {
      name: 'Admin',
      value: 'admin',
      icon: 'ADMIN',
      link: ADMIN_PAGE,
    },
  ]);

  const [secondMenu] = useState([
    {
      name: 'Trash',
      value: 'trash',
      icon: 'TRASH',
    },
    {
      name: 'Spam',
      value: 'spam',
      icon: 'SPAM',
    },
  ]);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'PROFILE':
        return <PersonIcon />;
      case 'COURSES':
        return <VideoLibraryRoundedIcon />;
      case 'ORDER':
        return <ShoppingCartIcon />;
      case 'ADMIN':
        return <SupervisorAccountIcon />;
      case 'TRASH':
        return <DeleteForeverRoundedIcon />;
      default:
        return <NotInterestedRoundedIcon />;
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleGetInforUser = () => {
    dispatch(ProfileAction(getToken));
  };

  const handleGetListUser = () => {
    dispatch(adminAction());
  };

  const handleClickMenu = (id: any) => {
    if (id === 'profile') {
      handleGetInforUser();
    } else if (id === 'courses') {
      console.log('Click my course');
    } else if (id === 'order') {
      console.log('Click my order');
    } else {
      console.log('Click Admin');
      handleGetListUser();
    }
  };

  const renderListTem = (text: any) => {
    return (
      <ListItem button key={text.name}>
        <ListItemIcon className={classes.iconListMenu}>
          {getIcon(text.icon)}
        </ListItemIcon>

        <Link
          className={classes.link}
          to={text.link}
          onClick={() => handleClickMenu(text.value)}>
          <ListItemText primary={text.name} />
        </Link>
      </ListItem>
    );
  };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}>
              <MenuIcon />
            </IconButton>
            <Link
              to={HOME_PAGE}
              style={{ textDecoration: 'none', color: 'white' }}>
              <Typography className={classes.title} variant='h6' noWrap>
                Courses E-learning
              </Typography>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.root} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label='show 4 new mails' color='inherit'>
                <Badge badgeContent={numberCart}>
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label='show 17 new notifications'
                color='inherit'>
                <Badge badgeContent={17}>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'>
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <MenuMobile
        mobileMenuId={mobileMenuId}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      <MenuDesktop
        menuId={menuId}
        anchorEl={anchorEl}
        handleMenuClose={handleMenuClose}
      />
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.iconDrawerHeader}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.listMenu}>
          {typeUser === 'GV'
            ? firstMenuAdmin.map((text) => {
                return renderListTem(text);
              })
            : typeUser === 'HV'
            ? firstMenuUser.map((text) => {
                return renderListTem(text);
              })
            : firstMenu.map((text) => {
                return renderListTem(text);
              })}
        </List>

        <Divider />
        <List className={classes.listMenu}>
          <ListItem button onClick={handleClickListItem}>
            <ListItemIcon className={classes.iconListMenu}>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary='Caterogy' />
            {openListItem ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          {statusCategory ? (
            <Collapse in={openListItem} timeout='auto' unmountOnExit>
              {category.map((item: any, index: number) => {
                const { maDanhMuc = '', tenDanhMuc = '' } = item;
                return (
                  <List component='div' disablePadding key={index}>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon className={classes.iconListMenu}>
                        <StarBorder />
                      </ListItemIcon>
                      <Link
                        to={`${COURSE_CATEGORY_PAGE}/${maDanhMuc}`}
                        className={classes.categoryLink}>
                        <ListItemText key={maDanhMuc} primary={tenDanhMuc} />
                      </Link>
                    </ListItem>
                  </List>
                );
              })}
            </Collapse>
          ) : (
            <List component='div' disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Item' />
              </ListItem>
            </List>
          )}
          {secondMenu.map((text, index) => (
            <ListItem button key={text.name}>
              <ListItemIcon className={classes.iconListMenu}>
                {getIcon(text.icon)}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}

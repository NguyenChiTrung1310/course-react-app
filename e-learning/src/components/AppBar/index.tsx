import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { COURSE_CATEGORY_PAGE, HOME_PAGE } from '../../constants';
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
      name: 'My Profile',
      value: 'profile',
      icon: 'PROFILE',
    },
    {
      name: 'My Courses',
      value: 'courses',
      icon: 'COURSES',
    },
    {
      name: 'My Order',
      value: 'order',
      icon: 'ORDER',
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

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Link
              to={HOME_PAGE}
              style={{ textDecoration: 'none', color: 'white' }}
            >
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
                color='inherit'
              >
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
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'
              >
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
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.iconDrawerHeader}
          >
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.listMenu}>
          {firstMenu.map((text, index) => (
            <ListItem button key={text.name}>
              <ListItemIcon className={classes.iconListMenu}>
                {getIcon(text.icon)}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
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
                        className={classes.categoryLink}
                      >
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
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
}

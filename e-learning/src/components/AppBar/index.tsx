import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { HOME_PAGE, PROFILE_USER } from '../../constants';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import MailIcon from '@material-ui/icons/Mail';
import CategoryIcon from '@material-ui/icons/Category';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import NotInterestedRoundedIcon from '@material-ui/icons/NotInterestedRounded';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';

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
} from '@material-ui/core';

import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

import useStyles from './useStyles';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseCategory } from '../../features/course/CourseAction';

interface Props {
  window?: () => Window;
  children: React.ReactElement | any;
}

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
  const { children } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [openListItem, setOpenListItem] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector(
    (state: any) => state.course.courseCategoryResponse.response
  );

  const statusCategory = useSelector(
    (state: any) => state.course.courseCategoryResponse.status
  );

  useEffect(() => {
    dispatch(fetchCourseCategory());
  }, [dispatch]);

  const handleClickListItem = () => {
    setOpenListItem(!openListItem);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const [firstMenu] = useState([
    {
      name: 'My Profile',
      value: 'profile',
    },
    {
      name: 'My Courses',
      value: 'courses',
    },
    {
      name: 'My Order',
      value: 'order',
    },
  ]);

  const [secondMenu] = useState([
    {
      name: 'Trash',
      value: 'trash',
    },
    {
      name: 'Spam',
      value: 'spam',
    },
  ]);

  const menuId = 'search-menu';
  const mobileMenuId = 'search-menu-mobile';

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

  const handleClickCategory = (index: number, value: string) => {
    switch (value) {
      case 'BackEnd':
        break;
      case 'Design':
        console.log(index);
        break;
      case 'DiDong':
        console.log(index);
        break;
      case 'FrontEnd':
        console.log(index);
        break;
      case 'FullStack':
        console.log(index);
        break;
      default:
        console.log(index);
        break;
    }
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
                <Badge badgeContent={4}>
                  <MailIcon />
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {firstMenu.map((text, index) => (
            <ListItem button key={text.name}>
              {index === 0 ? (
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
              ) : (
                <ListItemIcon>
                  {index === 1 ? (
                    <VideoLibraryRoundedIcon />
                  ) : (
                    <ShoppingCartIcon />
                  )}
                </ListItemIcon>
              )}

              {index === 0 ? (
                <Link to={PROFILE_USER}>
                  <ListItemText primary={text.name} />
                </Link>
              ) : (
                <>
                  {index === 1 ? (
                    <Link to='/1'>
                      <ListItemText primary={text.name} />
                    </Link>
                  ) : (
                    <Link to='/2'>
                      <ListItemText primary={text.name} />
                    </Link>
                  )}
                </>
              )}
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleClickListItem}>
            <ListItemIcon>
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
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <Link
                        to={`tendDanhMuc-${maDanhMuc}`}
                        className={classes.categoryLink}>
                        <ListItemText
                          key={maDanhMuc}
                          primary={tenDanhMuc}
                          onClick={() => handleClickCategory(index, maDanhMuc)}
                        />
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
              {index === 0 ? (
                <ListItemIcon>
                  <DeleteForeverRoundedIcon />
                </ListItemIcon>
              ) : (
                <ListItemIcon>
                  <NotInterestedRoundedIcon />
                </ListItemIcon>
              )}
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

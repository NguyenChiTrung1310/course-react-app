import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { fetchListPaginationUser } from '../../../../features/admin/adminAction';
const ListPaginatedUser = (props: any) => {
  const [state, setState] = useState({ numberPage: 1 });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListPaginationUser(state.numberPage));
  }, [dispatch, state.numberPage]);

  const dataPaginationListUser = props.item.items;
  console.log(dataPaginationListUser);

  const dataPaginationListUserStatus = useSelector(
    (state: any) => state.admin.listUserPaginatedResponse.status
  );

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
    })
  );

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handlePreviousPage = () => {
    setState({
      numberPage: state.numberPage - 1,
    });
  };
  console.log(state.numberPage);

  const handleNextPage = () => {
    setState({
      numberPage: state.numberPage + 1,
    });
  };

  return (
    <Grid container spacing={3}>
      {dataPaginationListUserStatus ? (
        <>
          {dataPaginationListUser.map((item: any) => {
            const {
              email = 'abc',
              hoTen = 'abc',
              maLoaiNguoiDung = 'abc',
              soDT = 'abc',
              taiKhoan = 'abc',
              tenLoaiNguoiDung = 'abc',
            } = item;

            return (
              <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.root}>
                  {/* <CardHeader title={hoTen} subheader={maLoaiNguoiDung} /> */}
                  {/* <CardMedia
                    className={classes.media}
                    image='https://i.pravatar.cc/200'
                    title='Paella dish'
                  /> */}
                  <CardContent>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Name: {hoTen}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Type User: {maLoaiNguoiDung}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Account: {taiKhoan}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Email: {email}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Phone Number: {soDT}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'>
                      Name Type User: {tenLoaiNguoiDung}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </>
      ) : (
        <div>Loading</div>
      )}

      <Button onClick={handlePreviousPage}>Previous</Button>
      <Button onClick={handleNextPage}>Next</Button>
    </Grid>
  );
};

export default ListPaginatedUser;

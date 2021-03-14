import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { fetchListPaginationUser } from '../../../../features/admin/adminAction';
const ListPaginatedUser = (props: any) => {
  const [state, setState] = useState({ numberPage: 1 });
  // const sendData = () => {
  //   props.parentCallBack('Message from child, Hellooooooo');
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListPaginationUser(state.numberPage));
  }, [dispatch, state.numberPage]);

  const { dataPaginationListUser, dataPaginationListUserStatus } = props;

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

  const handlePreviousPage = () => {
    setState({
      numberPage: state.numberPage - 1,
    });
  };
  // console.log(state.numberPage);

  const handleNextPage = () => {
    setState({
      numberPage: state.numberPage + 1,
    });
  };

  return (
    <Grid container spacing={3}>
      {dataPaginationListUserStatus ? (
        <>
          {dataPaginationListUser.items.map((item: any, index: number) => {
            const {
              email = 'abc',
              hoTen = 'abc',
              maLoaiNguoiDung = 'abc',
              soDT = 'abc',
              taiKhoan = 'abc',
              tenLoaiNguoiDung = 'abc',
            } = item;

            return (
              <Grid item xs={12} sm={12} md={3} key={index}>
                <Card className={classes.root}>
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
      <Grid container spacing={0} alignItems='center' justify='center'>
        <Button
          onClick={handlePreviousPage}
          disabled={state.numberPage === 1 ? true : false}
          style={{ color: '#f00000' }}>
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          // onClick={sendData}
          disabled={
            state.numberPage === dataPaginationListUser.totalPages - 1
              ? true
              : false
          }
          style={{ color: '#f00000' }}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default ListPaginatedUser;

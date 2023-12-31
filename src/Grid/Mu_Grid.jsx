

    import React from 'react';
    import { Box,Grid,Paper,styled } from '@mui/material';


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    export default function BasicGrid(){

        return(
            <>
            <Box sx={{flexGrow : 1 ,m:4}}>

                <Grid container spacing={2}>
                   <Grid item xs={8}>
                    <Item>xs =8</Item>
                   </Grid>
                   <Grid item xs={4}>
                    <Item> xs=4</Item>
                   </Grid>
                   <Grid item xs ={4}>
                    <Item>xs =4</Item>
                   </Grid>
                   <Grid item xs={8}>
                    <Item>xs=8</Item>
                   </Grid>
                   <Grid item xs={12}>
                    <Item>xs =12</Item>

                   </Grid>
                </Grid>

            </Box>
            </>
        )

    }
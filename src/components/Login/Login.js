import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import Banner from '../images/banner.png'

const Login = () => {
  return (
    <Grid spacing={10} container>
      <Grid md={6} item>
        <img src={Banner} style={{ height: "620px", width: "800px" }} />
      </Grid>
      <Grid md={6} item>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "170px", marginRight:'140px' }}
        >
          <Typography variant="h5" fontWeight={600}>LOGIN</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            flexDirection: "column",
            width: "50%",
            marginLeft: "100px",
          }}
        >
          <TextField helperText="" label="Name" color="secondary" />
          <TextField
            sx={{ marginTop: "30px", marginBottom:'20px' }}
            helperText=""
            label="Password"
            color="secondary"
          />
          <Button color="primary" variant="contained">Login</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

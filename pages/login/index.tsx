import { Grid } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";


const Login: NextPage = () => {

  const router = useRouter();


  return (
    <Grid container justifyContent="center">
      <div style={{ width: 200, height: 200, backgroundColor: "red" }}>Login</div>
    </Grid>
  )
}

export default Login

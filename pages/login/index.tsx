import { Button, TextField } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useActions } from "../../hooks/useAction";
import { useInput } from "../../hooks/useInput";
import styles from '../../styles/Login.module.scss';


const Login: NextPage = () => {

  const router = useRouter();
  const email = useInput("")
  const password = useInput("")

  const { login } = useActions()


  const callback = () => {
    router.push({
      pathname: '/'
    });
  }

  const onLogin = () => {
    login({ email: email.value, password: password.value }, callback)
  }

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <form className={styles.form}>
          <TextField
            {...email}
            style={{ marginTop: 10 }}
            label="Email"
          />
          <TextField
            {...password}
            style={{ marginTop: 10 }}
            label="Password"
          />
          <Button variant="contained" className={styles.loginBtn} onClick={onLogin}>
            Log in
          </Button>
        </form>
      </div >
    </div>
  );
}

export default Login

import Header from "@/components/Header";
import LoginBox from "@/components/LoginBox";
import MaterialHeader from "@/components/MaterialHeader";
import User from "@/models/User";
import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useContext,
  createContext,
} from "react";
import loginService from "../services/loginRequests";
import Button from "@mui/material/Button";

import { emptyUser, LoginContext } from "./_app";

// import custom types
import { messageType, userType } from "@/types/types";


import Test from "../components/Test";
import { Card, Snackbar } from "@mui/material";

import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import { UserContext } from "./_app";
import Link from "next/link";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});






export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<messageType>();
  const userContext = useContext(UserContext);
  const setUser = userContext?.setUser;
  const user = userContext?.user;
  const [test1, setTest1] = useState("");
  const [test, setTest] = useState<null | userType>(null);
  const loggedIn = useContext(LoginContext);

  console.log(userContext?.user.name);
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const userLogin:userType = await loginService.login({
        username: username,
        password: password,
      });
      setUsername("");
      setPassword("");
      const wait = await userContext?.setUser(userLogin);
      loggedIn?.setLoggedIn(true);
      setMessage({
        alert: "success",
        message: `Welcome ${userLogin.name}, you have logged in successfully`,
      });
    } catch (exception) {
      console.log(exception);
      setMessage({
        alert: "error",
        message: "Incorrect username or password",
      });
    }
    setOpen(true);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (e: any, onChange?: (...args: any[]) => any) => {
    e.preventDefault();
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <>
        <MaterialHeader/>
        {user?.name} {user?.id} success
        {user === (emptyUser || undefined) && (
          <LoginBox
            username={username}
            password={password}
            onSubmit={handleLogin}
            onUsernameChange={handleUsernameChange}
            onPasswordChange={handlePasswordChange}
          />
        )}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={message?.alert}
            sx={{ width: "100%" }}
          >
            {message?.message}
          </Alert>
        </Snackbar>
          <Link
        href="/">
            GO HOME
          </Link>
        <div className="h-screen">12344321</div>
    </>
  );
}

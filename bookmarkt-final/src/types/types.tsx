import React from 'react';
import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";


export type userType = {
  token: string,
  username: string,
  name: string,
  id: string
}

export type messageType = {
  alert: AlertColor;  message: string
};

export type userTypeContext = {
  user: userType
  setUser: React.Dispatch<React.SetStateAction<userType>>
};

export type loginContext = {
    loggedIn: boolean,
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
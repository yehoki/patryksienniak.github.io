import React from "react";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";

type Props = {
  username: string;
  password: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function LoginBox({
  username,
  password,
  onSubmit,
  onUsernameChange,
  onPasswordChange,
}: Props) {
  return (
    <div className="container px-6 h-screen">
      <div className="flex justify-center items-center flex-wrap h-full">
        <div className="p-5 border-2">
          <form className="space-y-2" onSubmit={onSubmit}>
            <div className="border-2 p-1">
              <input
                className="outline-none"
                type="text"
                placeholder="Username"
                value={username}
                onChange={onUsernameChange}
              />
            </div>
            <div className="border-2 p-1">
              <input
                className="outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
              />
            </div>
            <Button variant="outlined" className="bg-white border-gray-300 text-gray-400" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;

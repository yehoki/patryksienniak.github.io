import React from "react";

type Props = {
  username: string;
  password: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};


function LoginBox({username, password, onSubmit, onUsernameChange, onPasswordChange}: Props) {
  return (
    <div className="container px-6 h-screen">
      <div className="flex justify-center items-center flex-wrap h-full">
        <div className="">
            <form className="space-y-2" onSubmit={onSubmit}>
            <div><input type='text' placeholder="Username" value = {username} onChange={onUsernameChange} /></div>
          <div><input type="password" placeholder="Password" value={password} onChange={onPasswordChange}/></div>
            <button className="border rounded-full px-2 py-1">1234</button>
            </form>


        </div>
      </div>
    </div>
  );
}

export default LoginBox;

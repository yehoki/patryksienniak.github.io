import Header from "@/components/Header";
import LoginBox from "@/components/LoginBox";
import React, { ChangeEvent, FormEvent, useState } from "react";
import loginService from '../services/loginRequests';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username: username,
        password: password
      })
      setUser(user)
      setUsername('');
      setPassword('');
    } catch (exception) {
      console.log(exception);
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUsername(event.target.value);
  };



  return (
    <>
      <Header />
        <LoginBox
        username={username}
        password={password}
        onSubmit={handleLogin}
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
      />
      <div>12344321</div>
    </>
  );
}
}

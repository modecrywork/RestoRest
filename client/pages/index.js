import {useState} from "react";

const Index = () => {
  const [data, setData] = useState({ login: "", password: "" });

  const handleChangedata = name => e => {
    setData({ ...data, [name]: e.target.value });
  }

  const handleLogin = e => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <form>
      <input type="text" name="login" onChange={handleChangedata("login")} />
      <br />
      <br />
      <input type="password" name="password" onChange={handleChangedata("password")} />
      <br />
      <button onClick={handleLogin}>login</button>
    </form>
  );
}

export default Index;

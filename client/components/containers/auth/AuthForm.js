import LogotypeIcon from "icons/Logotype";

import styled from "styled-components";
import { useState } from "react";
// components
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
//  icons
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const AuthForm = ({ authUser }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
    error: false,
    showPassword: false
  });
  const changeState = (name, value) => {
    setData({ ...data, error: false, [name]: value });
  };

  // handlers
  const handleChangeData = name => e => {
    changeState(name, e.target.value);
  };
  const handleClickShowPassword = () => {
    changeState("showPassword", !data.showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    authUser(data, () => {
      changeState("error", true);
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <FormCard>
        <LogotypeContainer>
          <LogotypeIcon />
        </LogotypeContainer>
        <StyledCardContent>
          <StyledTextField
            label="Логин"
            onChange={handleChangeData("username")}
            error={data.error}
          />
          <StyledFormControl>
            <InputLabel>Пароль</InputLabel>
            <Input
              type={data.showPassword ? "text" : "password"}
              value={data.password}
              onChange={handleChangeData("password")}
              error={data.error}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {data.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </StyledFormControl>
          <StyledFormHelperText error={data.error}>
            {" "}
            {data.error
              ? "Неккоректные данные"
              : "Укажите логин и пароль для входа в систему"}
          </StyledFormHelperText>
        </StyledCardContent>
        <StyledCardActions>
          <StyledButton type="submit" variant="contained">
            Войти
          </StyledButton>
        </StyledCardActions>
      </FormCard>
    </form>
  );
};

// form styles
const FormCard = styled(Card)`
  max-width: 400px;
  padding: 10px;
`;

const LogotypeContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledCardContent = styled(CardContent)`
  && {
    padding: 10px 65px;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 50px;
    width: 100%;
  }
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

const StyledCardActions = styled(CardActions)`
  margin-top: 30px;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  width: 30%;
`;

const StyledFormHelperText = styled(FormHelperText)`
  padding-top: 5px;
`;

export default AuthForm;

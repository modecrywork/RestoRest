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
//  icons
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const AuthForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    error: "",
    showPassword: false
  });
  const changeState = (name, value) => {
    setData({ ...data, [name]: value });
  };

  // handlers
  const handleChangedata = name => e => {
    changeState(name, e.target.value);
  };
  const handleChangeError = error => {
    changeState("error", error);
  };
  const handleClickShowPassword = () => {
    changeState("showPassword", !data.showPassword);
  };

  return (
    <FormCard>
      <LogotypeContainer>
        <LogotypeIcon />
      </LogotypeContainer>
      <StyledCardContent>
        <StyledTextField label="Логин" />
        <StyledFormControl>
          <InputLabel>Пароль</InputLabel>
          <Input
            type={data.showPassword ? "text" : "password"}
            value={data.password}
            onChange={handleChangedata("password")}
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
      </StyledCardContent>
      <StyledCardActions>
        <StyledButton variant="contained">Войти</StyledButton>
      </StyledCardActions>
    </FormCard>
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

export default AuthForm;

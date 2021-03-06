import React from "react";
import { Button, Menu } from "semantic-ui-react";

const SignedOutMenu = ({ signIn, register }) => {
  return (
    <Menu.Item position='right'>
      <Button basic inverted content='Zaloguj się' onClick={signIn}></Button>
      <Button
        basic
        inverted
        style={{ marginLeft: "1em" }}
        content='Zarejestruj się'
        onClick={register}
      ></Button>
    </Menu.Item>
  );
};

export default SignedOutMenu;

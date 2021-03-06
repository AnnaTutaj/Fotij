import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";


const SignedInMenu = ({signOut, profile, auth}) => {
  const trigger = <Image avatar src={profile.pictureURL || '/assets/dummyUser.png'} />;

  return (
    <Menu.Item >
      <Dropdown pointing='top left' trigger={trigger}>
        <Dropdown.Menu>
          <Dropdown.Header content={`Profil ${profile.nick}`} />
          <Dropdown.Item
            as={Link}
            to={`/uzytkownik/${auth.uid}`}
            text='Mój profil'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            to='/ustawienia'
            text='Ustawienia'
            icon='setting'
          />
          <Dropdown.Item text='Moje przepisy' icon='clipboard outline' />
          <Dropdown.Item text='Obeserwuję' icon='users' />
          <Dropdown.Item
            text='Wyloguj się'
            icon='power off'
            onClick={signOut}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;

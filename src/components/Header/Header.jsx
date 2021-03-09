import React from "react";
import Search from "../Search/Search.jsx";
import User from "../User/User.jsx";
import {
  HeaderElement,
  HeaderWrapper,
  HeaderColumn,
} from "./Header.styles.jsx";

const Header = () => (
  <HeaderElement>
    <HeaderWrapper>
      <HeaderColumn>
        <Search />
      </HeaderColumn>
      <HeaderColumn>
        <User />
      </HeaderColumn>
    </HeaderWrapper>
  </HeaderElement>
);

export default Header;

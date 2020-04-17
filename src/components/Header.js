import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Explore} from '../svg/explore.svg';
import { ReactComponent as Avatar } from '../svg/avatar.svg';
import { ReactComponent as Compass } from '../svg/compass.svg';

const Nav = styled.div`
    background-color:#fff;
    border-bottom:1px solid rgba(0,0,0,0.975);
    `;

const NavHeader = styled.div`
    max-width:1010px;
    padding:26px 20px;
    width:100%;
    display:flex;
    align-items:center;
    margin:0 auto;
    `;

const NavLeft = styled.div`
    width:33.333%;
    text-align:left;
    `;

const NavCenter = styled.div`
    width:33.333%;
    text-align:center;
    `;

const Input = styled.input`
    font-size:16px;
    border:1px solid #dbdbdb;
    border-radius:3px;
    color:#262626;
    cursor: text;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    background: #fafafa;
    &:active,
    &:focus {
      text-align: left;
    }
  `;
  const NavRight = styled.div`
    width: 33.333%;
    text-align: right;
    svg {
      margin-right: 20px;
    }
  `;

  const MenuLink = styled.a`
    width:50px;
    display:inline-block;
  `;

function Header(){
    return(
        <Nav>
            <NavHeader>
                <NavLeft>Stylegram</NavLeft>
                <NavCenter>
                    <Input type="text" placeholder="Search" />
                </NavCenter>
                <NavRight>
                    <MenuLink href="#">
                        <Compass />
                    </MenuLink>
                    <MenuLink href="#">
                        <Explore />
                    </MenuLink>
                    <MenuLink href="#">
                        <Avatar />
                    </MenuLink>
                </NavRight>
            </NavHeader>
        </Nav>
    );
}

export default Header;
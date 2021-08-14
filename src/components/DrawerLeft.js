import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from "react-router-dom";
import test from "assets/images/123.jpg"
const DrawerLeft = styled.header`
    color:white;
    position: fixed;
    top:0;
    left:0;
    width:230px;
    height:100%;
    z-index: 9;
    display:flex;
    flex-direction: column;
    align-items: start;
    background:linear-gradient(to bottom, rgb(44,57,74), rgb(19,22,29));    
    box-shadow: 0px 1px 5px 2px rgba(0,0,0, 0.8);
`;

const List = styled.ul`
    display:flex;
    flex-direction: column;
    margin-top: 24px;

`;

const Item = styled.li`
    width: 100px;
    height: 50px;
    text-align:center;
    color: ${props => props.current ? "rgb(116,212,237)" : "grey"};
    border-left: 5px solid ${props => props.current ? "rgb(116,212,237)" : "transparent"};
    font-weight:bold;
    font-size:14px;
    padding-left:30px;
    transition: border-bottom .5s ease-in-out;
    :hover{
        color:white;
    }
`;
const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40px 0 20px;
    align-items: center;

`
const ProfileImg = styled.img`
    width:90px;
    margin: 20px 0;
    border-radius:50px;
    box-shadow: 0px 3px 5px 3px rgba(0,0,0, 0.8);
`
const ProfileName = styled.p`
    font-size: 14px;
`

export default withRouter(({location: {pathname}}) => (
    <DrawerLeft>
        <Profile>
            <ProfileImg src={test}></ProfileImg>
            <ProfileName>DongHyun Park</ProfileName>
        </Profile>
        <List>
            <Item current={pathname === "/"}>
                <SLink to="/">Home</SLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <SLink to="/a">A</SLink>
            </Item>
            <Item current={pathname === "/search"}>
                <SLink to="/b">B</SLink>
            </Item>
        </List>
    </DrawerLeft>
))
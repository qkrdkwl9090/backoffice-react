import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import company from "assets/images/company.svg";
import title from "assets/images/Title.png";
import employee from "assets/images/employee.svg";
import home from "assets/images/home.svg";
import user from "assets/images/user.svg";

const DrawerLeft = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: white;
  border-right: 1px solid lightgray;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
`;
const ItemImg = styled.img`
  margin: 0 10px;
  width: 24px;
  height: 24px;
`;
const Item = styled.div`
  margin: 0 20px;
  display: flex;
  height: 50px;
  text-align: center;
  align-items: center;
  border-radius: 8px;
  color: ${(props) => (props.current ? "rgb(0, 49, 113)" : "grey")};
  background: ${(props) =>
    props.current ? "rgb(243,245,249)" : "transparent"};
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s ease-in-out;
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
`;
const Profile = styled.div`
  width: 100%;
  display: flex;
  margin: 30px 0 30px 20px;
  align-items: center;
`;
const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(0, 49, 113);
  font-weight: 700;
  background-color: lightgray;

  border-radius: 50px;
`;
const ProfileRole = styled.p`
  color: grey;
  font-size: 12px;
  margin-bottom: 2px;
`;
const ProfileName = styled.p`
  color: rgb(0, 49, 113);
  font-weight: 700;
  font-size: 14px;
`;
const Company = styled.section`
  margin: 100px 30px 0;
  height: 55px;
  display: flex;
  align-items: center;
`;
const CompanyLogo = styled.img`
  width: 40px;
  margin-right: 10px;
`;
const CompanyTitle = styled.div`
  display: flex;
  font-size: 16px;
`;
const Bold = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-right: 4px;
`;

export default withRouter(({ location: { pathname } }) => (
  <DrawerLeft>
    <Company>
      <CompanyLogo src={title} />
      <CompanyTitle>
        <Bold>X</Bold>Company
      </CompanyTitle>
    </Company>
    <Profile>
      <ProfileIcon>DP</ProfileIcon>
      <div>
        <ProfileRole>Manager</ProfileRole>
        <ProfileName>DongHyun Park</ProfileName>
      </div>
    </Profile>
    <List>
      <Item current={pathname === "/"}>
        <ItemImg src={home} />
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/company"}>
        <ItemImg src={company} />
        <SLink to="/company">Company</SLink>
      </Item>
      <Item current={pathname === "/account"}>
        <ItemImg src={user} />
        <SLink to="/account">Account</SLink>
      </Item>
      <Item current={pathname === "/product"}>
        <ItemImg src={home} />
        <SLink to="/product">Product</SLink>
      </Item>
    </List>
  </DrawerLeft>
));

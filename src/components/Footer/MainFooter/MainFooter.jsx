import React from "react";
import styled from "styled-components";
import FooterColumn from "../FooterColumn/FooterColumn";
import Downloads from "../Downloads/Downloads";
import TextField from "../TextField/TextField";

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-around;
`;

const SubTitle = styled.h4`
  font-size: 20px;
  color: #fafafa;
  margin-bottom: 24px;
`;

const List = styled.ul`
  margin-bottom: 60px;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #fafafa;
  list-style-type: none;
  width: 165px;
  margin-bottom: 16px;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: #fafafa;
`;

const MainFooter = () => {
  return (
    <Container>
      <FooterColumn columnTitle={"Exclusive"}>
        <SubTitle>Subscribe</SubTitle>
        <ListItem>Get 10% off your first order</ListItem>
        <TextField />
      </FooterColumn>

      <FooterColumn columnTitle={"Support"}>
        <List>
          <ListItem>111 Bijou sarnie, Dhaka, DH 1515, Bangladesh.</ListItem>
          <ListItem>exclusive@gmail.com</ListItem>
          <ListItem>+88015-88888-9999</ListItem>
        </List>
      </FooterColumn>

      <FooterColumn columnTitle={"Account"}>
        <List>
          <ListItem>My Account</ListItem>
          <ListItem>Login / Register</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Shop</ListItem>
        </List>
      </FooterColumn>

      <FooterColumn columnTitle={"Quick Link"}>
        <List>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms Of Use</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>Contact</ListItem>
        </List>
      </FooterColumn>

      <FooterColumn columnTitle={"Download App"}>
        <SmallText>Save $3 with App New User Only</SmallText>
        <Downloads />
      </FooterColumn>
    </Container>
  );
};

export default MainFooter;

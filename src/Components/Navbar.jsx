import {Badge} from '@mui/material'
import {Search,ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
        height: 80px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: centre;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: centre;
`;
const Language = styled.span`
    font-size = 14px;
    cursor = Pointer;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: centre;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Centre = styled.div`
    text-align: centre;
`;
const Logo = styled.h1`
    font-weight: bold;
    font-size: 40px;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: centre;
    justify-content: flex-end;    
`;

const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
`;
    
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left> 
            <Logo> Shopping Store </Logo>
            </Left>
            <Centre>
                <SearchContainer>
                <Language>EN</Language>
                    <Input/>
                    <Search style={{color: "gray", fontSize: 16 }}/>
                </SearchContainer>
            </Centre>
            <Right>  
                <a href="/register"><MenuItem>REGISTER</MenuItem> </a>
                <a href="/login"><MenuItem >SIGN IN</MenuItem></a>
                <a href="/cart">
                <MenuItem>
                    <Badge>
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
                </a>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;
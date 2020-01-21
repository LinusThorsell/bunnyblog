import React from 'react'
import styled from 'styled-components'
import logo from '../res/logo.png'
import hamburger from '../res/hamburger.png'

const Container = styled.div`
    width: 100vw;
    height: 8vh;

    background-color: ${props => props.theme.accentedcolor};
    border: ${props => props.theme.navbarborder};
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;
const LogoImg = styled.img`
    height: 100%;
    width: auto;

    align-self: flex-start;
`;
const HamburgerImg = styled.img`
    height: 100%;
    width: auto;

    margin-left: auto;
    align-self: flex-end;

    :hover {
        cursor: pointer;
    }
`;

export default function NavBar() {
    return (
        <Container>
            <LogoImg src={logo} />
            <HamburgerImg src={hamburger} />
        </Container>
    )
}

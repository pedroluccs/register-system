import styled from "styled-components";

export const MainHeader = styled.header`
margin: 12px;
font-size: 20px;
`

export const Nav = styled.nav`
margin: 24px;
margin-bottom: 36px;
display: flex;
justify-content: space-around;
list-style-type: none;

li {
border: 2px solid transparent;
border-radius: 8px;
padding: 4px 8px;
transition: border-color 0.5s;

&:hover {
border-radius: 8px;
border: 2px solid #fff;
padding: 4px 8px;
}
}
`
import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
margin-top: 10vh;
height: 600px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
background: linear-gradient(400deg, black, white 500%);
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 24px;

h1 {
font-size: 24px;
margin-bottom: 36px;
margin-top: 140px;
}
`
export const Input = styled.input`
margin: 10px;
padding: 12px;
padding-right: 120px;
border-radius: 8px;
border: none;
background-color: #383838;
text-align: left;

@media (max-width: 768px) {
padding-right: 120px;
}
`
export const Button = styled.button`
margin: 10px;
padding: 12px 130px;
cursor: pointer;
background-color: #1b2d49;
border-radius: 8px;
border: none;

&:hover {
background-color:rgb(18, 53, 90);
}

@media (max-width: 768px) {
padding: 12px 100px;
}
`

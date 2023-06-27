import styled from "styled-components";


export const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background: #A7D7C5;
`;

export const Box = styled.div`
position:  ${props => props.boxPosition || "absolute"};
width: ${props => props.boxWidth || "320px"};
height: ${props => props.boxHeight || "320px"};
top: ${props => props.boxTop || "60px"};
left: ${props => props.boxLeft || "-165px"};
border-radius: ${props => props.boxBorderRadius || "40px"};
background-color: ${props => props.boxColor || '#C1E3D6'};
transform: rotate(${props => props.boxAngle || "45deg"});
z-index: ${props => props.boxIndex || '1' };
`;

export const Boxwrapper = styled.div`
position: absolute;
width: 455px;
height: 455px;
top: 72px;
left: 173px;
border-radius: 32px;
background: #F6FBF9;
z-index: 2;
`;

export const Title = styled.h1 `
font-size: 36px;
font-weight: 700;
text-align: center;
color: #212B27;
`;

export const Paragraph = styled.p `
font-size: 15px;
font-weight: 400;
text-align: center;
color: #32403B;
`
export const Inputs = styled.input`
width: 375px;
height: 55px;
border-radius: 10px;
border: 1px solid #0000001A;
margin-top:20px;
margin-left:40px;
`
export const Button = styled.button `
width: 255px;
height: 59px;
top: 384px;
left: 273px;
border-radius: 15px;
background: #84C7AE;
font-size: 22px;
font-weight: 600;
text-align: center;
color: #FFFFFF;
border: none;
margin-top:25px;
margin-left:90px;
`



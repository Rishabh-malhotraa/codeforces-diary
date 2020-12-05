import styled from 'styled-components';
import peeps from 'assets/peep-crowd.svg';
import { Typography } from '@material-ui/core';


export const Input = styled.input`
background-color: rgb(38, 48, 60);
outline: 0px;
border: 0px;
border-radius: 0.25rem;
width: 100%;
max-width: 500px;
margin: 0px auto;
padding: 1rem;
color: rgb(121, 184, 255);
font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono',
  'Lucida Console', Monaco, monospace;
font-size: 2rem;
font-weight: 400;
text-align: center;
`;

export const Footer = styled.div`
position: absolute;
left: 0;
bottom: 0;
right: 0;
`;

export const Paragrapgh = styled.div`
a {
 color: rgb(255, 255, 255, 0.6);
 }
padding:1rem;
text-align: center;
background-color: #3a3939;
color: rgb(255, 255, 255, 0.6);
`;



export const Header = styled.div`
display: flex;
justify-content: center;
padding-top: 1rem;
max-height: 70px;
`;

export const TextWrapper = styled(Typography)`
input {
  text-align: center;
}
`;

export const Img = styled.div`
height: 240px;
background-image: url(${peeps});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
mix-blend-mode: luminosity;
`;

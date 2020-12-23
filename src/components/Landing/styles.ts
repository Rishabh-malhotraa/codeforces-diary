import styled from 'styled-components';
import peeps from './../../assets/peep-crowd.svg';
import { Typography } from '@material-ui/core';


export const Input = styled.input`
/* background-color: rgb(38, 48, 60); */
background-color: white;
outline: 0px;
border: 0px;
border-radius: 0.25rem;
width: 100%;
max-width: 500px;
margin: 0px auto;
padding-top: 1rem;
color: rgb(121, 184, 255);
font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono',
  'Lucida Console', Monaco, monospace;
font-size: 2rem;
font-weight: 400;
text-align: center;
  border: 2px solid grey;
&:focus{
  border: 4px solid palevioletred;
  transition: 100ms ease-in border;
}
`;

export const Paragrapgh = styled.div`
a {
 color: rgb(255, 255, 255, 0.6);
 }
padding:1rem;
font-size: 12px;
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
  text-align: center;
}
`;

export const Img = styled.img`
background-image: url(${peeps});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
mix-blend-mode: luminosity;
`;


export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

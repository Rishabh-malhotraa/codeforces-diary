import { Grid, Typography } from '@material-ui/core';
import logo from 'assets/code-forces.svg';
import * as S from './styles';
import React from 'react';

function LandingPage() {
  return (
    <>
      <Grid container direction="column">
        <S.Header>
          <img src={logo} alt="logo" />
        </S.Header>
        <Grid item>
          <S.TextWrapper>
            <Typography variant="h4" gutterBottom>
              Enter Your Codeforces Handle
            </Typography>
            <S.Input type="text" />
          </S.TextWrapper>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <S.Footer>
        <S.Img />
        <S.Paragrapgh>
          Made with &#9829; by Rishabh Malhotra{'  '}•{'  '}
          <a href="https://github.com/rishabh-malhotraa" target="__blank">
            Github
          </a>
        </S.Paragrapgh>
      </S.Footer>
    </>
  );
}

export default LandingPage;

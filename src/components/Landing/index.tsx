import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import logo from "./../../assets/code-forces.svg";
import peeps from "./../../assets/peep-crowd.svg";
import * as S from "./styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

function NextButton() {
  return (
    <IconButton>
      <ArrowForwardRoundedIcon />
    </IconButton>
  );
}

function LandingPage() {
  const [text, setText] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

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
            <TextField
              id="outlined-basic"
              variant="outlined"
              style={{ backgroundColor: "white" }}
              InputProps={{ endAdornment: <NextButton /> }}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleChange(e)}
              value={text}
            />
            <Button variant="contained" style={{ margin: "1rem" }} color="primary">
              {" "}
              GO
            </Button>
          </S.TextWrapper>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <S.Footer>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <S.Img src={peeps} height="250px" />
        </div>
        <S.Paragrapgh>
          Made with &#9829; by Rishabh Malhotra{"  "}•{"  "}
          <a href="https://github.com/rishabh-malhotraa" target="__blank">
            Github
          </a>
        </S.Paragrapgh>
      </S.Footer>
    </>
  );
}

export default LandingPage;

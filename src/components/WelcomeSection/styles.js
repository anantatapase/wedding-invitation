import { css } from '@emotion/core';
import Background from '@assets/images/bg-welcome.jpg';

export const styContainer = css`
  width: 100%;
  height: 100vh;
  min-height: 700px;
`;

export const styBackground = css`
  background: linear-gradient(rgba(153, 110, 109, 0.65), rgba(153, 110, 109, 0.65)), rgba(0, 0, 0, 0.55) url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img.ganesh {
    margin-top: 15px;
    max-width: 120px;
  }

  img.logo {
    max-width: 180px;
  }

  h1 {
    font-size: 6rem;
    line-height: 1.5;
    font-family: 'Cookie', cursive;
    color: #fff;
  }

  h2 {
    font-size: 3rem;
    color: #fff;
    font-weight: 400;
    font-family: 'Cookie', cursive;
  }

  p {
    font-size: 2rem;
    color: #fff;
    font-weight: 500;
    font-family: "Helvetica Neue", Helvetica, cursive;

  }
`;

export const styWrapperCount = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: rgba(241, 78, 149, 0.8);
  margin: 16px;
  border-radius: 50%;
  position: relative;
  animation: pulse 1s ease infinite;
  text-align: center;
  color: #fff;

  h3 {
    font-size: 30px;
    color: #fff;
    margin: 20px 0 0 0;
  }

  @media screen and (max-width: 500px) {
    width: 75px;
    height: 75px;
    margin: 4px;
    font-size: 12px;

    h3 {
      font-size: 24px;
    }
  }

  @media screen and (max-width: 380px) {
    width: 55px;
    height: 55px;

    h3 {
      margin-top: 12px;
      margin-bottom: -4px;
      font-size: 16px;
    }

    span {
      font-size: 10px;
    }
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;

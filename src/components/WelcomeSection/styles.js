import { css, keyframes } from '@emotion/core';
import Background from '@assets/images/bg-welcome.jpg';

export const styHero = css`
  width: 100%;
  height: 100vh;
`;

export const styBackground = css`
  background: linear-gradient(rgba(153, 110, 109, 0.65), rgba(153, 110, 109, 0.65)), rgba(0, 0, 0, 0.55) url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    .title {
      font-size: 40px;
    }

    .sub-title {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 500px) {
    .title {
      font-size: 54px;
    }

    .sub-title {
      font-size: 28px;
    }
  }
`;

export const styWrapper = css`
  color: #fff;
  margin-top:20px;

  img {
    max-width: 180px;
  }

  h1 {
    font-size: 100px;
    line-height: 1.5;
    font-family: 'Cookie', cursive;
    color: #fff;
  }

  h2 {
    font-size: 40px;
    color: #fff;
    font-weight: 400;
    font-family: 'Cookie', cursive;
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

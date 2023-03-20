import { css } from '@emotion/core';

export const styWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b4958f;
  width: 100%;
  min-height: 70vh;

  .button {
    margin: auto;
    margin-top: 16px;
    width: fit-content;
  }

  .sub-title {
    color: #fff !important;
    font-size: 16px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400 !important;

    @media screen and (max-width: 400px) {
      font-size: 15px !important;
    }
  }

  .main-font {
    margin-top: 12px;

    @media screen and (max-width: 400px) {
      line-height: 1;
      margin-bottom: 8px;
    }
  }
`;

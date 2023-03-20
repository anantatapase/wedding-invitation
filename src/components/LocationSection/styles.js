import { css } from '@emotion/core';

export const styWrapper = css`
  background-color: #b4958f;
  width: 100%;

  .button {
    margin: auto;
    margin-top: 16px;
    width: fit-content;
  }

  @media screen and (max-width: 400px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }
`;

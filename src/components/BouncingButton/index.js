import React from 'react';

// import IconIg from './assets/instagram.png';
import { styButtonWrapper } from './styles';

function BouncingButton({ link, title }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <div css={styButtonWrapper}>
                <div className="img__wrapper">
                    <span>{title}</span>
                </div>
            </div>
        </a>
    );
}

export default React.memo(BouncingButton);

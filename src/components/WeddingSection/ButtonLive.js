import React from 'react';

// import IconIg from './assets/instagram.png';
import { styButtonWrapper } from './styles';

function SaveTheDateButton() {
  return (
    <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NDYzdjg2dTYzYm1xajcydjg0dXFxYWhrdTUgYW5hbnRhdGFwYXNlMzFAbQ&tmsrc=anantatapase31%40gmail.com" target="_blank" rel="noreferrer">
      <div css={styButtonWrapper}>
        <div className="img__wrapper">
          <span>Add to calendar</span>
        </div>
      </div>
    </a>
  );
}

export default React.memo(SaveTheDateButton);

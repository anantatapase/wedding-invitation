import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, date, time, location, description }) {
  return (
    <>
      <div className="event-wrap">
        <h3>{title}</h3>
        <div className="event-col">
          <i className="icon-calendar"></i>
          <span>{date}</span>
        </div>
        <div className="event-col">
          <i className="icon-clock"></i>
          <span>{time}</span>
        </div>
        <div style={{display:"inline-block"}}>
          <i className="icon-location-pin"></i>
          <span dangerouslySetInnerHTML={{ __html: location }} />
        </div>
      </div>
    </>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox);

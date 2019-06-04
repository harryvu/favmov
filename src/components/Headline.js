import React from 'react'

const inputStyle = {
    textAlign: 'center'
  };

const Headline = ({ headline, onChangeHeadline }) => (
    <div>
        <h1>{headline}</h1>
        <input type="text" value={headline} onChange={onChangeHeadline} size="50" style={inputStyle} />
    </div>
);

export default Headline;
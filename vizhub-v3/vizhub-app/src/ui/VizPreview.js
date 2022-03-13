import React from 'react';

// See also
// archive/vizhub-v3-false-start/src/App/VizPreview.js
export const VizPreview = ({
  title,
  thumbnailImageURL,
  lastUpdatedDateFormatted,
  ownerName,
  ownerAvatarURL,
}) => (
  <div className="viz-preview">
    <div
      className="thumbnail"
      style={{ backgroundImage: `url("${thumbnailImageURL}")` }}
      alt={title}
    ></div>
    <div className="content-container">
      <div className="last-updated-date">{lastUpdatedDateFormatted}</div>
      <div className="title">{title}</div>
    </div>
    <div className="meta-container">
      {ownerName ? (
        <>
          <img
            className="owner-avatar-image"
            src={ownerAvatarURL}
            alt={ownerName}
          />
          <div className="owner-name">{ownerName}</div>
        </>
      ) : null}
    </div>
  </div>
);
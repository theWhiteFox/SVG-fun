import React from 'react';
import { Container } from './Bootstrap';
import { Navigation } from './Navigation';
import { VizPreview } from './VizPreview';

export const HomePage = () => (
  <div className="overflow-auto">
    <Navigation />
    <Container className="mt-3 mb-3">
      <div className="viz-preview-collection">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((d) => (
          <VizPreview
            title="Viz Title"
            thumbnailImageURL="https://vizhub.com/api/visualization/thumbnail/76631818791a48909d79d6562177e4dc.png"
            lastUpdatedDateFormatted="December 6, 2021"
            ownerName="Joe Schmo"
            ownerAvatarURL="https://github.com/mdo.png"
          />
        ))}
      </div>
    </Container>
  </div>
);
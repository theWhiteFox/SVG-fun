import React, { useContext } from 'react';
import { ProfilePageDataContext } from '../ProfilePageDataContext';
import { NavBar } from '../../../NavBar';
import { Wrapper, Content } from '../../styles';
import { VizPreviews, VizPreview } from './styles';

export const Body = () => {
  const profilePageData = useContext(ProfilePageDataContext);
  const { user, visualizationInfos } = profilePageData;
  const { userName } = user;

  return (
    <Wrapper>
      <Content>
        <NavBar />
        <VizPreviews>
          {visualizationInfos.map(({ id, title }) => (
            <VizPreview
              key={id}
              to={`/${userName}/${id}`}
              title={title}
              style={{
                backgroundImage: `url(/api/visualization/thumbnail/${id}.png)`
              }}
            />
          ))}
        </VizPreviews>
      </Content>
    </Wrapper>
  );
};
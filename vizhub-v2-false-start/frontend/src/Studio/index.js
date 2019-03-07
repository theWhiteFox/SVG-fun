import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../themes';
import { URLStateContext } from '../urlState';
import {
  StudioWrapper,
  ConfiguratorWrapper,
  EditorWrapper,
  ViewerWrapper
} from './styles';
import { Configurator } from './Configurator';
import { Editor } from './Editor';
import { Viewer } from './Viewer';

export const Studio = () => {
  const { showConfigurator, file } = useContext(URLStateContext);

  const showEditor = file !== undefined;

  return (
    <StudioWrapper showConfigurator={showConfigurator} showEditor={showEditor}>
      <ThemeProvider theme={dark}>
        <>
          {showConfigurator ? (
            <ConfiguratorWrapper>
              <Configurator />
            </ConfiguratorWrapper>
          ) : null}
          {showEditor ? (
            <EditorWrapper>
              <Editor />
            </EditorWrapper>
          ) : null}
        </>
      </ThemeProvider>
      <ThemeProvider theme={light}>
        <ViewerWrapper>
          <Viewer />
        </ViewerWrapper>
      </ThemeProvider>
    </StudioWrapper>
  );
};

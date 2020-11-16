import React from 'react';
import { Spinner } from '@blueprintjs/core';

import Screen from 'components/Screen/Screen';

import './LoadingScreen.scss';

const LoadingScreen = (requireSession) => (
  <Screen requireSession={requireSession}>
    <div className="LoadingScreen">
      <div className="spinner">
        <Spinner className="bp3-large" />
      </div>
    </div>
  </Screen>
);

export default LoadingScreen;

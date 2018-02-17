import React from 'react';
import Routes from 'app/Routes';

import { GenericTemplate } from 'templates';

export default class extends React.Component {
  render () {
    return (
      <GenericTemplate>
        <Routes />
      </GenericTemplate>
    );
  }
}

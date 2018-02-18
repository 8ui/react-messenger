import React from 'react';
import Routes from 'app/routes';

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

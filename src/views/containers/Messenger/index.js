import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router'
import styled from 'styled-components';

import { Header, ContactList, Chat, ContactInfo, StartMessaging } from 'organisms'
import { MessengerTemplate } from 'templates'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: nowrap;
`

class Messenger extends React.Component {
  render () {
    const { match } = this.props;
    return (
      <MessengerTemplate>
        <Header />
        <Wrapper>
          <ContactList match={match} />
          <Route path={`${match.path}/:id`} component={Chat} />
          <Switch>
            <Route path={`${match.path}/:id`} component={ContactInfo} />
            <Route exact path={match.path} component={StartMessaging} />
          </Switch>
        </Wrapper>
      </MessengerTemplate>
    );
  }
}

Messenger.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Messenger;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header, ContactList, Chat, ContactInfo, StartMessaging } from 'organisms'
import { MessengerTemplate } from 'templates'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-flow: nowrap;
`

class Messenger extends React.Component {
  renderContent = () => {
    const { match } = this.props;
    if (match.params.id) {
      return [
        <Chat key="chat" match={match} />,
        <ContactInfo key="contact-info" match={match} />
      ]
    }

    return <StartMessaging />
  }
  render () {
    const { match } = this.props;
    return (
      <MessengerTemplate>
        <Header />
        <Wrapper>
          <ContactList match={match} />
          {this.renderContent()}
        </Wrapper>
      </MessengerTemplate>
    );
  }
}

Messenger.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Messenger;

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserData } from 'core/user'
import { getContactById } from 'core/contacts'
import { getMessagesByUser } from 'core/messages'
import styled from 'styled-components';

import { Message, ChatFooter } from 'molucules';


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const MessagesWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px 18px 24px 33px;
`

class Chat extends React.Component {
  renderMessage = (item, i) => (
    <Message key={`message-list-${i}`} message={item} user={item.to ? this.props.user : this.props.interlocutor} />
  )
  render () {
    const { messages } = this.props;
    return (
      <Wrapper>
        <MessagesWrapper>
          {messages.map(this.renderMessage)}
        </MessagesWrapper>
        <ChatFooter />
      </Wrapper>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  interlocutor: PropTypes.object.isRequired,
}

Chat.defaultProps = {

}

const mapStateToProps = (state, props) => ({
  messages: getMessagesByUser(state, props),
  user: getUserData(state),
  interlocutor: getContactById(state, props),
})

export default connect(mapStateToProps)(Chat);

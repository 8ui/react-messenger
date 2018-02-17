import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUserData } from 'core/user'
import { getContactById } from 'core/contacts'
import { getMessagesByUser } from 'core/messages'
import styled from 'styled-components';
import { palette } from 'styled-theme'

import { Message, ChatFooter, ScrollBar } from 'molucules';


const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const MessagesWrapper = styled(ScrollBar)`
  flex: 1;
`
const MessageList = styled.div`
  min-height: 100%;
  padding: 24px 18px 24px 33px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const EmptyMessage = styled.div`
  color: ${palette('default', 3)};
  text-align: center;
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
          <MessageList>
            {messages.length
              ? messages.map(this.renderMessage)
              : <EmptyMessage>Write something</EmptyMessage>
            }
          </MessageList>
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

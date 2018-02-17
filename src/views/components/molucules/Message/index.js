import React from 'react';
import PropTypes from 'prop-types'
import stringReplace from 'react-string-replace'
import styled from 'styled-components';

import { Icon, MessageText } from 'atoms';
import { Avatar } from 'molucules';


const Wrapper = styled.div`
  display: flex;

  flex-grow: 0;
  flex-shrink: 0;
  justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};
`
const AvatarWrapper = styled(Avatar)`
  order: ${props => props.right ? 2 : 0};
  margin: 0 25px;
`
const MessageTextWrapper = styled(MessageText)`
  margin-top: 45px;
  max-width: 65%;
`

class Message extends React.Component {
  formattedText = () => (
    stringReplace(this.props.message.text, /::(\w+)::/g, (match, i) => (
      <Icon key={`message-icons-${i}`} filled name={match} />
    ))
  )
  render () {
    const { message, user } = this.props;
    const right = !!message.to;
    return (
      <Wrapper right={right}>
        <AvatarWrapper right={right} image={user.avatar} />
        <MessageTextWrapper dark={!!message.to}>{this.formattedText()}</MessageTextWrapper>
      </Wrapper>
    );
  }
}

Message.propTypes = {
  user: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
}

Message.defaultProps = {

}

export default Message;

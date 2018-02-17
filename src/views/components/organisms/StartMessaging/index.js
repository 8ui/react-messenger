import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { palette } from 'styled-theme';


import { Icon } from 'atoms'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  color: ${palette('default', 3)};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  i {
    margin-bottom: 10px;
  }
`

class StartMessaging extends React.Component {
  render () {
    return (
      <Wrapper>
        <Icon size={100} name="comment" />
        Select a chat to start messaging
      </Wrapper>
    );
  }
}

StartMessaging.propTypes = {

}

StartMessaging.defaultProps = {

}

export default StartMessaging;

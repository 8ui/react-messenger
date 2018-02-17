import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';


const Wrapper = styled.div`
  background: ${palette('default', 0, true)};
  border-radius: 10px;
  min-height: calc(100vh - 60px);
  max-height: calc(100vh - 60px);
  min-width: calc(100vw - 100px);
  max-width: calc(100vw - 100px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px #697095;
`

class MessengerTemplate extends React.Component {
  render () {
    return (
      <Wrapper {...this.props} />
    );
  }
}

export default MessengerTemplate;

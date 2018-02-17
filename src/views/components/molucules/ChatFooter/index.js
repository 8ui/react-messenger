import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Icon, Input } from 'atoms';


const Wrapper = styled.div`
  height: 60px;
  border-top: 2px solid ${palette('default', 1, true)};
  padding: 9px 50px 9px 52px;
  display: flex;
  align-items: center;
`
const InputWrapper = styled(Input)`
  flex: 1;
  margin: 0 18px 0 10px;
`

class Component extends React.Component {
  render () {
    return (
      <Wrapper>
        <Icon type="fa" name="image" />
        <InputWrapper />
        <Icon type="fa" name="microphone" />
      </Wrapper>
    );
  }
}

Component.propTypes = {

}

Component.defaultProps = {

}

export default Component;

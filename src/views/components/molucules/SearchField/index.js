import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { Input, Icon } from 'atoms';


const Wrapper = styled.div`
  position: relative;
`
const InputWrapper = styled(Input)`
  padding-left: 30px;
  width: 201px;
`
const IconWrapper = styled(Icon)`
  position: absolute;
  top: 50%;
  margin-top: -8px;
  left: 7px;
  font-size: 16px;
`

class Component extends React.Component {
  render () {
    return (
      <Wrapper>
        <IconWrapper name="search" />
        <InputWrapper placeholder="Search..." />
      </Wrapper>
    );
  }
}

Component.propTypes = {

}

Component.defaultProps = {

}

export default Component;

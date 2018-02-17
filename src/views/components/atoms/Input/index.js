import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { palette } from 'styled-theme';


const Wrapper = styled.input`
  height: 40px;
  border: 2px solid ${palette('default', 1, true)};
  border-radius: 20px;
  padding: 0 15px;
  outline: none;
  font-size: 16px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${palette('default', 1, true)};
    opacity: 0.7;
    display: block;
    text-overflow: ellipsis;
  }
`

class Input extends React.Component {
  render () {
    return (
      <Wrapper {...this.props} />
    );
  }
}

Input.propTypes = {

}

Input.defaultProps = {

}

export default Input;

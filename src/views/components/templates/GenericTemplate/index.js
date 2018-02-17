import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { font, palette } from 'styled-theme'
import 'assets/icons/pe-icon-7-filled/main.css'
import 'assets/icons/pe-icon-7-stroke/main.css'


const Wrapper = styled.div`
  min-height: 100vh;
  font-size: 14px;
  background: ${palette('default', 1)};
  color: ${palette('default', 0)};
  font-family: ${font('primary')};
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  a {
    color: ${palette('default', 0)};
  }
  button, input, optgroup, select, textarea {
    font-family: ${font('primary')};
  }
`

class GenericTemplate extends React.Component {
  render () {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

GenericTemplate.propTypes = {
  children: PropTypes.any,
}

export default GenericTemplate

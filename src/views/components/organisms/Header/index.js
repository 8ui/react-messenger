import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Link, Icon } from 'atoms';
import { SearchField } from 'molucules';


const Wrapper = styled.div`
  border-bottom: 2px solid ${palette('default', 1, true)};
  height: 74px;
  flex-basis: 74px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  > div {
    flex: 1;
    display: flex;
    align-items: center;
    &:nth-child(2) {
      justify-content: center;
    }
  }
`
const BackButton = styled(Link)`
  padding: 0 3px 0 11px;
  display: block;
  height: 100%;
  display: flex;
  text-decoration: none;
  align-items: center;
`

class Header extends React.Component {
  render () {
    return (
      <Wrapper>
        <div>
          <BackButton to="/messenger">
            <Icon size={48} name="angle-left" />
          </BackButton>
          <SearchField />
        </div>
        <div>
          <Icon filled name="comment" />
          <Icon filled name="note" />
        </div>
        <div>
          
        </div>
      </Wrapper>
    );
  }
}

Header.propTypes = {

}

Header.defaultProps = {

}

export default Header;

import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContactById } from 'core/contacts'
import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Icon, Button } from 'atoms';
import { Avatar } from 'molucules';


const Wrapper = styled.div`
  width: 530px;
  display: flex;
  border-left: 2px solid ${palette('default', 1, true)};
  overflow-y: auto;
  flex-direction: column;
`
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 58px;
  align-self: center;
`
const Header = styled.div`
  font-size: 24px;
  justify-content: space-between;
  display: flex;
  width: 100%;
  i {
    margin: 0 0 0 28px;
  }
`
const AvatarWrapper = styled.div`
  padding: 100px 0 103px;
  align-self: center;
`
const Footer = styled.div`
  justify-content: space-between;
  display: flex;
`

class ContactInfo extends React.Component {
  renderHeader = () => (
    <Header>
      <div>{this.props.contact.name}</div>
      <div>
        <Icon filled name="photo-gallery" />
        <Icon filled name="video" />
        <Icon filled name="call" />
      </div>
    </Header>
  )
  renderFooter = () => (
    <Footer>
      <Button color="green">
        <Icon size={36} filled name="moon" />
      </Button>
      <Button color="red">
        <Icon size={36} filled name="delete-user" />
      </Button>
    </Footer>
  )
  render () {
    const { contact } = this.props;
    return (
      <Wrapper>
        <Content>
          {this.renderHeader()}
          <AvatarWrapper>
            <Avatar size={340} image={contact.avatar} />
          </AvatarWrapper>
          {this.renderFooter()}
        </Content>
      </Wrapper>
    );
  }
}

ContactInfo.propTypes = {
  contact: PropTypes.object.isRequired,
}

ContactInfo.defaultProps = {

}

const mapStateToProps = (state, props) => ({
  contact: getContactById(state, props),
})

export default connect(mapStateToProps)(ContactInfo);

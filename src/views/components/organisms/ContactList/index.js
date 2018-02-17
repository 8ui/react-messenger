import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContactsData } from 'core/contacts'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'atoms'
import { Avatar } from 'molucules'

const Wrapper = styled.div`
  background-color: ${palette('default', 4)};
  width: 146px;
  overflow-y: auto;
`
const Item = styled(Link)`
  background-color: ${props => props.active ? palette('default', 0, true) : 'transparent'};
  height: 148px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  > div {
    margin: 33px auto 9px;
  }
`

class ContactList extends React.Component {
  renderItem = (item, i) => (
    <Item
      key={`contact-list-${i}`}
      active={+this.props.match.params.id === item.id}
      to={`/messenger/${item.id}`}
    >
      <Avatar
        badge={item.online && {borderColor: ['default', 4], color: 'orange'}}
        image={item.avatar}
      />
      {item.name}
    </Item>
  )
  render () {
    const { contacts } = this.props;
    return (
      <Wrapper>
        {contacts.map(this.renderItem)}
      </Wrapper>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

ContactList.defaultProps = {

}

const mapStateToProps = state => ({
  contacts: getContactsData(state),
})

export default connect(mapStateToProps)(ContactList)

import PropTypes from 'prop-types'
import styled from 'styled-components';
import { palette } from 'styled-theme';


const backgroundColor = ({dark}) => (
  dark ? palette('default', 1) : palette('default', 1, true)
)

const borderRadius = ({dark}) => (
  dark
  ? '999px 0px 999px 999px'
  : '0px 999px 999px 999px'
)

const Color = ({dark}) => (
  palette('default', 0, !!dark)
)

const MessageText = styled.div`
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
  padding: 16px 30px;
  word-break: break-all;
  &, i {
    font-size: 16px;
    color: ${Color};
  }
  i {
    margin: 0;
  }
`

MessageText.propTypes = {

}

MessageText.defaultProps = {

}

export default MessageText;

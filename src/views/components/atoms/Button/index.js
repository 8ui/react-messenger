import styled from 'styled-components';
import { palette } from 'styled-theme';


const Button = styled.a`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${props => palette(props.color, 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &, i {
    color: #fff;
  }
`

Button.propTypes = {

}

Button.defaultProps = {
  color: 'blue',
}

export default Button;

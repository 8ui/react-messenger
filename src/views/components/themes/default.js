// https://github.com/diegohaz/arc/wiki/Styling
import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  default: [
    '#1E2034',
    '#6C6F96',
    '#C4C8DE',
    '#c7cae1',
    '#E8E9F9',
    '#FFFFFF',
  ],
  primary: [],
  secondary: [],
  grayscale: [],

  blue: ['#5CD3FF'],
  red: ['#DD5555'],
  orange: ['#FF8D5C'],
  green: ['#7AD152'],
  white: ['#FFF'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: "'Varela Round', sans-serif",
}

theme.sizes = {}

export default theme

import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"
parnassusTheme.headerFontFamily = ['Permanent Marker']
parnassusTheme.bodyFontFamily = ['Sniglet']

const typography = new Typography(parnassusTheme)

export const { scale, rhythm, options } = typography

export default typography

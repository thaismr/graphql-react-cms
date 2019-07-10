import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"
parnassusTheme.headerFontFamily = ['Permanent Marker','Verdana','Helvetica']
parnassusTheme.bodyFontFamily = ['Sniglet','Verdana','Helvetica']

const typography = new Typography(parnassusTheme)

export const { scale, rhythm, options } = typography

export default typography
